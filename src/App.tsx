/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Programs from "@/src/components/Programs";
import Testimonials from "@/src/components/Testimonials";
import Gallery from "@/src/components/Gallery";
import Schedule from "@/src/components/Schedule";
import Events from "@/src/components/Events";
import Equipment from "@/src/components/Equipment";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Schedule />
        <Gallery />
        <Events />
        <Equipment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
