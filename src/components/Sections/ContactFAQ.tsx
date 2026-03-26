import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../UI/SectionHeader';
import { gymData } from '../../data/gymData';
import { ChevronDown, MessageSquare, Phone, MapPin, Mail, Send } from 'lucide-react';
import { cn } from '../../utils/cn';

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-zinc-950 relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />
       
       <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader 
             subtitle="Common Questions" 
             title="Helping You Start Right" 
          />
          
          <div className="space-y-4">
            {gymData.faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "border rounded-2xl transition-all duration-300",
                  activeIndex === idx ? "border-gold-500/50 bg-gold-500/5" : "border-zinc-800 bg-zinc-900/40 hover:border-zinc-700"
                )}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                >
                  <span className={cn(
                    "text-lg md:text-xl font-heading font-black italic uppercase tracking-tighter leading-none transition-colors",
                    activeIndex === idx ? "text-gold-500" : "text-white group-hover:text-gold-500"
                  )}>
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
                    activeIndex === idx ? "border-gold-500 bg-gold-500 text-black rotate-180" : "border-zinc-700 text-white/40"
                  )}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {activeIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0 border-t border-zinc-800/50">
                        <p className="text-white/50 text-sm leading-relaxed italic mt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export const Transformation = () => {
    return (
        <section className="section-padding bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <SectionHeader 
                    subtitle="Real Results" 
                    title="Transformation Journey" 
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {[1, 2, 3].map((_, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.2 }}
                            className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-gold-500/40 transition-all duration-500 shadow-2xl"
                        >
                            <div className="h-64 bg-zinc-950 flex items-center justify-center relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <img 
                                    src={`https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1080&auto=format&fit=crop`} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-60 group-hover:opacity-100" 
                                    alt="Transformation" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="bg-gold-500 text-black font-bold uppercase text-[10px] px-3 py-1 rounded-full">Success Story</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h4 className="text-white font-heading font-black uppercase text-xl italic tracking-tighter mb-4">90-Day Fat Loss</h4>
                                <p className="text-white/40 text-xs italic leading-relaxed mb-6">"Gold Gym's structured program helped me lose 12kg and gain strength like never before. The trainers are the best in Kumbakonam!"</p>
                                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gold-500/60">
                                    <span>- Varun R.</span>
                                    <span>Kumbakonam</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-16 text-center max-w-2xl bg-zinc-900/50 p-10 border border-zinc-800 rounded-3xl relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-2 h-full bg-gold-500" />
                   <h3 className="text-2xl font-heading font-black text-white uppercase italic tracking-tighter mb-4 leading-none">Your journey starts with a single rep</h3>
                   <p className="text-white/50 text-sm italic mb-8">Join the elite transformation community in Kumbakonam and write your success story with us.</p>
                   <a href="#contact" className="btn-primary">Begin Your Journey</a>
                </div>
            </div>
        </section>
    );
}

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-zinc-950 relative">
       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
             <SectionHeader 
                subtitle="Reach Out" 
                title="Start Your Fitness Journey Today" 
                align="left"
                className="mb-10"
             />
             
             <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                   <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-2xl group-hover:border-gold-500/50 group-hover:bg-gold-500/5 transition-all duration-300">
                      <MapPin className="text-gold-500" size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-heading font-black uppercase text-lg italic italic tracking-tighter leading-none mb-2">Our Location</h4>
                      <p className="text-white/40 text-sm italic">{gymData.business.address}</p>
                   </div>
                </div>
                <div className="flex items-start gap-6 group">
                   <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-2xl group-hover:border-gold-500/50 group-hover:bg-gold-500/5 transition-all duration-300">
                      <Phone className="text-gold-500" size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-heading font-black uppercase text-lg italic tracking-tighter leading-none mb-2">Phone Call</h4>
                      <p className="text-white/40 text-sm italic">{gymData.business.phone}</p>
                   </div>
                </div>
                <div className="flex items-start gap-6 group">
                   <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-2xl group-hover:border-gold-500/50 group-hover:bg-gold-500/5 transition-all duration-300">
                      <Mail className="text-gold-500" size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-heading font-black uppercase text-lg italic tracking-tighter leading-none mb-2">Email Address</h4>
                      <p className="text-white/40 text-sm italic">{gymData.business.email}</p>
                   </div>
                </div>
             </div>
             
             <div className="mt-16 flex gap-4">
               <a 
                 href={`tel:${gymData.business.phone}`} 
                 className="flex-1 flex gap-3 items-center justify-center py-4 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase tracking-widest text-[10px] hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                >
                  <Phone size={16} /> Call Now
               </a>
               <a 
                 href={`https://wa.me/${gymData.business.whatsapp}`} 
                  target="_blank"
                 className="flex-1 flex gap-3 items-center justify-center py-4 bg-gold-500 text-black font-bold uppercase tracking-widest text-[10px] hover:bg-gold-400 transition-all duration-300 shadow-xl shadow-gold-500/20"
                >
                  <MessageSquare size={16} /> WhatsApp
               </a>
             </div>
          </div>
          
          <div className="lg:w-1/2 p-8 md:p-12 bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-3xl rounded-full" />
             
             <h3 className="text-3xl font-heading font-black text-white uppercase italic tracking-tighter mb-8 leading-none">Quick Enquiry</h3>
             
             <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                       <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-2 italic">Your Full Name</label>
                       <input type="text" placeholder="John Doe" className="w-full bg-zinc-950 border border-zinc-800 p-4 font-medium text-white placeholder:text-zinc-700 outline-none focus:border-gold-500/50 transition-colors" />
                   </div>
                   <div className="space-y-2">
                       <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-2 italic">Phone Number</label>
                       <input type="tel" placeholder="+91 00000 00000" className="w-full bg-zinc-950 border border-zinc-800 p-4 font-medium text-white placeholder:text-zinc-700 outline-none focus:border-gold-500/50 transition-colors" />
                   </div>
                </div>
                
                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-2 italic">Select Fitness Goal</label>
                    <select className="w-full bg-zinc-950 border border-zinc-800 p-4 font-medium text-white outline-none focus:border-gold-500/50 transition-colors appearance-none">
                       <option>Weight Loss</option>
                       <option>Muscle Gain</option>
                       <option>Transformation</option>
                       <option>General Fitness</option>
                    </select>
                </div>
                
                <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-2 italic">Your Message</label>
                    <textarea rows={4} placeholder="Tell us about your fitness targets..." className="w-full bg-zinc-950 border border-zinc-800 p-4 font-medium text-white placeholder:text-zinc-700 outline-none focus:border-gold-500/50 transition-colors resize-none"></textarea>
                </div>
                
                <button type="submit" className="w-full btn-primary group">
                    Send Message <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                </button>
             </form>
          </div>
       </div>
    </section>
  );
};
