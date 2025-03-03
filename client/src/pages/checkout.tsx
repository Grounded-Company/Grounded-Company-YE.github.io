import { motion } from "framer-motion";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function Checkout() {
  const { items, subtotal, shipping, vat, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="container px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">
          Add some items to your cart before proceeding to checkout.
        </p>
        <Button asChild>
          <Link href="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="container px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
              <p className="text-muted-foreground">
                Payment integration coming soon...
              </p>
            </Card>
          </div>

          <div className="lg:sticky lg:top-4 h-fit">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} × {item.quantity}</span>
                    <span>£{((item.price * item.quantity) / 100).toFixed(2)}</span>
                  </div>
                ))}
                <div className="pt-4 border-t space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>£{(subtotal / 100).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>£{(shipping / 100).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VAT (20%)</span>
                    <span>£{(vat / 100).toFixed(2)}</span>
                  </div>
                  <div className="pt-2 border-t flex justify-between font-semibold">
                    <span>Total</span>
                    <span>£{(total / 100).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6">
                Pay Now
              </Button>
            </Card>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
