// import { useState } from "react";
// import SectionWrapper from "../components/SectionWrapper";

// export default function Contact() {
//   const [result, setResult] = useState("");

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setResult("Sending...");

//     const formData = new FormData(e.target);

//     formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Message sent successfully ✅");
//       e.target.reset();
//     } else {
//       setResult("❌ Error sending message. Try again.");
//     }
//   };

//   return (
//     <SectionWrapper id="contact" className="bg-[var(--card)]">
//       <div className="max-w-xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>

//         <p className="text-slate-400 mb-10">
//           Have a project, idea, or opportunity?  
//           Let’s build something impactful together.
//         </p>

//         <form
//           onSubmit={onSubmit}
//           className="flex flex-col gap-4"
//         >
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             required
//             className="p-3 rounded-xl
//               bg-[var(--bg)]
//               border border-slate-800
//               focus:outline-none
//               focus:border-[var(--primary)]"
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             required
//             className="p-3 rounded-xl
//               bg-[var(--bg)]
//               border border-slate-800
//               focus:outline-none
//               focus:border-[var(--primary)]"
//           />

//           <textarea
//             name="message"
//             rows="4"
//             placeholder="Your Message"
//             required
//             className="p-3 rounded-xl
//               bg-[var(--bg)]
//               border border-slate-800
//               focus:outline-none
//               focus:border-[var(--primary)]"
//           />

//           <button
//             type="submit"
//             className="mt-4 py-3 rounded-xl
//               bg-[var(--primary)]
//               font-medium
//               hover:opacity-90 transition
//               hover:scale-[1.02]"
//           >
//             Send Message
//           </button>
//         </form>

//         {result && (
//           <p className="mt-4 text-center text-sm text-slate-300">
//             {result}
//           </p>
//         )}
//       </div>
//     </SectionWrapper>
//   );
// }


import { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_KEY
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully ✅");
      e.target.reset();
    } else {
      setResult("❌ Error sending message. Please try again.");
    }
  };

  return (
    <SectionWrapper id="contact" className="bg-[var(--card)]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">
          Get in Touch
        </h2>

        <p className="text-slate-400 mb-10">
          Thinking of a project or collaboration? Let’s create something extraordinary together.
        </p>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-xl
              bg-[var(--bg)]
              border border-slate-800
              focus:outline-none
              focus:border-[var(--primary)]"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-xl
              bg-[var(--bg)]
              border border-slate-800
              focus:outline-none
              focus:border-[var(--primary)]"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="p-3 rounded-xl
              bg-[var(--bg)]
              border border-slate-800
              focus:outline-none
              focus:border-[var(--primary)]"
          />

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="mt-4 py-3 rounded-xl
              bg-[var(--primary)]
              font-medium text-black
              transition"
          >
            Send Message
          </motion.button>
        </form>

        {result && (
          <p className="mt-4 text-center text-sm text-slate-300">
            {result}
          </p>
        )}
      </motion.div>
    </SectionWrapper>
  );
}
