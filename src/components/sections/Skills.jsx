import { motion } from "framer-motion";
import { staggerContainer, fadeUp, scaleIn, viewport } from "@/utils/motion";
import skills from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import SkillBadge from "@/components/ui/SkillBadge";
import Container from "@/components/layout/Container";

/* Duplicated flat list for the marquee strip */
const allSkills = skills.flatMap((g) => g.items);
const marqueeList = [...allSkills, ...allSkills];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden">
      {/* background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/[0.06] blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <SectionTitle
          number="02 / Skills"
          title="Technical"
          highlight="Arsenal"
        />

        {/* Category cards */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {skills.map((group) => (
            <motion.div key={group.category} variants={scaleIn}>
              <GlowCard className="p-6 h-full group">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{group.icon}</span>
                  <span className="font-display font-semibold text-text text-sm tracking-wide">
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Marquee strip */}
      <div className="relative border-y border-border overflow-hidden py-4 bg-surface/40">
        {/* left + right fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {marqueeList.map((skill, i) => (
            <span
              key={i}
              className="font-mono text-xs text-muted/60 whitespace-nowrap px-4 py-1.5 rounded-full border border-border bg-card"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
