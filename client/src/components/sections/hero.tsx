import { motion } from "framer-motion";
import WaitlistForm from "../waitlist-form";

export default function Hero({ waitlistCount }: { waitlistCount: number }) {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Transform Your Business with AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Join {waitlistCount.toLocaleString()} others waiting to revolutionize their workflow with our cutting-edge AI platform.
          </p>
          <WaitlistForm />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1559273514-468728ffc16c"
            alt="AI Platform Preview"
            className="rounded-lg shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
