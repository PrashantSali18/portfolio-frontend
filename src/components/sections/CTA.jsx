import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewport } from "@/utils/motion";
import { SITE, LINKS } from "@/utils/constants";
import MagneticButton from "@/components/ui/MagneticButton";
import Container from "@/components/layout/Container";

export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Glow orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[200px] bg-accent/10 blur-[100px] rounded-full" />
      </div>

      <Container size="lg">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs text-accent tracking-widest uppercase mb-5"
          >
            Available for Work
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl md:text-5xl text-text mb-5 leading-tight"
          >
            Have a project in mind?
            <br />
            <span className="gradient-text">Let's build it together.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="font-body text-muted max-w-md mx-auto mb-10 leading-relaxed"
          >
            I'm actively looking for full-stack and Java backend opportunities.
            Whether it's a product, startup, or enterprise — let's talk.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <MagneticButton
              href={`mailto:${SITE.email}`}
              variant="primary"
              size="lg"
            >
              Email Me →
            </MagneticButton>
            <MagneticButton
              href={LINKS.linkedin}
              external
              variant="outline"
              size="lg"
            >
              Connect on LinkedIn
            </MagneticButton>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
