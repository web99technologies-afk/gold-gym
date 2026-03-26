import { motion } from 'framer-motion';
import { SectionHeader } from '../UI/SectionHeader';
import { gymData } from '../../data/gymData';
import { Check, Share2, Globe } from 'lucide-react';
import { cn } from '../../utils/cn';

export const Trainers = () => {
  return (
    <section id="trainers" className="section-padding bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          subtitle="The Pillars of Success" 
          title="Master Instructors" 
          className="mb-12 md:mb-16"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {gymData.trainers.map((trainer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-gold-500/30 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 md:p-8 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
                 <h4 className="text-2xl md:text-3xl font-heading font-black text-white italic uppercase tracking-tighter leading-none mb-2">{trainer.name}</h4>
                 <p className="text-gold-500 font-black uppercase text-[10px] md:text-xs tracking-widest italic mb-6">{trainer.role}</p>
                 
                 <div className="flex gap-4">
                    <a href="#" className="p-3 bg-zinc-950 border border-zinc-800 text-white/40 hover:text-gold-500 hover:border-gold-500 rounded-xl transition-all duration-300 active:scale-90">
                      <Share2 size={18} />
                    </a>
                    <a href="#" className="p-3 bg-zinc-950 border border-zinc-800 text-white/40 hover:text-gold-500 hover:border-gold-500 rounded-xl transition-all duration-300 active:scale-90">
                      <Globe size={18} />
                    </a>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Memberships = () => {
  return (
    <section id="membership" className="section-padding bg-black relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          subtitle="Choose Your Path" 
          title="Elite Access Tiers" 
          className="mb-12 md:mb-16"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {gymData.plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={cn(
                "relative group p-8 md:p-10 rounded-3xl border transition-all duration-500 flex flex-col",
                plan.recommended 
                  ? "bg-zinc-900 border-gold-500/50 shadow-[0_20px_50px_rgba(212,175,55,0.1)] scale-100 lg:scale-105" 
                  : "bg-zinc-950 border-zinc-900 hover:border-white/10"
              )}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold-500 text-black px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest italic">
                  Most Popular
                </div>
              )}
              
              <div className="mb-10 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-heading font-black text-white italic uppercase tracking-tighter mb-4">{plan.name}</h3>
                <div className="flex items-end justify-center md:justify-start gap-1">
                  <span className="text-4xl md:text-6xl font-heading font-black text-gold-500 italic leading-none">{plan.price}</span>
                  <span className="text-white/30 font-black uppercase text-[10px] tracking-widest italic mb-1.5">{plan.duration}</span>
                </div>
              </div>

              <div className="space-y-4 mb-12 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-4 group/feature">
                    <div className={cn(
                      "w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full transition-colors",
                      plan.recommended ? "bg-gold-500 text-black" : "bg-zinc-900 text-white/30 group-hover/feature:bg-gold-500 group-hover/feature:text-black"
                    )}>
                      <Check size={12} className="md:size-14" />
                    </div>
                    <span className="text-white/50 text-xs md:text-sm italic font-medium group-hover/feature:text-white transition-colors">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact" 
                className={cn(
                  "btn-primary w-full italic font-black text-sm",
                  !plan.recommended && "bg-zinc-900 text-white hover:bg-gold-500 hover:text-black"
                )}
              >
                Join {plan.name}
              </a>
              
              <p className="mt-6 text-center text-white/20 text-[9px] font-black italic uppercase tracking-widest">
                Cancel any time with 30 days notice
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
