// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { staggerContainer, fadeUp, fadeRight, viewport } from "@/utils/motion";
// import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
// import socials from "@/data/socials";
// import SectionTitle from "@/components/ui/SectionTitle";
// import GlowCard from "@/components/ui/GlowCard";
// import MagneticButton from "@/components/ui/MagneticButton";
// import Container from "@/components/layout/Container";

// const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

// const inputClass =
//   "w-full glass rounded-xl px-4 py-3 font-body text-sm text-text placeholder-muted/40 border border-border focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-200 bg-transparent";

// const STATUS = {
//   IDLE: "idle",
//   LOADING: "loading",
//   SUCCESS: "success",
//   ERROR: "error",
// };

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState(STATUS.IDLE);
//   const [msg, setMsg] = useState("");

//   const onChange = (e) =>
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     setStatus(STATUS.LOADING);
//     setMsg("");
//     try {
//       const res = await fetch(`${API_URL}/api/contact`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Something went wrong.");
//       setStatus(STATUS.SUCCESS);
//       setMsg(data.message);
//       setForm({ name: "", email: "", message: "" });
//     } catch (err) {
//       setStatus(STATUS.ERROR);
//       setMsg(err.message || "Failed to send. Try again or email me directly.");
//     }
//   };

//   const isLoading = status === STATUS.LOADING;

//   return (
//     <section id="contact" className="relative overflow-hidden">
//       <div className="absolute left-1/4 bottom-0 w-[500px] h-[280px] bg-accent/[0.07] blur-[120px] rounded-full pointer-events-none" />
//       <Container>
//         <SectionTitle
//           number="05 / Contact"
//           title="Let's"
//           highlight="Connect"
//           subtitle="Open to full-stack and Java backend roles. Reach out for opportunities, collaborations, or just to say hi."
//         />

//         <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
//           <motion.form
//             variants={staggerContainer(0.1)}
//             initial="hidden"
//             whileInView="show"
//             viewport={viewport}
//             onSubmit={onSubmit}
//             className="space-y-4"
//           >
//             <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
//               <div>
//                 <label className="block font-mono text-[10px] text-muted uppercase tracking-wider mb-2">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={form.name}
//                   onChange={onChange}
//                   required
//                   disabled={isLoading}
//                   placeholder="Your name"
//                   className={inputClass}
//                 />
//               </div>
//               <div>
//                 <label className="block font-mono text-[10px] text-muted uppercase tracking-wider mb-2">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={form.email}
//                   onChange={onChange}
//                   required
//                   disabled={isLoading}
//                   placeholder="you@email.com"
//                   className={inputClass}
//                 />
//               </div>
//             </motion.div>
//             <motion.div variants={fadeUp}>
//               <label className="block font-mono text-[10px] text-muted uppercase tracking-wider mb-2">
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 value={form.message}
//                 onChange={onChange}
//                 required
//                 disabled={isLoading}
//                 rows={5}
//                 placeholder="Hi Prashant, I'd like to..."
//                 className={`${inputClass} resize-none`}
//               />
//             </motion.div>

//             <AnimatePresence>
//               {status !== STATUS.IDLE && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0 }}
//                   className={`flex items-start gap-3 p-4 rounded-xl border text-sm font-body ${
//                     status === STATUS.SUCCESS
//                       ? "bg-green-400/[0.06] border-green-400/20 text-green-300"
//                       : status === STATUS.ERROR
//                         ? "bg-red-400/[0.06] border-red-400/20 text-red-300"
//                         : "bg-accent/[0.06] border-accent/20 text-violet"
//                   }`}
//                 >
//                   {status === STATUS.SUCCESS && (
//                     <FiCheckCircle size={16} className="flex-shrink-0 mt-0.5" />
//                   )}
//                   {status === STATUS.ERROR && (
//                     <FiAlertCircle size={16} className="flex-shrink-0 mt-0.5" />
//                   )}
//                   {status === STATUS.LOADING && (
//                     <svg
//                       className="animate-spin w-4 h-4 flex-shrink-0 mt-0.5"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                     >
//                       <circle
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="3"
//                         strokeDasharray="40"
//                         strokeDashoffset="10"
//                       />
//                     </svg>
//                   )}
//                   <span>
//                     {status === STATUS.LOADING ? "Sending your message…" : msg}
//                   </span>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <motion.div variants={fadeUp}>
//               <MagneticButton
//                 type="submit"
//                 variant="primary"
//                 size="lg"
//                 className="w-full justify-center gap-2"
//                 disabled={isLoading}
//               >
//                 {isLoading ? (
//                   <>
//                     <svg
//                       className="animate-spin w-4 h-4"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                     >
//                       <circle
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="3"
//                         strokeDasharray="40"
//                         strokeDashoffset="10"
//                       />
//                     </svg>
//                     Sending…
//                   </>
//                 ) : status === STATUS.SUCCESS ? (
//                   <>
//                     <FiCheckCircle size={14} /> Message Sent!
//                   </>
//                 ) : (
//                   <>
//                     <FiSend size={14} /> Send Message
//                   </>
//                 )}
//               </MagneticButton>
//             </motion.div>
//           </motion.form>

//           <motion.div
//             variants={staggerContainer(0.1)}
//             initial="hidden"
//             whileInView="show"
//             viewport={viewport}
//             className="space-y-4"
//           >
//             {socials.map((s) => (
//               <motion.a
//                 key={s.id}
//                 variants={fadeRight}
//                 href={s.href}
//                 target={s.id !== "phone" ? "_blank" : undefined}
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-4 group"
//               >
//                 <GlowCard className="p-5 flex items-center gap-4 w-full hover:border-accent/30 transition-all duration-300">
//                   <div
//                     className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-110"
//                     style={{
//                       background: `${s.color}12`,
//                       borderColor: `${s.color}30`,
//                       color: s.color,
//                     }}
//                   >
//                     <s.icon size={16} />
//                   </div>
//                   <div className="min-w-0">
//                     <div className="font-mono text-[10px] text-muted uppercase tracking-wider">
//                       {s.label}
//                     </div>
//                     <div className="font-body text-sm text-text truncate group-hover:text-accent transition-colors duration-200 mt-0.5">
//                       {s.value}
//                     </div>
//                   </div>
//                   <span className="ml-auto text-muted group-hover:text-accent transition-colors text-base">
//                     ↗
//                   </span>
//                 </GlowCard>
//               </motion.a>
//             ))}
//             <motion.div variants={fadeRight}>
//               <GlowCard className="p-5 border-accent/10">
//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//                   <span className="font-mono text-[10px] text-green-400 uppercase tracking-wider">
//                     Open to Opportunities
//                   </span>
//                 </div>
//                 <p className="font-body text-xs text-muted leading-relaxed">
//                   Targeting Full Stack Developer & Java Backend roles in Pune,
//                   Bangalore, Mumbai, or Remote.
//                 </p>
//               </GlowCard>
//             </motion.div>
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// }


import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'sending' | 'sent' | 'error'

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens user's default mail client — no backend needed
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:prashantsali502@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  const links = [
    {
      icon: "📧",
      label: "Email",
      value: "prashantsali502@gmail.com",
      href: "mailto:prashantsali502@gmail.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "prashsali18",
      href: "https://linkedin.com/in/prashsali18",
    },
    {
      icon: "🐙",
      label: "GitHub",
      value: "PrashantSali18",
      href: "https://github.com/PrashantSali18",
    },
  ];

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="absolute left-1/4 bottom-0 w-[500px] h-[300px] bg-accent/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-4">
            05 / Contact
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text mb-4 leading-tight">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="font-body text-muted mb-12 max-w-md">
            Open to full-stack and Java backend roles. Feel free to reach out
            for opportunities, collaborations, or just to say hi.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] text-muted uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full glass rounded-xl px-4 py-3 font-body text-sm text-text placeholder-muted/50 border border-border focus:border-accent/50 focus:outline-none transition-colors duration-200 bg-transparent"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] text-muted uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full glass rounded-xl px-4 py-3 font-body text-sm text-text placeholder-muted/50 border border-border focus:border-accent/50 focus:outline-none transition-colors duration-200 bg-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block font-mono text-[10px] text-muted uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi Prashant, I'd like to..."
                  className="w-full glass rounded-xl px-4 py-3 font-body text-sm text-text placeholder-muted/50 border border-border focus:border-accent/50 focus:outline-none transition-colors duration-200 bg-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-body font-medium text-sm text-white transition-all duration-300 hover:opacity-90 active:scale-[0.98] glow-sm"
                style={{
                  background: "linear-gradient(135deg, #7c5cfc, #22d3ee)",
                }}
              >
                {status === "sent"
                  ? "✓ Message Opened in Mail App"
                  : "Send Message →"}
              </button>
            </form>

            {/* Contact links */}
            <div className="space-y-4">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass rounded-2xl p-5 hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-lg group-hover:glow-sm flex-shrink-0">
                    {l.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] text-muted uppercase tracking-wider">
                      {l.label}
                    </div>
                    <div className="font-body text-sm text-text mt-0.5 group-hover:text-accent transition-colors">
                      {l.value}
                    </div>
                  </div>
                  <span className="ml-auto text-muted group-hover:text-accent transition-colors text-lg">
                    ↗
                  </span>
                </a>
              ))}

              <div className="glass rounded-2xl p-5 border border-accent/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-green-400 uppercase tracking-wider">
                    Open to Opportunities
                  </span>
                </div>
                <p className="font-body text-xs text-muted leading-relaxed">
                  Looking for Full Stack Developer or Java Backend roles in
                  Pune, Bangalore, Mumbai, or Remote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
