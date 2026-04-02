import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";

const plans = [
  {
    title: "Basic",
    price: "7,000 DA+",
    features: ["Landing Page", "Responsive Design", "Fast Delivery"],
  },
  {
    title: "Standard",
    price: "30,000 DA+",
    features: ["Multi Pages", "Admin Dashboard", "Database Integration"],
  },
  {
    title: "Premium",
    price: "60,000 DA+",
    features: ["Full Web App", "Authentication", "Payment Integration"],
  },
  {
    title: "Custom",
    price: "Contact Me",
    features: ["Custom Features", "Scalable App", "Full Support"],
  },
];

export default function Pricing() {
  return (
    <section
      id="Pricing"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <motion.div
        className="w-full"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-center">
          Pricing
        </h2>
        <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto text-center mb-10">
          Choose the plan that fits your needs. Each package delivers modern,
          scalable web solutions with strong performance and clean design.
        </p>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 ">
          {plans.map((plan) => (
            <Card
              key={plan.title}
              title={plan.title}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
