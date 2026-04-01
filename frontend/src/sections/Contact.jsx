import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import { useOrderStore } from "../stores/useOrderStore";
import toast from "react-hot-toast";

export default function Contact() {
  const createOrder = useOrderStore((state) => state.createOrder);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await createOrder(form);

      toast.success("Message sent successfully 🚀");

      setForm({
        name: "",
        email: "",
        phone: "",
        plan: "",
        message: "",
      });
    } catch (err) {
      toast.error(err || "Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="Contact"
      className="min-h-screen py-20 flex items-center justify-center flex-col gap-8"
    >
      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: [0.25, 0.8, 0.25, 1],
        }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4">
          Let's Work Together
        </h2>

        <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto text-center mb-10">
          Have a project in mind? Fill the form and let’s build something great
          together.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
        >
          {/* Full Name */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            type="text"
            placeholder="Full Name"
            className="
            text-sm sm:text-base
            placeholder:text-xs sm:placeholder:text-sm
            p-3 rounded-xl
            bg-white/10 backdrop-blur
            border border-white/20
            text-text-primary
            placeholder:text-text-secondary
            outline-none
            focus:border-green focus:ring-2 focus:ring-green/30
            transition
            "
          />

          {/* Email */}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
            placeholder="Email"
            className="text-sm sm:text-base
  placeholder:text-xs sm:placeholder:text-sm p-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-text-primary placeholder:text-text-secondary outline-none focus:border-green focus:ring-2 focus:ring-green/30 transition"
          />

          {/* Phone */}
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            type="tel"
            placeholder="Phone"
            className=" text-sm sm:text-base
  placeholder:text-xs sm:placeholder:text-sm p-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-text-primary placeholder:text-text-secondary outline-none focus:border-green focus:ring-2 focus:ring-green/30 transition"
          />

          {/* Plan */}
          <select
            name="plan"
            value={form.plan}
            onChange={handleChange}
            required
            className="text-sm sm:text-base
  placeholder:text-xs sm:placeholder:text-sm p-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-text-primary outline-none focus:border-green focus:ring-2 focus:ring-green/30 transition"
          >
            <option value="">Choose your plan</option>
            <option value="basic">Basic</option>
            <option value="standard">Standard</option>
            <option value="premium">Premium</option>
            <option value="custom">Custom</option>
          </select>

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Message"
            className="p-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-text-primary placeholder:text-text-secondary outline-none focus:border-green focus:ring-2 focus:ring-green/30 transition resize-none text-sm sm:text-base
  placeholder:text-xs sm:placeholder:text-sm"
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="
            text-sm sm:text-base
            cursor-pointer
            group relative flex items-center justify-center gap-2
            mt-4 p-4 rounded-2xl
            bg-white/10 backdrop-blur-lg
            border border-white/20
            shadow-lg
            transition-all duration-300
            hover:scale-[1.02] hover:shadow-xl
            "
          >
            <span className="font-medium">
              {loading ? "Sending..." : "Send Message"}
            </span>

            <span className="text-violet transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight size={20} />
            </span>
          </button>
        </form>
      </motion.div>

      <Footer />
    </section>
  );
}
