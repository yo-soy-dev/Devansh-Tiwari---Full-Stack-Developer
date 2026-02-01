// import { motion } from "framer-motion";

// export default function Footer() {
//   return (
//     <motion.footer
//       className="py-10 px-6 text-center border-t border-slate-800"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.6 }}
//     >
//       <p className="text-slate-400">
//         © {new Date().getFullYear()}{" "}
//         <span className="text-white font-medium">
//           Devansh Kumar Tiwari
//         </span>
//       </p>

//       <p className="mt-2 text-sm text-slate-500">
//         Full Stack Developer · AI SaaS Builder · Lucknow, India
//       </p>

//       <div className="mt-4 flex justify-center gap-6 text-slate-400">
//         <a
//           href="https://github.com/yo-soy-dev"
//           target="_blank"
//           className="hover:text-white transition"
//         >
//           GitHub
//         </a>
//         <a
//           href="https://www.linkedin.com/in/yo-soy-dev"
//           target="_blank"
//           className="hover:text-white transition"
//         >
//           LinkedIn
//         </a>
//         <a
//           href="mailto:devanshtiwari817@gmail.com"
//           className="hover:text-white transition"
//         >
//           Email
//         </a>
//       </div>
//     </motion.footer>
//   );
// }

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="py-10 px-6 text-center border-t border-slate-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <p className="text-slate-400">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">
          Devansh Kumar Tiwari
        </span>
      </p>

      <p className="mt-2 text-sm text-slate-500">
        Full-Stack Developer · AI SaaS Builder · Lucknow, India
      </p>

      <div className="mt-5 flex justify-center gap-6">
        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          href="https://github.com/yo-soy-dev"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-white transition"
          title="GitHub"
        >
          <Github size={20} />
        </motion.a>

        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          href="https://www.linkedin.com/in/yo-soy-dev"
          target="_blank"
          rel="noreferrer"
          className="text-slate-400 hover:text-white transition"
          title="LinkedIn"
        >
          <Linkedin size={20} />
        </motion.a>

        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          href="mailto:devanshtiwari817@gmail.com"
          className="text-slate-400 hover:text-white transition"
          title="Email"
        >
          <Mail size={20} />
        </motion.a>
      </div>
    </motion.footer>
  );
}
