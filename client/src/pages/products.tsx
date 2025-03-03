import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Book, Sprout, Heart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useToast } from "@/hooks/use-toast";
import type { Product } from "@shared/schema";

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Made with 100% recycled paper that's gentle on our planet"
  },
  {
    icon: Sprout,
    title: "Plantable Pages",
    description: "Special pages embedded with wildflower seeds you can plant"
  },
  {
    icon: Book,
    title: "Guided Journaling",
    description: "Thoughtful prompts to inspire your daily reflection"
  },
  {
    icon: Heart,
    title: "Self-Care Focus",
    description: "Mindfulness exercises to nurture your well-being"
  }
];

export default function Products() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });
  const { addItem } = useCart();
  const { toast } = useToast();

  const journal = products?.[0];

  const handleAddToCart = () => {
    if (journal) {
      addItem({
        id: journal.id,
        name: journal.name,
        price: journal.price,
        quantity: 1
      });
      toast({
        title: "Added to cart",
        description: "The Growth Journal has been added to your cart."
      });
    }
  };

  return (
    <main className="py-20">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">The Growth Journal</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A revolutionary journal that transforms your daily reflections into living flowers.
            Write your story, plant your pages, and watch your growth bloom - literally.
          </p>
        </motion.div>

        {isLoading ? (
          <Card className="animate-pulse">
            <CardContent className="p-6">
              <div className="aspect-[16/9] bg-muted rounded-lg mb-4" />
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded w-3/4" />
                <div className="h-4 bg-muted rounded w-1/2" />
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {journal?.imageUrl ? (
                <img
                  src={journal.imageUrl}
                  alt="The Growth Journal"
                  className="rounded-lg shadow-xl"
                />
              ) : (
                <div className="aspect-[4/3] bg-primary/5 rounded-lg flex items-center justify-center">
                  <Book className="w-20 h-20 text-primary/40" />
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-4">Transform Your Journey</h2>
              <p className="text-muted-foreground mb-6">
                {journal?.description || 
                "A unique journal that combines personal development with environmental impact. Each page is crafted from premium recycled paper embedded with wildflower seeds."}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold">
                  £{journal ? (journal.price / 100).toFixed(2) : "29.99"}
                </span>
                <Button size="lg" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
              </div>
            </motion.div>
          </div>
        )}

        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}