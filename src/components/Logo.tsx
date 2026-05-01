import logoImg from "../assets/logo.png";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={logoImg} 
        alt="Rosa's Kickboxing Academy Logo" 
        onError={(e) => console.error("Error loading logo image:", e.currentTarget.src)}
        className="h-10 md:h-14 w-auto object-contain brightness-110"
      />
      
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
