import { Zap } from "lucide-react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="bg-brand p-1.5 rounded-lg shadow-lg shadow-brand/20">
        <Zap className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
      </div>
      
      <div className="flex flex-col">
        <h1 className="font-display font-black text-lg md:text-xl tracking-tight uppercase leading-tight italic">
          <span className="text-white">Rosa's</span> <span className="text-brand">Kickboxing</span>
        </h1>
        <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] text-zinc-500 font-bold -mt-0.5">
          Academy
        </span>
      </div>
    </div>
  );
}
