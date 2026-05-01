import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Instagram, Facebook, Youtube, CheckCircle2, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-8xl font-black mb-12 italic uppercase tracking-tighter leading-none">Strike <span className="text-brand">Contact</span></h2>
            
            <div className="space-y-4 mb-12">
              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-zinc-950 border-2 border-zinc-900 group-hover:border-brand flex items-center justify-center text-brand shrink-0 transition-all">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-1 uppercase tracking-tighter italic">Locate Us</h4>
                  <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">2 North St, Washingtonville, NY 10992</p>
                </div>
              </div>

              <div className="flex gap-8 group">
                <div className="w-16 h-16 bg-zinc-950 border-2 border-zinc-900 group-hover:border-brand flex items-center justify-center text-brand shrink-0 transition-all">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-black text-xl mb-1 uppercase tracking-tighter italic">Dial Directly</h4>
                  <p className="text-brand font-black underline italic tracking-widest text-lg">(914) 615-4013</p>
                </div>
              </div>

              <div className="flex gap-8 pt-4 border-t border-zinc-900/50">
                <a href="#" className="flex items-center gap-3 text-zinc-400 hover:text-brand transition-colors group">
                  <div className="w-10 h-10 border border-zinc-900 group-hover:border-brand flex items-center justify-center">
                    <Instagram size={18} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] italic">Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-zinc-400 hover:text-brand transition-colors group">
                  <div className="w-10 h-10 border border-zinc-900 group-hover:border-brand flex items-center justify-center">
                    <Facebook size={18} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] italic">Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-zinc-400 hover:text-brand transition-colors group">
                  <div className="w-10 h-10 border border-zinc-900 group-hover:border-brand flex items-center justify-center">
                    <Youtube size={18} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] italic">YouTube</span>
                </a>
              </div>
            </div>

            <div className="bg-zinc-900/30 p-1 border border-zinc-900 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="py-20 flex flex-col items-center justify-center text-center space-y-6 bg-zinc-900"
                  >
                    <div className="w-20 h-20 bg-brand flex items-center justify-center rounded-full shadow-2xl shadow-brand/40">
                      <CheckCircle2 size={40} className="text-white" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-3xl font-black italic uppercase tracking-tighter">Transmission Received</h4>
                      <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">A specialized operative will contact you soon.</p>
                    </div>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="border border-brand text-brand hover:bg-brand hover:text-white px-8 py-3 font-black uppercase tracking-widest transition-all italic text-sm"
                    >
                      Send New Signal
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="bg-brand p-4 mb-1">
                      <p className="text-white font-black uppercase tracking-[0.2em] italic text-center text-sm">
                        Claim your Free Trial
                      </p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-1">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="NAME" 
                          className="w-full bg-zinc-900 border border-zinc-800 p-6 focus:border-brand focus:bg-zinc-800 outline-none transition-all font-black placeholder:text-zinc-600 text-white uppercase tracking-[0.2em] text-xs"
                        />
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="EMAIL" 
                          className="w-full bg-zinc-900 border border-zinc-800 p-6 focus:border-brand focus:bg-zinc-800 outline-none transition-all font-black placeholder:text-zinc-600 text-white uppercase tracking-[0.2em] text-xs"
                        />
                      </div>
                      <textarea 
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="MESSAGE" 
                        rows={4}
                        className="w-full bg-zinc-900 border border-zinc-800 p-6 focus:border-brand focus:bg-zinc-800 outline-none transition-all font-black placeholder:text-zinc-600 text-white uppercase tracking-[0.2em] text-xs"
                      />
                      <button 
                        disabled={status === "sending"}
                        className="w-full bg-brand hover:bg-white hover:text-black text-white font-black py-8 uppercase tracking-[0.5em] transition-all italic text-xl shadow-2xl flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-wait"
                      >
                        {status === "sending" ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Transmitting...
                          </>
                        ) : (
                          <>
                            <Send size={24} />
                            Send Transmission
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <a 
            href="https://www.google.com/maps/search/?api=1&query=Rosa's+Kickboxing+Academy+Washingtonville+NY" 
            target="_blank" 
            referrerPolicy="no-referrer"
            rel="noopener noreferrer"
            className="relative min-h-[400px] md:min-h-[600px] bg-zinc-950 border-4 border-zinc-900 overflow-hidden group block"
          >
             <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.415053158021!2d-74.1685816!3d41.42436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2d790757538a7%3A0xc3b7f14b62fef84!2zUm9zYSdzIEtpY2tib3hpbmcgQWNhZGVteQ!5e0!3m2!1sen!2sus!4v1714361500000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1) brightness(0.8)' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="pointer-events-none group-hover:grayscale-0 transition-all duration-500"
                ></iframe>
             </div>
             
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="relative"
                >
                    <MapPin size={60} className="text-brand fill-brand/20 shadow-xl" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/50 blur-sm rounded-full" />
                </motion.div>
             </div>
 
             <div className="absolute bottom-0 left-0 p-8 z-20 pointer-events-none">
                <div className="bg-zinc-950 p-4 border border-brand/50 max-w-xs shadow-2xl">
                    <p className="text-xs font-bold uppercase text-brand mb-2">Click to Navigate</p>
                    <p className="text-sm font-medium">Rosa's Kickboxing Academy</p>
                    <p className="text-[10px] text-zinc-400">2 North St, Washingtonville, NY 10992</p>
                    <span className="text-[10px] text-zinc-500 uppercase mt-2 inline-block font-bold">Open in Google Maps →</span>
                </div>
             </div>
             <div className="absolute inset-0 bg-brand/5 group-hover:bg-transparent transition-colors pointer-events-none" />
          </a>
        </div>
      </div>
    </section>
  );
}
