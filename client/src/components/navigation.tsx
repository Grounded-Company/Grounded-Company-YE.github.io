import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import CartIcon from "./cart-icon";

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 mr-8">
          <img 
            src="/attached_assets/image-removebg-preview (11).png" 
            alt="Grounded Logo"
            className="h-10 w-auto"
          />
        </Link>

        <div className="flex gap-6 flex-1 justify-center">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/team", label: "Our Team" },
            { href: "/products", label: "Growth Journal" },
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
        <div className="flex items-center">
          <CartIcon />
        </div>
      </div>
    </nav>
  );
}