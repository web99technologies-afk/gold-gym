import { motion } from 'framer-motion';
import { SectionHeader } from '../UI/SectionHeader';
import { gymData } from '../../data/gymData';
import { Award, Dumbbell, Activity, Users, Flame, UserCheck, TrendingUp, Heart, ArrowRight } from 'lucide-react';

const Icons: Record<string, any> = {
  Award, Dumbbell, Activity, Users, Flame, UserCheck, TrendingUp, Heart
};

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          subtitle="The Gold Standard" 
          title="Why Train With Us?" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gymData.features.map((feature, idx) => {
            const Icon = Icons[feature.icon] || Dumbbell;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group p-8 bg-zinc-900/50 border border-zinc-800 hover:border-gold-500/50 rounded-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-gold-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold-500 transition-colors duration-500">
                  <Icon className="text-gold-500 w-8 h-8 group-hover:text-black transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-heading font-black text-white uppercase tracking-wider mb-4 group-hover:text-gold-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed italic">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-black relative">
       <div className="max-w-7xl mx-auto">
        <SectionHeader 
          subtitle="Achieve Your Goals" 
          title="Our Professional Programs" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gymData.programs.map((program, idx) => {
            const Icon = Icons[program.icon] || Flame;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group h-[400px] overflow-hidden rounded-2xl"
              >
                {/* Background Image Overlay or Abstract Pattern */}
                <div className="absolute inset-0 bg-zinc-900" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
                
                <div className="relative z-20 h-full p-8 flex flex-col justify-end group-hover:pb-12 transition-all duration-500">
                  <div className="w-12 h-12 bg-gold-500 flex items-center justify-center rounded-xl mb-6 shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform">
                     <Icon className="text-black w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-heading font-black text-white uppercase tracking-tighter mb-4 group-hover:text-gold-500 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-white/50 text-sm italic mb-8 group-hover:text-white/80 transition-colors leading-relaxed">
                    {program.desc}
                  </p>
                  <a href="#contact" className="text-gold-500 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Enquire Now <ArrowRight size={14} />
                  </a>
                </div>

                {/* Animated Gradient Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-500/20 transition-all duration-500 rounded-2xl pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
            <a href="#contact" className="btn-outline">
                Explore All Plans
            </a>
        </div>
      </div>
    </section>
  );
};
