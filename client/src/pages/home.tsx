import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Leaf, Heart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Made with 100% recycled paper and embedded with emotion-specific flower seeds"
  },
  {
    icon: Heart,
    title: "Emotional Growth",
    description: "Transform your feelings into living, growing symbols of personal development"
  },
  {
    icon: Brain,
    title: "Mindful Practice",
    description: "Process emotions through the therapeutic combination of journaling and gardening"
  }
];

export default function Home() {
  const { data: products } = useQuery<any>({
    queryKey: ["/api/products"],
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Stay Grounded,{" "}
              <span className="eco-gradient">Grow with Purpose</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground mb-8"
            >
              Transform your emotions into living memories with our revolutionary plantable journal. 
              Write, reflect, and watch your feelings bloom into beautiful flowers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <Link href="/products">
                <Button size="lg" className="button-primary text-primary-foreground">
                  Explore Our Journal
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Grounded?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our mission is to provide a mindful and sustainable way to process emotions 
              by transforming journaling into a living, growing experience.
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