import { motion } from 'framer-motion';
import { SectionHeader } from '../UI/SectionHeader';
import { gymData } from '../../data/gymData';

export const About = () => {
  return (
    <section id="about" className="section-padding bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-20">
        {/* Image Grid - Optimized for Mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative group"
        >
          <div className="absolute -inset-2 md:-inset-4 border-2 border-gold-500/20 rounded-2xl md:rounded-3xl group-hover:border-gold-500/40 transition-all duration-500" />
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
            <img 
              src="/images/gym/about-bg.jpg" 
              alt="Elite Gym Interior" 
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110 grayscale md:group-hover:grayscale-0"
              loading="lazy"
            />
            {/* Play Button Overlay - Simplified for Touch */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
               <div className="w-16 h-16 md:w-20 md:h-20 bg-gold-500 rounded-full flex items-center justify-center shadow-2xl scale-90 lg:scale-75 lg:group-hover:scale-100 transition-transform duration-500 active:scale-90">
                  <div className="w-0 h-0 border-l-[12px] md:border-l-[15px] border-l-black border-y-[8px] md:border-y-[10px] border-y-transparent ml-1 md:ml-2" />
               </div>
            </div>
          </div>
          
          <div className="absolute -bottom-5 -right-5 md:-bottom-10 md:-right-10 bg-gold-500 p-6 md:p-8 rounded-none hidden sm:block">
             <h4 className="text-black font-heading font-black text-3xl md:text-4xl leading-none">08+</h4>
             <p className="text-black font-black uppercase text-[10px] tracking-widest mt-1">Years of Legacy</p>
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pt-6 lg:pt-0">
          <SectionHeader 
            subtitle="Legacy of Fitness" 
            title="Professionalism & Power" 
            align="left"
            className="mb-6 lg:mb-8 flex flex-col items-center lg:items-start"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white/40 text-sm md:text-lg leading-relaxed mb-8 italic">
              Gold Gym Kumbakonam provides an elite transformation experience. 
              Focused on discipline, personalized attention, and results, 
              we are designed for those serious about their peak potential.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-10 w-full">
               <div className="flex flex-col gap-1 p-5 bg-zinc-900/40 rounded-2xl border border-zinc-800">
                  <span className="text-gold-500 font-heading font-black text-lg md:text-xl italic uppercase tracking-tighter">Strength Hub</span>
                  <p className="text-white/30 text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-none mt-1">Balanced Training Approach</p>
               </div>
               <div className="flex flex-col gap-1 p-5 bg-zinc-900/40 rounded-2xl border border-zinc-800">
                  <span className="text-gold-500 font-heading font-black text-lg md:text-xl italic uppercase tracking-tighter">Expert Coaching</span>
                  <p className="text-white/30 text-[10px] sm:text-xs font-bold uppercase tracking-widest leading-none mt-1">Certified Trainers Only</p>
               </div>
            </div>

            <a href="#contact" className="btn-primary w-full sm:w-auto font-black italic">
              Explore Our Legacy
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Section Integrated Below About - Optimized Grid */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-32 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {gymData.stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="text-center group p-4 border border-zinc-900 rounded-2xl hover:bg-gold-500/5 transition-all"
          >
            <h3 className="text-3xl md:text-5xl font-heading font-black text-gold-500 mb-1 group-hover:scale-105 transition-transform duration-300">
              {stat.value}
            </h3>
            <p className="text-white/30 uppercase font-black tracking-widest text-[9px] md:text-xs italic leading-none">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
