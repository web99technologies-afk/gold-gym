import { motion } from 'framer-motion';
import { SectionHeader } from '../UI/SectionHeader';
import { gymData } from '../../data/gymData';

export const GymGallery = () => {
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
    </section>
  );
};
