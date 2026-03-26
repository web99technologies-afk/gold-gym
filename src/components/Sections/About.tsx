import { motion } from 'framer-motion';
import { SectionHeader } from '../UI/SectionHeader';
import { gymData } from '../../data/gymData';

export const About = () => {
  return (
    <section id="about" className="section-padding bg-[#050505] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative group"
        >
          <div className="absolute -inset-4 border-2 border-gold-500/20 rounded-2xl group-hover:border-gold-500/40 transition-all duration-500" />
          <div className="relative overflow-hidden rounded-xl">
             <img 
              src="https://images.unsplash.com/photo-1541534741688-6078c64b5913?q=80&w=1470&auto=format&fit=crop" 
              alt="Gym Interior" 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                  <div className="w-0 h-0 border-l-[15px] border-l-black border-y-[10px] border-y-transparent ml-2" />
               </div>
            </div>
          </div>
          
          <div className="absolute -bottom-10 -right-10 bg-gold-500 p-8 rounded-none hidden md:block">
             <h4 className="text-black font-heading font-black text-4xl leading-none">08+</h4>
             <p className="text-black font-bold uppercase text-xs tracking-widest mt-2">Years of Excellence</p>
          </div>
        </motion.div>

        <div className="w-full lg:w-1/2">
          <SectionHeader 
            subtitle="Who We Are" 
            title="Premium Fitness Experience" 
            align="left"
            className="mb-8"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Gold Gym Kumbakonam is more than just a place to sweat. 
              We are a dedicated transformation center focused on discipline, 
              consistency, and strength training. Whether you're a beginner 
              taking your first step or an advanced athlete aiming for your peak, 
              we provide the environment and expert guidance you need to succeed.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
               <div className="flex flex-col gap-2">
                  <span className="text-gold-500 font-heading font-bold text-xl">Strength & Cardio</span>
                  <p className="text-white/50 text-sm italic">Comprehensive training approach for balanced fitness.</p>
               </div>
               <div className="flex flex-col gap-2">
                  <span className="text-gold-500 font-heading font-bold text-xl">Expert Support</span>
                  <p className="text-white/50 text-sm italic">Certified trainers dedicated to your personal success.</p>
               </div>
            </div>

            <a href="#contact" className="btn-primary">
              Learn More About Us
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Stats Section Integrated Below About */}
      <div className="max-w-7xl mx-auto mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
        {gymData.stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="text-center group"
          >
            <h3 className="text-4xl md:text-5xl font-heading font-black text-gold-500 mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </h3>
            <p className="text-white/40 uppercase font-bold tracking-widest text-[10px] md:text-xs italic">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
