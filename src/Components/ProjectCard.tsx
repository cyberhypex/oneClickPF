import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0.6 }}
      animate={{
        opacity: [0.6, 1, 0.7],
        boxShadow: [
          "0 0 5px rgba(251,191,36,0.4)",
          "0 0 20px rgba(251,191,36,1)",
          "0 0 8px rgba(251,191,36,0.5)"
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 2
      }}
      className="w-[280px] min-h-[180px] border border-amber-500 rounded-xl p-4 text-white backdrop-blur-md bg-white/5"
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>

      <p className="text-xs opacity-80 mb-3">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-3">
        {tech.map((t, i) => (
          <span
            key={i}
            className="text-[10px] border border-white px-2 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 text-xs">
        {github && (
          <a href={github} target="_blank" className="underline">
            GitHub
          </a>
        )}
        {live && (
          <a href={live} target="_blank" className="underline">
            Live
          </a>
        )}
      </div>
    </motion.div>
  );
}