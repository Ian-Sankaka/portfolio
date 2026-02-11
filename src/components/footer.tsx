export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Ian Sankaka. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
