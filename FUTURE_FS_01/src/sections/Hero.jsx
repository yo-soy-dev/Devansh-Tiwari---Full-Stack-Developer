import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { Github, Linkedin, Mail, Phone, MapPin, FileText } from "lucide-react";

export default function Hero() {
  return (
    <SectionWrapper
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center max-w-6xl mx-auto gap-12">
  {/* Text */}
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="relative z-10 text-center lg:text-left max-w-xl"
  >
    <p className="text-sm tracking-widest text-cyan-400 mb-4 uppercase">
      Hi, my name is
    </p>

    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
      <span className="animated-name block lg:inline-block">
        Devansh Kumar Tiwari
      </span>
    </h1>

    <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-300">
      Full-Stack Developer • Mobile Developer • AI SaaS Builder
    </h2>

   <p className="mt-6 text-slate-400 max-w-md leading-relaxed">
            I build{" "}
            <span className="text-cyan-400">scalable web applications</span> and{" "}
            <span className="text-cyan-400">cross-platform mobile apps</span>, and{" "}
            <span className="text-cyan-400">AI-powered SaaS platforms</span> using{" "}
            <span className="text-cyan-400">React.js</span>,{" "}
            <span className="text-cyan-400">Next.js</span>,{" "}
            <span className="text-cyan-400">React Native</span>,{" "}
            <span className="text-cyan-400">Node.js</span>, and{" "}
            <span className="text-cyan-400">TypeScript</span>.
             Experienced in JWT authentication, REST APIs, cloud deployments, and building clean, maintainable architectures focused on real-world impact.
          </p>
  </motion.div>

  {/* Image */}
  <motion.img
    src="/projects/profile.png"
    alt="Devansh Kumar Tiwari"
    initial={{ opacity: 0, x: 50, scale: 0.95 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="w-64 md:w-80 rounded-xl shadow-2xl bg-gradient-to-b from-blue-900/50 to-transparent lg:ml-10"
  />
</div>

 <div className="mt-8 space-y-3">

            {/* EMAIL */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-md">
              <div className="p-2 rounded-lg bg-cyan-400/10">
                <Mail className="text-cyan-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400">Email</p>
                <p className="text-white">devanshtiwari817@gmail.com</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-md">
              <div className="p-2 rounded-lg bg-cyan-400/10">
                <Phone className="text-cyan-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400">Phone</p>
                <p className="text-white">+91 6386331981</p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-md">
              <div className="p-2 rounded-lg bg-cyan-400/10">
                <MapPin className="text-cyan-400" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400">Location</p>
                <p className="text-white">Lucknow, India</p>
              </div>
            </div>

          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">

            <a
              href="/resume.pdf"
              className="flex items-center gap-2 bg-cyan-400 text-black px-5 py-3 rounded-xl font-medium hover:scale-105 transition"
            >
              <FileText size={18} />
              Resume
            </a>

            <a
              href="https://github.com/yo-soy-dev"
              target="_blank"
              className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-5 py-3 rounded-xl hover:bg-cyan-400/10 transition"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/yo-soy-dev"
              target="_blank"
              className="flex items-center gap-2 border border-cyan-400 text-cyan-400 px-5 py-3 rounded-xl hover:bg-cyan-400/10 transition"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>

          </div>


    </SectionWrapper>
  );
}
