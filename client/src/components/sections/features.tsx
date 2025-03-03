import { motion } from "framer-motion";
import { Rocket, Zap, Shield, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const features = [
  {
    title: "Lightning Fast",
    description: "Process data at unprecedented speeds with our optimized AI engine",
    icon: Zap,
  },
  {
    title: "Enterprise Ready",
    description: "Built for scale with enterprise-grade security and compliance",
    icon: Shield,
  },
  {
    title: "Team Collaboration",
    description: "Seamlessly collaborate with your team in real-time",
    icon: Users,
  },
  {
    title: "Quick Integration",
    description: "Get up and running in minutes with our easy-to-use API",
    icon: Rocket,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform combines cutting-edge AI technology with enterprise-ready features
            to help you stay ahead of the competition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <feature.icon className="w-10 h-10 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}