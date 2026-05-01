import { motion } from "motion/react";
import coachImg from "@/src/assets/coach.png";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, scale: 0.8, x: -50 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                x: 0,
                transition: { type: "spring", stiffness: 50, damping: 20 }
              },
              hover: {}
            }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 p-2 border-4 border-brand bg-zinc-950 shadow-2xl italic group overflow-hidden">
              <motion.img 
                variants={{
                  hidden: { filter: "grayscale(100%)", scale: 1.05 },
                  visible: { filter: "grayscale(100%)", scale: 1.05 },
                  hover: { 
                    scale: 1, 
                    filter: "grayscale(0%)"
                  }
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                src={coachImg} 
                alt="Coach Rosa" 
                onError={(e) => console.error("Error loading coach image:", e.currentTarget.src)}
                className="w-full brightness-110 contrast-100"
              />
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 0 },
                  hover: { opacity: 1 }
                }}
                className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent transition-opacity duration-500 pointer-events-none" 
              />
            </div>
            {/* Geometric accents */}
            <motion.div 
              animate={{ 
                x: [0, 10, 0],
                y: [0, -10, 0]
              }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-full h-full border-4 border-zinc-900 -z-10" 
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <span className="text-brand font-black tracking-[0.4em] text-[10px] uppercase mb-4 block italic">Official Instructor</span>
            <h2 className="text-5xl md:text-8xl font-black mb-8 italic uppercase tracking-tighter leading-[0.85]">Coach <br className="hidden lg:block" /><span className="text-brand">Training</span></h2>
            
            <div className="space-y-8 text-zinc-500 text-sm font-bold uppercase tracking-wider leading-relaxed">
              <p className="text-zinc-300">
                Coach Rosa has been competing and instructing over the course of 10 years. 
                Highly motivated and has great experience instructing adults and kids of all ages.
              </p>
              <p>
                At Rosa's Kickboxing Academy, we don't believe in shouting from the sidelines. 
                Coach Rosa is right there in the trenches with you—evaluating your stance and training alongside students.
              </p>
              
              <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="p-8 bg-zinc-950 border-2 border-zinc-900 flex flex-col items-center hover:border-brand transition-colors group"
                >
                  <span className="block text-6xl font-black text-brand mb-2 italic underline text-center group-hover:scale-110 transition-transform">10+</span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-black text-center">Years Experience</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="p-8 bg-zinc-950 border-2 border-zinc-900 flex flex-col items-center hover:border-brand transition-colors group"
                >
                  <span className="block text-6xl font-black text-brand mb-2 italic underline text-center group-hover:scale-110 transition-transform">Active</span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-black text-center">Competitor</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
