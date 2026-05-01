import { Zap } from "lucide-react";
import { useState } from "react";

export default function Logo({ className = "" }: { className?: string }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex items-center justify-center">
        {!imageError ? (
          <img 
            src="https://lh3.googleusercontent.com/d/1qI8D9yRDUc89YXoz6KZiqklm-lqiMR6d"
            alt="Rosa's Kickboxing Logo"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          />
        ) : (
          <div className="bg-brand p-2 rounded-lg">
            <Zap className="w-8 h-8 md:w-10 md:h-10 text-white fill-white" />
          </div>
        )}
      </div>
      
      <div className="flex flex-col justify-center">
        <h1 className="font-display font-black text-2xl md:text-3xl tracking-tighter uppercase italic leading-none flex gap-2">
          <span className="text-white">Rosa's</span>
          <span className="text-brand">Kickboxing</span>
        </h1>
        <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-zinc-400/80 font-bold mt-1">
          Academy
        </span>
      </div>
    </div>
  );
}
