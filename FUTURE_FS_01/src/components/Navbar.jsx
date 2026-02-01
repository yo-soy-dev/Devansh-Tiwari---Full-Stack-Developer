


// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const links = [
//   { name: "About", href: "#about" },
//   { name: "Projects", href: "#projects" },
//   { name: "Achievements", href: "#achievements" },
//   { name: "Contact", href: "#contact" },
// ];

// export default function Navbar() {
//   const [active, setActive] = useState(""); // current active link

//   // Scroll & IntersectionObserver logic
//   useEffect(() => {
//     const sections = links.map((l) => document.querySelector(l.href));

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visibleSections = entries.filter((e) => e.isIntersecting);
//         if (visibleSections.length > 0) {
//           // pick section with largest intersection ratio
//           const mostVisible = visibleSections.reduce((prev, curr) =>
//             curr.intersectionRatio > prev.intersectionRatio ? curr : prev
//           );
//           setActive(`#${mostVisible.target.id}`);
//         }
//       },
//       { threshold: Array.from({ length: 101 }, (_, i) => i / 100) } // 0 to 1 thresholds
//     );

//     sections.forEach((sec) => sec && observer.observe(sec));

//     return () => sections.forEach((sec) => sec && observer.unobserve(sec));
//   }, []);

//   // Click handler for smooth scrolling
//   const handleClick = (href) => {
//     setActive(href); // set active on click
//     const el = document.querySelector(href);
//     el?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   return (
//     <motion.nav
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className="fixed top-0 w-full z-50
//         bg-[rgba(2,6,23,0.7)]
//         backdrop-blur-md
//         border-b border-slate-800"
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* LOGO */}
//         <a
//           href="#hero"
//           className="font-semibold text-lg text-cyan-400 hover:text-cyan-300 transition"
//           onClick={() => handleClick("#hero")}
//         >
//           DevanshTiwari.dev
//         </a>

//         {/* LINKS */}
//         <div className="hidden md:flex items-center gap-6">
//           {links.map((link) => (
//             <a
//               key={link.href}
//               href={link.href}
//               onClick={() => handleClick(link.href)}
//               className={`group relative text-sm transition
//                 ${
//                   active === link.href
//                     ? "text-white"
//                     : "text-slate-400 hover:text-white"
//                 }`}
//               aria-current={active === link.href ? "page" : undefined}
//             >
//               {link.name}

//               {/* UNDERLINE */}
//               <span
//                 className={`absolute -bottom-1 left-0 h-[2px] bg-cyan-400
//                   transition-all duration-300 ease-out
//                   ${
//                     active === link.href
//                       ? "w-full"           // permanent underline for active
//                       : "w-0 group-hover:w-full" // hover effect
//                   }`}
//               />
//             </a>
//           ))}
//         </div>
//       </div>
//     </motion.nav>
//   );
// }

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];


export default function Navbar() {
  const [active, setActive] = useState(""); // current active link
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle
  

  // IntersectionObserver for scroll
  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries.filter((e) => e.isIntersecting);
        if (visibleSections.length > 0) {
          const mostVisible = visibleSections.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          setActive(`#${mostVisible.target.id}`);
        }
      },
      { threshold: Array.from({ length: 101 }, (_, i) => i / 100) }
    );

    sections.forEach((sec) => sec && observer.observe(sec));

    return () => sections.forEach((sec) => sec && observer.unobserve(sec));
  }, []);

  // Click handler
  const handleClick = (href) => {
    setActive(href);
    setMenuOpen(false); // close mobile menu
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-[rgba(2,6,23,0.95)] backdrop-blur-md border-b border-slate-800"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <a
          href="#hero"
          className="font-semibold text-lg text-cyan-400 hover:text-cyan-300 transition"
          onClick={() => handleClick("#hero")}
        >
          DevanshTiwari.dev
        </a>

        
        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-6 relative">
          {links.map((link) => (
            <div key={link.href} className="relative">
              <a
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`group text-sm transition ${
                  active === link.href ? "text-white" : "text-slate-400 hover:text-white"
                }`}
                aria-current={active === link.href ? "page" : undefined}
              >
                {link.name}
              </a>

              {/* Animated Underline */}
              <AnimatePresence>
                {active === link.href && (
                  <motion.span
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 h-[2px] bg-cyan-400"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <HiX className="w-6 h-6 text-white" /> : <HiMenu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden bg-[rgba(2,6,23,0.95)] backdrop-blur-md border-t border-slate-800 flex flex-col items-center py-4 space-y-4 overflow-hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={`text-lg transition ${
                  active === link.href ? "text-white" : "text-slate-400 hover:text-white"
                }`}
                aria-current={active === link.href ? "page" : undefined}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
