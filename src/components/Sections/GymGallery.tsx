import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../UI/SectionHeader';
import { gymData } from '../../data/gymData';
import { X } from 'lucide-react';

export const GymGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="facility" className="section-padding bg-black relative">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          subtitle="Inside The Iron Paradise" 
          title="Our Facility" 
          className="mb-12 md:mb-16"
        />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[150px] md:auto-rows-[250px] gap-2 md:gap-4">
          {gymData.galleryPhotos.map((photo, idx) => {
            // Make some images span 2 rows/columns for an interesting masonry-like look
            const isLarge = idx === 0 || idx === 5;
            const isTall = idx === 3 || idx === 8;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
                onClick={() => setSelectedImage(photo)}
                className={`group relative overflow-hidden rounded-xl md:rounded-2xl cursor-pointer ${
                  isLarge ? 'col-span-2 row-span-2' : isTall ? 'row-span-2' : ''
                }`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <img 
                  src={photo} 
                  alt="Gym Facility" 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-xl flex justify-center items-center p-4 cursor-pointer"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-6 right-6 p-4 bg-zinc-900 hover:bg-gold-500 hover:text-black rounded-full text-white transition-colors duration-300 z-[1010]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </motion.button>
            
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage!}
              alt="Gym Facility Full View"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

