import { motion } from "framer-motion";
import { staggerContainer, fadeUp, fadeLeft, viewport } from "@/utils/motion";
import experience from "@/data/experience";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import Container from "@/components/layout/Container";

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <Container>
        <SectionTitle
          number="03 / Experience"
          title="Work"
          highlight="History"
        />

        <div className="relative max-w-3xl">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-accent via-violet/30 to-transparent pointer-events-none" />

          <motion.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="space-y-10"
          >
            {experience.map((job) => (
              <motion.div
                key={job.id}
                variants={fadeLeft}
                className="flex gap-8"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 mt-1.5">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 z-10 relative transition-all ${
                      job.current
                        ? "border-accent bg-accent/15 dot-pulse"
                        : "border-border bg-surface"
                    }`}
                  >
                    {job.current && (
                      <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1">
                  <GlowCard className="p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-display font-bold text-text text-lg leading-tight">
                          {job.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <span className="font-body text-accent text-sm font-medium">
                            {job.company}
                          </span>
                          <span className="text-border text-xs">·</span>
                          <span className="font-body text-muted text-xs">
                            {job.location}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
                        {job.current && (
                          <span className="tag tag-green text-[10px]">
                            Current
                          </span>
                        )}
                        <span className="font-mono text-xs text-muted whitespace-nowrap">
                          {job.period}
                        </span>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2.5 mb-5">
                      {job.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-3 font-body text-sm text-muted leading-relaxed"
                        >
                          <span className="text-accent mt-1.5 flex-shrink-0 text-xs">
                            ▸
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                      {job.skills.map((s) => (
                        <span key={s} className="tag text-[10px]">
                          {s}
                        </span>
                      ))}
                    </div>
                  </GlowCard>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
