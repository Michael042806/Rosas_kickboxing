import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, Maximize2 } from "lucide-react";

// Using a high-quality Unsplash image as a reliable fallback for the gallery
const img1 = "https://drive.google.com/file/d/1I-9m9Q2A9Ql7h6iKSi3FNITf-az6_ekr/view?usp=drive_link";
const img2 = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop";
const img3 = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop";
const img4 = "https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?q=80&w=800&auto=format&fit=crop";
const img5 = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop";
const img6 = "https://images.unsplash.com/photo-1554941426-e9604e34bc94?q=80&w=800&auto=format&fit=crop";

const images = [
  {
    url: img1,
    title: "Team Class"
  },
  {
    url: img2,
    title: "Elite Squad"
  },
  {
    url: img3,
    title: "Victory Circle"
  },
  {
    url: img4,
    title: "Fight Night Weigh-in"
  },
  {
    url: img5,
    title: "Technical Excellence"
  },
  {
    url: img6,
    title: "Kids Training"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <span className="text-brand font-display font-bold uppercase tracking-widest text-sm mb-4">Grit & Glory</span>
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter italic">Galería de imágenes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }
                }
              }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setSelectedImage(index)}
              className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 cursor-pointer border border-white/5"
            >
              <motion.img
                variants={{
                  hidden: { opacity: 0.8, scale: 1.05, rotate: 0 },
                  visible: { opacity: 1, scale: 1.05, rotate: 0 },
                  hover: { scale: 1.1, rotate: 1 }
                }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                src={image.url}
                alt={image.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  console.error("Error loading gallery image:", e.currentTarget.src);
                  // Fallback to a placeholder if the specific image fails
                  e.currentTarget.src = `https://picsum.photos/seed/${index}/800/1000`;
                }}
                className="w-full h-full object-cover"
              />
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 0 },
                  hover: { opacity: 1 }
                }}
                className="absolute inset-0 bg-zinc-950/40 flex items-center justify-center transition-opacity duration-300"
              >
                <Maximize2 className="text-white w-10 h-10 transform scale-0 group-hover:scale-100 transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)" />
              </motion.div>
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 0 },
                  hover: { opacity: 1 }
                }}
                className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent flex items-end p-8 transition-opacity duration-500"
              >
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 text-white">
                  <p className="text-brand font-display font-bold uppercase tracking-widest text-xs mb-2">Moments</p>
                  <h3 className="text-2xl font-display font-black uppercase tracking-tighter italic">{image.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-zinc-950/95 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 text-white hover:text-brand transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-full aspect-auto flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[selectedImage].url} 
                alt={images[selectedImage].title}
                onError={(e) => console.error("Error loading modal gallery image:", e.currentTarget.src)}
                className="max-w-full max-h-[80vh] object-contain shadow-2xl border border-zinc-800"
              />
              <div className="mt-6 text-center">
                <p className="text-brand font-display font-bold uppercase tracking-widest text-sm mb-2">Imagen {selectedImage + 1} de {images.length}</p>
                <h3 className="text-3xl md:text-4xl text-white font-display font-black uppercase tracking-tighter italic">{images[selectedImage].title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
