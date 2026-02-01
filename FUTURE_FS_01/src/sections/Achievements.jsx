// import SectionWrapper from "../components/SectionWrapper";
// import { achievements } from "../data/achievements";
// import { motion } from "framer-motion";

// export default function Achievements() {
//   return (
//     <SectionWrapper
//       id="achievements"
//       className="bg-gradient-to-b from-black via-[#020617] to-black"
//     >
//       <h2 className="text-4xl font-bold mb-16 text-white">
//         Achievements
//       </h2>

//       <div className="grid md:grid-cols-2 gap-8">
//         {achievements.map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1, duration: 0.5 }}
//             viewport={{ once: true }}
//             className="p-6 rounded-2xl
//               bg-white/5 border border-white/10
//               hover:border-cyan-400/40
//               hover:shadow-[0_20px_50px_-15px_rgba(56,189,248,0.35)]
//               transition-all"
//           >
//             <h3 className="text-xl font-semibold text-white">
//               {item.title}
//             </h3>

//             <p className="mt-3 text-slate-400 leading-relaxed">
//               {item.desc}
//             </p>

//             <div className="mt-4 flex items-center justify-between">
//               <span className="text-sm text-cyan-400">
//                 {item.year}
//               </span>

//               {item.proof && (
//                 <a
//                   href={item.proof}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-sm text-cyan-400 hover:underline"
//                 >
//                   View Proof →
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </SectionWrapper>
//   );
// }

import SectionWrapper from "../components/SectionWrapper";
import { achievements } from "../data/achievements";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function Achievements() {
  return (
    <SectionWrapper
      id="achievements"
      className="bg-gradient-to-b from-black via-[#020617] to-black"
    >
      <h2 className="text-4xl font-bold mb-16 text-white">
        Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((item, i) => (
          // <motion.div
          //   key={i}
          //   initial={{ opacity: 0, y: 30 }}
          //   whileInView={{ opacity: 1, y: 0 }}
          //   transition={{ delay: i * 0.1, duration: 0.5 }}
          //   viewport={{ once: true }}
          //   className="relative p-6 rounded-2xl
          //     bg-white/5 border border-white/10
          //     hover:border-cyan-400/40
          //     hover:shadow-[0_20px_50px_-15px_rgba(56,189,248,0.35)]
          //     transition-all"
          // >

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="relative p-6 rounded-2xl
    bg-white/5 border border-white/10
    hover:border-cyan-400/40
    hover:shadow-[0_25px_50px_-15px_rgba(56,189,248,0.35)]
    transition-all cursor-pointer"
          >

            {/* COUNT BADGE */}
            {item.title.includes("DSA") && (
              <span className="absolute top-4 right-4
                px-3 py-1 text-xs font-semibold
                rounded-full bg-cyan-500/10 text-cyan-400
                border border-cyan-400/20">
                165+ Problems
              </span>
            )}

            <h3 className="text-xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="mt-3 text-slate-400 leading-relaxed">
              {item.desc}
            </p>

            <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
              <span className="text-sm text-cyan-400">
                {item.year}
              </span>

              {/* PROOF LINKS */}
              <div className="flex gap-4">
                {item.proof && (
                  <a
                    href={item.proof}
                    target="_blank"
                    rel="noreferrer"
                    title="View LeetCode Profile"
                    className="group flex items-center gap-2
                      text-sm text-cyan-400 hover:underline"
                  >
                    <img
                      src="/icons/leetcode.svg"
                      alt="LeetCode"
                      className="w-5 h-5 opacity-80 group-hover:opacity-100"
                    />
                    LeetCode
                    <ExternalLink size={14} />
                  </a>
                )}

                {item.proof2 && (
                  <a
                    href={item.proof2}
                    target="_blank"
                    rel="noreferrer"
                    title="View GeeksforGeeks Profile"
                    className="group flex items-center gap-2
                      text-sm text-cyan-400 hover:underline"
                  >
                    <img
                      src="/icons/gfg.svg"
                      alt="GeeksforGeeks"
                      className="w-5 h-5 opacity-80 group-hover:opacity-100"
                    />
                    GFG
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
