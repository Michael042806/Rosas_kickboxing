import { motion } from "motion/react";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "G",
    role: "Local Guide",
    content: "Rosa was my first introduction into any type of combat sport. He evaluated me and customized his training to fit my experience. My favorite thing about Rosa is how he leads from the front; he will always train right there with you.",
    rating: 5
  },
  {
    name: "Cheskel Weiss",
    role: "Local Guide",
    content: "This coach is just awesome he will push your limits to the max with great energy, my techniques and skills went up like crazy very fast 💪, here is the place for satisfaction! Thank u coach!",
    rating: 5
  },
  {
    name: "Arnulfo Núñez",
    role: "Athlete",
    content: "Free Trial Lesson, Great with kids. Very encouraging. My daughter and I go together and we love it. It's a pleasure to instruct you and your daughter!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-20">
            <span className="text-brand font-black tracking-[0.5em] text-[10px] uppercase mb-4 block italic">Voices from the ring</span>
            <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85]">Battle <span className="text-brand">Tested</span></h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {reviews.map((review, i) => (
            <motion.div 
              key={review.name}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: i * 0.2,
                type: "spring",
                stiffness: 70,
                damping: 10
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="flex-1 bg-zinc-950 p-10 border-2 border-zinc-900 relative group hover:border-brand transition-all perspective-1000"
            >
              <Quote className="absolute top-6 right-6 text-brand opacity-10 w-12 h-12 italic group-hover:opacity-20 transition-opacity" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xs">★</span>
                ))}
              </div>

              <p className="text-zinc-500 font-bold uppercase tracking-wider text-sm mb-10 leading-relaxed italic group-hover:text-zinc-300 transition-colors">
                "{review.content}"
              </p>

              <div>
                <h4 className="font-black text-xl italic uppercase tracking-tight text-white mb-1">{review.name}</h4>
                <p className="text-brand text-[10px] uppercase tracking-[0.3em] font-black underline italic">Verified Reviewer</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a 
                href="#" 
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-brand transition-colors font-bold text-sm uppercase tracking-widest"
            >
                Read All 14 Reviews on Google Maps ↗
            </a>
        </div>
      </div>
    </section>
  );
}
