import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Leaf, Heart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Made with 100% recycled paper and embedded with real flower seeds"
  },
  {
    icon: Heart,
    title: "Self-Care",
    description: "Daily prompts and exercises to nurture your personal growth"
  },
  {
    icon: Brain,
    title: "Mindfulness",
    description: "Structured reflection spaces to cultivate awareness and presence"
  }
];

export default function Home() {
  const { data: products } = useQuery<any>({
    queryKey: ["/api/products"],
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold leading-tight mb-6"
            >
              Plant Your Thoughts,{" "}
              <span className="text-primary">Grow Your Journey</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              A revolutionary journal that transforms your reflections into real flowers. 
              Write your story, plant your pages, and watch your growth bloom.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/products">
                <Button size="lg" className="bg-primary text-primary-foreground">
                  Explore Our Journals
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Growth Journal?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              More than just a journal, it's a journey of personal growth that creates real environmental impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}