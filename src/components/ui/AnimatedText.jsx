import { motion } from "framer-motion";
import { viewport } from "@/utils/motion";

/**
 * Splits text into words and animates each one up on scroll.
 * Usage: <AnimatedText text="Hello World" className="text-4xl font-display" />
 */
export default function AnimatedText({
  text,
  className = "",
  tag = "h2",
  delay = 0,
}) {
  const words = text.split(" ");
  const Tag = tag;

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08, delayChildren: delay },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      <Tag
        className={className}
        style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}
      >
        {words.map((w, i) => (
          <motion.span
            key={i}
            variants={word}
            style={{ display: "inline-block" }}
          >
            {w}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
