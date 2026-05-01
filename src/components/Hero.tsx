import { motion } from "motion/react";
import { Star } from "lucide-react";
import { cn } from "../lib/utils.ts";
import heroImg from "@/src/assets/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={heroImg} 
          alt="Rosa's Kickboxing Academy Gym" 
          onError={(e) => console.error("Error loading hero image:", e.currentTarget.src)}
          className="w-full h-full object-cover brightness-[1.05] contrast-[1.05] scale-x-[-1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 h-full">
        <div className="max-w-5xl pt-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="flex text-yellow-500 text-xs">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-zinc-400">
              5.0 Rating • 14 Reviews
            </span>
          </motion.div>

          <motion.h1 
            className="text-[12vw] sm:text-[10vw] lg:text-[9rem] font-black leading-[0.75] uppercase italic tracking-tighter mb-12"
          >
            {["Train", "Beyond", "Limits"].map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -100, rotate: -10 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                className={cn("block", word === "Beyond" && "text-brand")}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 items-center mb-16"
          >
            <motion.a 
              href="#contact" 
              whileHover={{ scale: 1.05, skewX: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand px-12 py-6 text-xl font-black uppercase tracking-widest hover:bg-brand-dark transition-all shadow-2xl shadow-brand/30 w-full sm:w-auto text-center"
            >
              Free Trial
            </motion.a>
            <div className="border-l-4 border-brand pl-6 max-w-xs transition-all hover:border-white group">
              <p className="text-sm text-zinc-300 font-bold uppercase tracking-wider leading-snug group-hover:text-white transition-colors">
                Evaluated and customized training to fit your specific goals and experience.
              </p>
            </div>
          </motion.div>

          {/* Horizontal Academy Benefits strip */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.2
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-zinc-950/40 backdrop-blur-xl p-8 border border-white/10 shadow-2xl max-w-4xl"
          >
            {[
              { id: "01", title: "Stress Relief", desc: "Decrease stress and release pent up energy." },
              { id: "02", title: "Self-Confidence", desc: "Increase confidence through disciplined training." },
              { id: "03", title: "Total Fitness", desc: "Improve composition, flexibility, and strength." }
            ].map((item) => (
              <motion.div 
                key={item.id}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="flex flex-col border-l-2 border-brand/50 pl-6 group transition-all hover:border-brand"
              >
                <span className="text-brand font-black text-xl italic mb-1">{item.id}</span>
                <p className="text-sm uppercase font-black tracking-wider text-white mb-1 group-hover:text-brand transition-colors">{item.title}</p>
                <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
