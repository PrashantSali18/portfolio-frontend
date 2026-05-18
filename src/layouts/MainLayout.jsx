import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/effects/CursorGlow";
import Spotlight from "@/components/effects/Spotlight";

/**
 * MainLayout wraps all pages with the persistent chrome:
 * cursor, spotlight, navbar, footer.
 *
 * To add a new page or reorder sections, edit App.jsx — not this file.
 */
export default function MainLayout({ children }) {
  return (
    <>
      <CursorGlow />
      <Spotlight />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
