import { NextRequest, NextResponse } from "next/server";

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 120;

type Bucket = {
  count: number;
  resetAt: number;
};

const globalForRateLimit = globalThis as typeof globalThis & {
  __rateLimitStore?: Map<string, Bucket>;
};

const rateLimitStore = globalForRateLimit.__rateLimitStore ?? new Map<string, Bucket>();
globalForRateLimit.__rateLimitStore = rateLimitStore;

function getClientId(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function applyRateLimit(clientId: string): {
  allowed: boolean;
  remaining: number;
  resetAt: number;
} {
  const now = Date.now();
  const bucket = rateLimitStore.get(clientId);

  if (!bucket || now > bucket.resetAt) {
    const resetAt = now + WINDOW_MS;
    rateLimitStore.set(clientId, { count: 1, resetAt });
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetAt };
  }

  if (bucket.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetAt: bucket.resetAt };
  }

  bucket.count += 1;
  rateLimitStore.set(clientId, bucket);
  return {
    allowed: true,
    remaining: Math.max(0, MAX_REQUESTS - bucket.count),
    resetAt: bucket.resetAt,
  };
}

export function middleware(request: NextRequest) {
  // Avoid throttling local development and HMR activity.
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next();
  }

  const clientId = getClientId(request);
  const result = applyRateLimit(clientId);

  if (!result.allowed) {
    return new NextResponse("Too Many Requests", {
      status: 429,
      headers: {
        "Retry-After": Math.max(1, Math.ceil((result.resetAt - Date.now()) / 1000)).toString(),
        "X-RateLimit-Limit": MAX_REQUESTS.toString(),
        "X-RateLimit-Remaining": "0",
      },
    });
  }

  const response = NextResponse.next();
  response.headers.set("X-RateLimit-Limit", MAX_REQUESTS.toString());
  response.headers.set("X-RateLimit-Remaining", result.remaining.toString());
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js|map)$).*)"],
};
