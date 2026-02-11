import Link from "next/link";
import { Compass, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
      <Empty>
        <EmptyHeader>
          <EmptyTitle className="text-8xl font-bold tracking-tighter text-primary/20">
            404
          </EmptyTitle>
          <EmptyDescription className="text-base">
            The page you&apos;re looking for might have been moved or
            doesn&apos;t exist.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/" className="gap-2">
                <Home className="size-4" />
                Go Home
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/#services" className="gap-2">
                <Compass className="size-4" />
                Explore
              </Link>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}
