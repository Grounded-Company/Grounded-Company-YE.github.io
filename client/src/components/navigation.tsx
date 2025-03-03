import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Sprout } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-8">
          <Sprout className="h-6 w-6 text-primary" />
          <span className="font-semibold">The Growth Journal</span>
        </Link>

        <div className="flex gap-6">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/team", label: "Our Team" },
            { href: "/products", label: "The Journal" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}