import { motion } from "framer-motion";

export default function SectionWrapper({
  id,
  children,
  className = "",
}) {
  return (
    <motion.section
      id={id}
      className={`relative overflow-hidden py-28 px-6 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-600/15 to-purple-600/15 animate-gradient" />

      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-cyan-500/25 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/25 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
}
