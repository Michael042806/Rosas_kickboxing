import Logo from "@/src/components/Logo";
import { Instagram, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 border-t border-zinc-900 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-12 text-center md:text-left">
          <div className="max-w-md flex flex-col items-center md:items-start">
            <Logo className="mb-8 scale-110 md:origin-left" />
            <p className="text-zinc-600 text-[10px] uppercase tracking-[0.5em] font-black leading-relaxed">
              © 2026 Rosa's Kickboxing Academy. High technical standards. Extreme energy. No compromises.
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 italic">
            <a href="#" className="hover:text-brand transition-colors flex items-center gap-2 group">
              <Instagram size={14} className="group-hover:scale-110 transition-transform" />
              <span>Instagram</span>
            </a>
            <a href="#" className="hover:text-brand transition-colors flex items-center gap-2 group">
              <Facebook size={14} className="group-hover:scale-110 transition-transform" />
              <span>Facebook</span>
            </a>
            <a href="#" className="hover:text-brand transition-colors flex items-center gap-2 group">
              <Youtube size={14} className="group-hover:scale-110 transition-transform" />
              <span>YouTube</span>
            </a>
          </div>

          <div className="md:text-right">
             <p className="text-zinc-500 text-[10px] uppercase tracking-[0.5em] mb-2 font-black italic">Headquarters</p>
             <p className="text-sm font-black uppercase italic tracking-tighter">Washingtonville, NY</p>
             <p className="text-brand text-xs font-black italic underline mt-1">(914) 615-4013</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
