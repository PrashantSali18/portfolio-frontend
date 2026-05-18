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
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeRight, viewport } from "@/utils/motion";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import socials from "@/data/socials";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import MagneticButton from "@/components/ui/MagneticButton";
import Container from "@/components/layout/Container";

const inputClass =
  "w-full glass rounded-xl px-4 py-3 font-body text-sm text-text placeholder-muted/40 border border-border focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all duration-200 bg-transparent";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'sent' | null

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens user's default mail client — no backend needed!
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:prashantsali502@gmail.com?subject=${subject}&body=${body}`;
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });

    // Reset status after 5 seconds
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute left-1/4 bottom-0 w-[500px] h-[280px] bg-accent/[0.07] blur-[120px] rounded-full pointer-events-none" />
      <Container>
        <SectionTitle
          number="05 / Contact"
          title="Let's"
          highlight="Connect"
          subtitle="Open to full-stack and Java backend roles. Reach out for opportunities, collaborations, or just to say hi."
        />

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
          <motion.form
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 gap-4">
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
                  className={inputClass}
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
                  placeholder="you@email.com"
                  className={inputClass}
                />
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
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
                className={`${inputClass} resize-none`}
              />
            </motion.div>

            {status === "sent" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-4 rounded-xl border text-sm font-body bg-green-400/[0.06] border-green-400/20 text-green-300"
              >
                <FiCheckCircle size={16} className="flex-shrink-0 mt-0.5" />
                <span>✓ Message opened in your mail app!</span>
              </motion.div>
            )}

            <motion.div variants={fadeUp}>
              <MagneticButton
                type="submit"
                variant="primary"
                size="lg"
                className="w-full justify-center gap-2"
              >
                {status === "sent" ? (
                  <>
                    <FiCheckCircle size={14} /> Message Sent!
                  </>
                ) : (
                  <>
                    <FiSend size={14} /> Send Message
                  </>
                )}
              </MagneticButton>
            </motion.div>
          </motion.form>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-4"
          >
            {socials.map((s) => (
              <motion.a
                key={s.id}
                variants={fadeRight}
                href={s.href}
                target={s.id !== "phone" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <GlowCard className="p-5 flex items-center gap-4 w-full hover:border-accent/30 transition-all duration-300">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${s.color}12`,
                      borderColor: `${s.color}30`,
                      color: s.color,
                    }}
                  >
                    <s.icon size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-[10px] text-muted uppercase tracking-wider">
                      {s.label}
                    </div>
                    <div className="font-body text-sm text-text truncate group-hover:text-accent transition-colors duration-200 mt-0.5">
                      {s.value}
                    </div>
                  </div>
                  <span className="ml-auto text-muted group-hover:text-accent transition-colors text-base">
                    ↗
                  </span>
                </GlowCard>
              </motion.a>
            ))}
            <motion.div variants={fadeRight}>
              <GlowCard className="p-5 border-accent/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-[10px] text-green-400 uppercase tracking-wider">
                    Open to Opportunities
                  </span>
                </div>
                <p className="font-body text-xs text-muted leading-relaxed">
                  Targeting Full Stack Developer & Java Backend roles in Pune,
                  Bangalore, Mumbai, or Remote.
                </p>
              </GlowCard>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}