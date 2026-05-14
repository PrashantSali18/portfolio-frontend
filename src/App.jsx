import MainLayout from '@/layouts/MainLayout'
import Hero       from '@/components/sections/Hero'
import About      from '@/components/sections/About'
import Skills     from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects   from '@/components/sections/Projects'
import Contact    from '@/components/sections/Contact'
import CTA        from '@/components/sections/CTA'

/**
 * ─────────────────────────────────────────────────────
 * HOW TO REORDER SECTIONS:
 *   Move the component lines below — the order here is
 *   the order on the page. That's it.
 *
 * HOW TO ADD A NEW SECTION:
 *   1. Create MySectionName.jsx in src/components/sections/
 *   2. Import it here
 *   3. Add <MySectionName /> where you want it below
 * ─────────────────────────────────────────────────────
 */
export default function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <CTA />
    </MainLayout>
  )
}
