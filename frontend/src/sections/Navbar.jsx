import { Home, DollarSign, Folder, Mail } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: DollarSign, label: "Pricing" },
  { icon: Folder, label: "Projects" },
  { icon: Mail, label: "Contact" },
];

export default function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.8, 0.25, 1], // smooth custom easing
      }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className="
        flex items-center gap-4 px-4 py-2
        sm:gap-8 sm:px-6 sm:py-3
        rounded-2xl
        bg-white/30 backdrop-blur-lg
        border border-white/20
        shadow-lg
      "
      >
        {navItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <a
              key={i}
              className="relative group cursor-pointer"
              href={`#${item.label}`}
            >
              {/* Icon */}
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-text-secondary transition-transform duration-300 group-hover:text-text-primary group-hover:scale-110" />

              {/* Tooltip */}
              <span
                className="
                absolute -bottom-10 left-1/2 -translate-x-1/2
                text-xs px-2 py-1
                rounded-md
                bg-bg-secondary text-bg-primary
                opacity-0 group-hover:opacity-100
                transition-all duration-200
                whitespace-nowrap
              "
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </motion.div>
  );
}
