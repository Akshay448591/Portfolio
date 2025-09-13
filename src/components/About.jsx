import { motion } from "framer-motion";

const educationData = [
  {
    id: 1,
    date: "2020-2021",
    degree: "Class 10th",
    school: "Swamy Vivekananda English Medium School",
    grade: "79.8%",
    desc: "Completed my 10th standard with a strong foundation in mathematics and science, which built my interest in technology.",
  },
  {
    id: 2,
    date: "2021-2023",
    degree: "Class 12th",
    school: "Sri Sharda PU College",
    grade: "84%",
    desc: "Focused on the science stream with PCM (Physics, Chemistry, Mathematics), further developing my analytical and problem-solving skills.",
  },
  {
    id: 3,
    date: "2023-2027",
    degree: "B-Tech in Computer Science Engineering",
    school: "ITS Engineering College",
    grade: "Pursuing",
    desc: "Currently pursuing a Bachelor's degree in Computer Science Engineering, learning full-stack development, data structures, and modern technologies.",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-gray-900 text-white px-8 md:px-16"
    >
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
        Education
      </h2>

      {/* Timeline container */}
      <div className="relative border-l-2 border-gray-600 ml-6 pl-8 space-y-12">
        {educationData
          .map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Date */}
              <span className="inline-block mb-1 text-lg font-bold text-yellow-400">
                {item.date}
              </span>

              {/* Degree */}
              <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
                {item.degree}
              </h3>

              {/* School */}
              <h4 className="text-xl text-gray-300">{item.school}</h4>

              {/* Grade */}
              {item.grade && (
                <p className="mt-2 text-gray-400 font-bold">
                  Grade: {item.grade}
                </p>
              )}

              {/* Description */}
              <p className="mt-2 text-gray-400">{item.desc}</p>
            </motion.div>
          ))
          .reverse() /* latest first */}
      </div>
    </section>
  );
}
