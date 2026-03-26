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
             subtitle="Expert Guidance" 
             title="Meet Our Professional Trainers" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {gymData.trainers.map((trainer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group relative flex flex-col md:flex-row bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-gold-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl"
              >
                <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden">
                   <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  />
                </div>
                
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
                   <span className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-2 block">{trainer.role}</span>
                   <h3 className="text-4xl font-heading font-black text-white uppercase italic tracking-tighter mb-4 group-hover:text-gold-500 transition-colors">
                    {trainer.name}
                   </h3>
                   <div className="h-1 w-12 bg-gold-500 mb-6" />
                   <p className="text-white/40 text-sm leading-relaxed mb-10 italic">
                      "{trainer.bio}"
                   </p>
                   
                   <div className="flex gap-4">
                      <a href="#" className="p-3 bg-zinc-950 border border-zinc-800 text-white/40 hover:text-gold-500 hover:border-gold-500 rounded-xl transition-all duration-300">
                        <Share2 size={20} />
                      </a>
                      <a href="#" className="p-3 bg-zinc-950 border border-zinc-800 text-white/40 hover:text-gold-500 hover:border-gold-500 rounded-xl transition-all duration-300">
                        <Globe size={20} />
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

export const Membership = () => {
  return (
    <section id="membership" className="section-padding bg-black">
       <div className="max-w-7xl mx-auto">
          <SectionHeader 
             subtitle="Choose Your Path" 
             title="Membership Plans" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gymData.plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={cn(
                  "relative p-10 rounded-3xl border-2 flex flex-col transition-all duration-500 group overflow-hidden",
                  plan.recommended 
                    ? "bg-zinc-900/80 border-gold-500 shadow-2xl shadow-gold-500/10 scale-105 z-10" 
                    : "bg-zinc-900 border-zinc-800 hover:border-gold-500/50"
                )}
              >
                {plan.recommended && (
                  <div className="absolute top-6 right-6 bg-gold-500 text-black font-bold uppercase tracking-widest text-[10px] px-3 py-1 rounded-full">
                    Recommended
                  </div>
                )}
                
                <h4 className="text-white font-heading font-black text-2xl uppercase italic tracking-tighter mb-2 group-hover:text-gold-500 transition-all duration-300">
                  {plan.title}
                </h4>
                
                <div className="flex items-baseline gap-1 mb-10">
                   <span className="text-white font-heading font-black text-5xl tracking-tighter group-hover:text-gold-500 transition-colors">
                     ₹{plan.price}
                   </span>
                   {plan.price !== 'Custom' && <span className="text-white/40 font-bold uppercase text-xs tracking-widest italic">/ Month</span>}
                </div>
                
                <div className="space-y-4 mb-12 flex-grow">
                   {plan.features.map((feature, fidx) => (
                     <div key={fidx} className="flex gap-3 items-center">
                        <div className="w-5 h-5 flex items-center justify-center bg-gold-500/10 rounded-full">
                          <Check size={12} className="text-gold-500" />
                        </div>
                        <span className="text-sm text-white/60 font-medium italic">{feature}</span>
                     </div>
                   ))}
                </div>
                
                <a href="#contact" className={cn(
                  "w-full font-bold uppercase tracking-widest text-xs py-4 transition-all duration-300 rounded-none text-center transform hover:scale-105",
                  plan.recommended 
                    ? "bg-gold-500 text-black shadow-lg shadow-gold-500/20" 
                    : "bg-white/5 border border-white/10 text-white hover:bg-gold-500 hover:text-black hover:border-gold-500 shadow-xl"
                )}>
                  Get Started Now
                </a>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
};
