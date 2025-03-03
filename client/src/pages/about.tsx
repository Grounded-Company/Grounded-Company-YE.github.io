import { motion } from "framer-motion";
import { Leaf, Heart, Sprout } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Every journal is made from 100% recycled materials and contains real flower seeds."
  },
  {
    icon: Heart,
    title: "Personal Growth",
    description: "We believe in nurturing both inner reflection and outer beauty through mindful journaling."
  },
  {
    icon: Sprout,
    title: "Innovation",
    description: "Pioneering the fusion of personal development and environmental consciousness."
  }
];

export default function About() {
  return (
    <main className="py-20">
      <div className="container px-4">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-muted-foreground">
            At Growth Journal, we're reimagining the way people connect with their personal growth journey.
            Our innovative plantable journals merge mindful reflection with environmental impact,
            creating a unique experience that nurtures both inner growth and our planet.
          </p>
        </motion.div>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="prose prose-lg mx-auto">
            <p>
              Founded in 2024, Growth Journal emerged from a simple yet powerful idea:
              what if our journey of self-reflection could directly contribute to environmental renewal?
            </p>
            <p>
              We partnered with environmental experts and paper craftsmen to develop our unique
              seed-embedded paper, ensuring that every journal could transform into a garden of wildflowers.
            </p>
            <p>
              Today, we're proud to offer a product that not only helps people document their personal
              growth but also allows them to physically plant their achievements and watch them bloom.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
