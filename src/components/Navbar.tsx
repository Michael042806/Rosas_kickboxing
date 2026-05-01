import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Logo from "@/src/components/Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Coach", "Programs", "Schedule", "Galería", "Events", "Reviews", "Contact"];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              }
            }}
            className="hidden lg:flex items-center gap-8 font-display text-xs font-black uppercase tracking-[0.2em]"
          >
            {menuItems.map((item) => (
              <motion.a 
                key={item}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -2, color: "#ff3d00" }}
                href={`#${item.toLowerCase() === "galería" ? "gallery" : item.toLowerCase() === "coach" ? "about" : item.toLowerCase()}`} 
                className="transition-colors text-white"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:block bg-brand text-white px-6 py-3 font-display font-black text-xs uppercase tracking-widest hover:bg-brand-dark transition-all shadow-xl shadow-brand/20">
              Join Now
            </a>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-brand transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-zinc-950 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-8">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={`#${item.toLowerCase() === "galería" ? "gallery" : item.toLowerCase() === "coach" ? "about" : item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-black italic uppercase tracking-tighter text-white hover:text-brand transition-all"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.05 }}
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-brand text-white w-full max-w-xs py-6 text-center font-black uppercase tracking-widest italic text-xl"
              >
                Join Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
