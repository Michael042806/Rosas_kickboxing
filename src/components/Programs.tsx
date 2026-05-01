import { motion } from "motion/react";
import { User, Users, ShieldCheck, Trophy } from "lucide-react";

const programs = [
  {
    title: "Cardio Kickboxing",
    description: "Based on fast paced technical striking on pads and bags with a variety of exercises.",
    icon: ShieldCheck,
    tag: "High Energy"
  },
  {
    title: "Circuit Training",
    description: "Based on several exercise stations with a timer that allows you to perform on each station for a limited time. Includes: medicine balls, ropes, etc.",
    icon: Trophy,
    tag: "Station Based"
  },
  {
    title: "Technical Striking",
    description: "Technical techniques for beginners and advance parties which include: punching, kicking, knees, elbows, foot work etc.",
    icon: User,
    tag: "Skill Focus"
  },
  {
    title: "Fight Team",
    description: "Offer competition opportunities for those that wish to compete and test their skills at the highest level.",
    icon: Users,
    tag: "Competitive"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-5xl md:text-8xl font-black mb-4 italic uppercase tracking-tighter">
            Elite <span className="text-brand">Programs</span>
          </h2>
          <div className="w-32 h-3 bg-brand mb-8" />
          <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] max-w-2xl text-sm leading-relaxed">
            Technical mastery. Explosive power. Unyielding discipline. 
            Choose your battleground and push your limits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {programs.map((program, i) => (
            <motion.div 
              key={program.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.15,
                type: "spring",
                stiffness: 70,
                damping: 10
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="group p-10 bg-zinc-950 border-2 border-zinc-900 hover:border-brand transition-all relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] group-hover:opacity-[0.1] transition-all rotate-12 group-hover:rotate-0 group-hover:scale-125 duration-700">
                <program.icon size={160} />
              </div>
              
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="inline-block px-3 py-1 bg-brand text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 italic"
              >
                {program.tag}
              </motion.span>
              
              <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter group-hover:text-brand transition-colors leading-none">
                {program.title}
              </h3>
              
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider leading-relaxed mb-10 group-hover:text-zinc-400 transition-colors">
                {program.description}
              </p>

              <motion.a 
                href="#contact"
                whileHover={{ x: 10 }}
                className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-brand border-b-2 border-brand pb-1 group-hover:gap-6 transition-all"
              >
                Join Program <span>→</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
