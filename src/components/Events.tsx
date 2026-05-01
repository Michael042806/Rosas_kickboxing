import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Sparring Night",
    date: "May 15, 2026",
    time: "7:00 PM",
    location: "Main Academy Stage",
    description: "An evening of controlled sparring under professional supervision. All levels welcome."
  },
  {
    title: "Youth Championship",
    date: "June 02, 2026",
    time: "9:00 AM",
    location: "Academy Training Center",
    description: "Our quarterly youth tournament featuring our rising stars. Family and friends welcome."
  },
  {
    title: "Master Seminar",
    date: "June 20, 2026",
    time: "11:00 AM",
    location: "Main Mat Area",
    description: "Technical workshop focusing on advanced striking combinations and defensive footwork."
  }
];

export default function Events() {
  return (
    <section id="events" className="py-32 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-brand font-black tracking-[0.4em] text-[10px] uppercase mb-4 block italic">Upcoming Happenings</span>
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
              Live <br /><span className="text-brand">Events</span>
            </h2>
          </div>
          <p className="max-w-md text-zinc-500 text-sm font-bold uppercase tracking-widest leading-relaxed mt-8 md:mt-0">
            Join our community for specialized training sessions, competitive tournaments, and social gatherings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className="p-8 bg-zinc-900/30 border-2 border-zinc-900 hover:border-brand transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <Calendar className="w-12 h-12 text-brand" />
              </div>
              
              <div className="flex items-center gap-2 text-brand font-black text-[10px] uppercase tracking-widest mb-4 italic">
                <Calendar className="w-3 h-3" />
                {event.date}
              </div>
              
              <h3 className="text-2xl font-black italic uppercase tracking-tight mb-6 group-hover:text-brand transition-colors">
                {event.title}
              </h3>
              
              <p className="text-zinc-500 text-sm font-medium mb-8 leading-relaxed">
                {event.description}
              </p>
              
              <div className="space-y-3 pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-3 text-zinc-400 text-[10px] uppercase font-bold tracking-widest">
                  <Clock className="w-3 h-3 text-brand" />
                  {event.time}
                </div>
                <div className="flex items-center gap-3 text-zinc-400 text-[10px] uppercase font-bold tracking-widest">
                  <MapPin className="w-3 h-3 text-brand" />
                  {event.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
