import { useState } from "react";
import { Github, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Hoodie Website",
    description:
      "A responsive landing page for a hoodie brand, built with pure HTML and CSS. Optimized for screens up to 768px, ensuring smooth viewing on tablets and smaller devices.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/Akshay448591/hoodie-website",
    webapp: "https://akshay448591.github.io/hoodie-website/",
  },
  {
    id: 2,
    title: "Photo-Agency",
    description:
      "A stylish and responsive photography agency website created using HTML, CSS, and SASS. Focused on clean design, typography, and layout without any JavaScript dependencies.",
    tags: ["HTML", "CSS", "SASS"],
    github: "https://github.com/Akshay448591/Photo-Agency",
    webapp: "https://akshay448591.github.io/Photo-Agency/",
  },
  {
    id: 3,
    title: "The Art Project",
    description:
      "An elegant and minimalistic art showcase website built with HTML and CSS. Designed to highlight artwork and provide information in a visually appealing layout.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/Akshay448591/The-Art-Project",
    webapp: "https://akshay448591.github.io/The-Art-Project/",
  },
  {
    id: 4,
    title: "Coffee Project",
    description:
      "A modern coffee shop landing page designed with HTML and CSS. Fully responsive for mobile and tablet devices (480px & 768px breakpoints), with an inviting and clean UI.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/Akshay448591/Coffee-Project",
    webapp: "https://akshay448591.github.io/Coffee-Project/",
  },
  {
    id: 5,
    title: "Sidecup Family Golf",
    description:
      "A feature-rich golf course website built with HTML, CSS, and SASS, enhanced by JavaScript and GSAP animations for smooth scrolling and interactive user experience.",
    tags: ["HTML", "CSS", "SASS", "JavaScript", "GSAP"],
    github: "https://github.com/Akshay448591/Family-Golf",
    webapp: "https://akshay448591.github.io/Family-Golf/",
  },
  {
    id: 6,
    title: "Calculator",
    description:
      "A functional calculator built using HTML, CSS, and JavaScript. Supports basic arithmetic operations with a clean, responsive interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Akshay448591/Calculator",
    webapp: "https://akshay448591.github.io/Calculator/",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="w-full bg-gray-900 text-white px-8 md:px-16 py-20"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-12 text-center">
        Projects
      </h2>

      {/* Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            onClick={() => setSelected(project)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group border border-gray-700 bg-gray-800 rounded-2xl shadow-xl p-6 cursor-pointer hover:shadow-2xl hover:shadow-yellow-500/30 transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Gradient header */}
            <div className="h-2 w-full rounded bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mb-4"></div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-2xl w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setSelected(null)}
              >
                <X className="w-6 h-6" />
              </button>

              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                {selected.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selected.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 mb-6">{selected.description}</p>
              <div className="flex space-x-4">
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm font-semibold"
                >
                  <Github className="w-5 h-5" /> GitHub
                </a>
                <a
                  href={selected.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded text-sm font-semibold"
                >
                  <ExternalLink className="w-5 h-5" /> Live
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
