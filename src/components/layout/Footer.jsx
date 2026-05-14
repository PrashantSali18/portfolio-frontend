import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Container from "./Container";
import { SITE, LINKS, NAV_LINKS } from "@/utils/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-display font-extrabold text-xl gradient-text">
                PS
              </span>
              <span className="font-mono text-xs text-muted">{"<dev />"}</span>
            </div>
            <p className="font-body text-sm text-muted leading-relaxed max-w-xs">
              Full Stack Developer building production-grade web apps with
              React, Spring Boot, and Node.js.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="font-mono text-[10px] text-muted/60 uppercase tracking-widest mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-body text-sm text-muted hover:text-accent transition-colors duration-200 w-fit"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] text-muted/60 uppercase tracking-widest mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {[
                { icon: FiGithub, label: "PrashantSali18", href: LINKS.github },
                {
                  icon: FiLinkedin,
                  label: "prashsali18",
                  href: LINKS.linkedin,
                },
                {
                  icon: FiMail,
                  label: SITE.email,
                  href: `mailto:${SITE.email}`,
                },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 font-body text-sm text-muted hover:text-accent transition-colors duration-200 group w-fit"
                >
                  <Icon
                    size={14}
                    className="flex-shrink-0 group-hover:text-accent"
                  />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted/50">
            © {year} Prashant Sali. Built with React · Vite · Tailwind CSS ·
            Framer Motion · Node.js · Nodemailer
          </p>
          <p className="font-mono text-xs text-muted/40">
            Pune, Maharashtra, India
          </p>
        </div>
      </Container>
    </footer>
  );
}
