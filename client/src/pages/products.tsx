import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Product } from "@shared/schema";

export default function Products() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  return (
    <main className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Journals</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of plantable journals, each designed to nurture your personal growth
            while giving back to nature.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            Array(3).fill(0).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="aspect-square bg-muted rounded-lg mb-4" />
                  <div className="h-4 bg-muted rounded w-3/4 mb-3" />
                  <div className="h-3 bg-muted rounded w-1/2 mb-4" />
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded" />
                    <div className="h-2 bg-muted rounded" />
                    <div className="h-2 bg-muted rounded w-4/5" />
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            products?.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="aspect-square object-cover rounded-lg mb-6"
                      />
                    ) : (
                      <div className="aspect-square bg-primary/10 rounded-lg mb-6 flex items-center justify-center">
                        <span className="text-xl font-semibold text-primary">
                          {product.name}
                        </span>
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <div className="space-y-2">
                      {product.features?.map((feature, i) => (
                        <div key={i} className="text-sm text-muted-foreground">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex justify-between items-center">
                    <div className="text-xl font-semibold">
                      ${(product.price / 100).toFixed(2)}
                    </div>
                    <Button variant="default">Add to Cart</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
