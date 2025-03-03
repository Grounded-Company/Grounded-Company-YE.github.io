import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function CartIcon() {
  const { items, totalItems, subtotal } = useCart();

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Link href="/cart">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Button>
        </Link>
      </HoverCardTrigger>
      <HoverCardContent align="end" className="w-64">
        {items.length > 0 ? (
          <div className="space-y-4">
            <div className="space-y-2">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name} × {item.quantity}</span>
                  <span className="font-medium">
                    £{((item.price * item.quantity) / 100).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t pt-2">
              <div className="flex justify-between font-medium">
                <span>Subtotal</span>
                <span>£{(subtotal / 100).toFixed(2)}</span>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="/cart">View Cart</Link>
            </Button>
          </div>
        ) : (
          <div className="text-center py-2">
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}
