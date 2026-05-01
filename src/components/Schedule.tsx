import { motion } from "motion/react";
import { Clock } from "lucide-react";

const schedule = [
  {
    day: "Monday",
    classes: [
      { time: "4:30 - 5:30 PM", name: "Kids (Cardio Kickboxing)" },
      { time: "6:00 - 7:00 PM", name: "Adults (Cardio Kickboxing)" },
      { time: "7:00 - 8:00 PM", name: "Fight Team Training" }
    ]
  },
  {
    day: "Tuesday",
    classes: [
      { time: "4:30 - 5:30 PM", name: "Kids (Technical Striking)" },
      { time: "6:00 - 7:00 PM", name: "Adults (Technical Striking)" }
    ]
  },
  {
    day: "Wednesday",
    classes: [
      { time: "4:30 - 5:30 PM", name: "Kids (Circuit Training)" },
      { time: "6:00 - 7:00 PM", name: "Adults (Circuit Training)" },
      { time: "7:00 - 8:00 PM", name: "Fight Team Training" }
    ]
  },
  {
    day: "Thursday",
    classes: [
      { time: "4:30 - 5:30 PM", name: "Kids (Cardio & Technical)" },
      { time: "6:00 - 7:00 PM", name: "Adults (Cardio & Technical)" }
    ]
  },
  {
    day: "Saturday",
    classes: [
      { time: "Morning", name: "Kids - TBA" },
      { time: "Morning", name: "Adults - TBA" }
    ]
  }
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <span className="text-brand font-display font-bold uppercase tracking-widest text-sm mb-4">Training Hours</span>
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter italic">Weekly Schedule</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {schedule.map((day, idx) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                delay: idx * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, borderColor: "#ff3d00" }}
              className="bg-zinc-950 p-8 border border-white/5 relative group transition-all duration-300"
            >
              <h3 className="text-2xl font-display font-black uppercase tracking-tighter italic mb-8 group-hover:text-brand transition-colors">
                {day.day}
              </h3>
              <div className="space-y-6">
                {day.classes.map((cls, cIdx) => (
                  <motion.div 
                    key={cIdx} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (idx * 0.1) + (cIdx * 0.1) }}
                    className="relative pl-6 border-l border-zinc-800"
                  >
                    <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1 flex items-center gap-2">
                      <Clock className="w-3 h-3 text-brand" />
                      {cls.time}
                    </p>
                    <p className="text-sm font-bold uppercase tracking-wider text-white">
                      {cls.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
