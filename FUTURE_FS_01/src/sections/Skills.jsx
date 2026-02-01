import { skills } from "../data/skills";
import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

export default function Skills() {
 
    const skillCategories = {
    "Languages": skills["Languages"],
    "Frontend": skills["Frontend"],
    "Backend": skills["Backend"],
    "Databases / ORM": skills["Databases / ORM"],
    "Cloud & Tools": skills["Cloud & Tools"],
    "AI & APIs": skills["AI & APIs"],
  };

  return (
    <SectionWrapper id="skills">
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">
            Skills & Technologies
          </h2>

          <div className="flex flex-col gap-10">
            {Object.entries(skillCategories).map(([category, skillsInCategory]) => (
              <div key={category} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                {/* Category Heading */}
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category}</h3>

                {/* Small skill boxes */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {skillsInCategory.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
                      whileHover={{ y: -6, scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative rounded-2xl px-5 py-6 text-center text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-md hover:border-[var(--primary)] transition"
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_70%)]" />

                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <span className="text-3xl">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}



          {/* Large skill category boxes */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-[var(--primary)] transition"
              >
                <span className="text-4xl text-[var(--primary)]">
                  {category.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold mb-1">{category.title}</h3>
                  <p className="text-white/80 text-sm">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div> */}
        