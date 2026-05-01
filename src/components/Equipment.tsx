import { motion } from "motion/react";
import { Package, Shield, Shirt, Info } from "lucide-react";

export default function Equipment() {
  const equipment = [
    { name: "Hand Wraps", icon: Package },
    { name: "Gloves (8oz, 12oz, 14oz)", icon: Shield },
    { name: "Chinguards", icon: Shield },
    { name: "Head gear protection", icon: Shield },
    { name: "Mouth guard", icon: Shield },
    { name: "Comfortable training attire", icon: Shirt }
  ];

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-brand font-display font-bold uppercase tracking-widest text-sm mb-4 block">Gear Up</span>
            <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tighter italic mb-8">Equipment Needed</h2>
            <p className="text-zinc-500 font-bold uppercase tracking-wider mb-12 max-w-lg">
              To ensure safety and the best training experience, we require all students to have the following gear.
            </p>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {equipment.map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    x: 10,
                    borderColor: "#ff3d00",
                    backgroundColor: "rgba(255, 61, 0, 0.05)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-center gap-4 bg-zinc-900/50 p-4 border border-white/5 transition-colors cursor-default"
                >
                  <div className="bg-brand/10 p-2 text-brand">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-white">{item.name}</span>
                </motion.div>
              ))}
            </motion.div>
            <p className="mt-8 text-zinc-600 text-[10px] uppercase font-black tracking-[0.2em]">
              * Uniforms are also available for purchase at the academy.
            </p>
          </div>

          <div className="flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-brand p-12 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Info className="w-32 h-32" />
              </div>
              <h3 className="text-4xl font-display font-black uppercase tracking-tighter italic mb-6 leading-none">
                Exclusive <br /> Student Offer
              </h3>
              <p className="text-zinc-950 font-black text-6xl mb-6">15% OFF</p>
              <p className="text-zinc-900 font-bold uppercase tracking-widest text-sm mb-8 leading-relaxed">
                On each item when you purchase gear through our partners at <span className="underline select-all">www.ywkmn.com</span>
              </p>
              <div className="bg-zinc-950 text-white p-6 border-l-4 border-white/20">
                <p className="text-xs font-black uppercase tracking-[0.2em] mb-2 text-brand">Instruction</p>
                <p className="text-sm font-bold uppercase tracking-wider">
                  Contact us directly for your personalized percentage discount code.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
