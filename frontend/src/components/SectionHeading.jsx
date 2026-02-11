import React from "react";
import { motion } from "framer-motion";


export default function SectionHeading({
  title,
  subtitle,
  className,
  align = "center",
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl mx-auto",
        className,
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        }
      )}
    >
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent font-semibold tracking-wide uppercase text-sm mb-3 block"
        >
          {subtitle}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={cn(
          "h-1.5 w-20 bg-accent rounded-full mb-6",
          {
            "mx-auto": align === "center",
            "ml-auto": align === "right",
          }
        )}
      />
    </div>
  );
}
