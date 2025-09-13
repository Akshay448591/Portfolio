import { motion } from "framer-motion";
import { Code } from "lucide-react";

const skills = [
  "HTML",
  "CSS",
  "Javascript",
  "SASS",
  "ReactJS",
  "TailwindCSS",
  "MongoDB",
  "ExpressJS",
  "NodeJS",
  "GSAP",
  "Motion",
  "ShadCN",
  "DaisyUI",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-gray-900 text-white px-4 sm:px-8 md:px-16 py-20"
    >
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-12 text-center">
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-6 rounded-2xl bg-gray-800 border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-yellow-500/30 transition-transform duration-300 hover:-translate-y-2"
          >
            <Code className="w-6 h-6 text-yellow-400" />
            <span className="text-lg font-semibold">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
