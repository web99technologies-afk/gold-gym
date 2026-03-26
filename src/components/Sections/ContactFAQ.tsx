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
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader 
          subtitle="Support Hub" 
          title="Common Inquiries" 
          className="mb-12 md:mb-16"
        />
        
        <div className="space-y-4">
          {gymData.faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-zinc-900 bg-zinc-900/40 backdrop-blur-md transition-all hover:border-gold-500/20"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors active:bg-zinc-800"
              >
                <h4 className="text-base md:text-xl font-heading font-black text-white italic uppercase tracking-tighter transition-colors group-hover:text-gold-500">
                  {faq.q}
                </h4>
                <div className={cn(
                  "flex-shrink-0 w-10 md:w-12 h-10 md:h-12 border border-zinc-800 rounded-full flex items-center justify-center text-white/40 transition-all duration-300",
                  activeIndex === idx ? "bg-gold-500 text-black border-gold-500 rotate-180" : "group-hover:text-white"
                )}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <div className="px-6 pb-8 md:px-8 md:pb-10 italic">
                      <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const TransformationGallery = () => {
  return (
    <section id="gallery" className="section-padding bg-black relative">
       <div className="max-w-7xl mx-auto">
        <SectionHeader 
          subtitle="Visual Proof" 
          title="Transformation Gallery" 
          className="mb-12 md:mb-16"
        />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {gymData.transformations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer active:scale-95 transition-transform"
            >
              <img 
                src={item.image} 
                alt="Transformation" 
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-700 md:grayscale md:group-hover:grayscale-0 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-4 flex flex-col justify-end opacity-90 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                 <h5 className="text-white font-heading font-black uppercase text-xs md:text-sm italic italic tracking-tighter leading-none">{item.name}</h5>
                 <span className="text-gold-500 font-black uppercase text-[8px] md:text-[10px] tracking-widest italic mt-1">{item.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:mt-16">
           <a href={`https://wa.me/${gymData.business.whatsapp}`} target="_blank" className="btn-outline group font-black italic">
              Experience the Change <MessageSquare size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-[#050505] relative pt-20 md:pt-40">
       {/* Background Noise/Grid */}
       <div className="absolute inset-x-0 bottom-0 h-1/2 bg-grid opacity-10 pointer-events-none" />
       
       <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20">
             
             {/* Contact Info Column */}
             <div className="lg:col-span-12 xl:col-span-5 flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
                <SectionHeader 
                  subtitle="Get in Touch" 
                  title="Elite Support" 
                  className="mb-10 md:mb-12 flex flex-col items-center lg:items-start"
                  align="left"
                />
                
                <div className="space-y-8 md:space-y-10 w-full mb-12 lg:mb-0">
                   {/* Address */}
                   <div className="flex flex-col lg:flex-row items-center gap-4 group">
                      <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-zinc-900 border border-zinc-800 text-gold-500 rounded-2xl flex items-center justify-center group-hover:border-gold-500 transition-colors shadow-2xl">
                         <MapPin size={24} />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-black uppercase tracking-widest text-white/30 italic mb-1">Our Location</span>
                         <h5 className="text-white font-heading font-black italic text-base md:text-lg uppercase leading-tight tracking-tighter">
                            {gymData.business.fullAddress}
                         </h5>
                      </div>
                   </div>

                   {/* Phone */}
                   <div className="flex flex-col lg:flex-row items-center gap-4 group">
                      <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-zinc-900 border border-zinc-800 text-gold-500 rounded-2xl flex items-center justify-center group-hover:border-gold-500 transition-colors shadow-2xl">
                         <Phone size={24} />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-black uppercase tracking-widest text-white/30 italic mb-1">Direct Hotline</span>
                         <a href={`tel:${gymData.business.phone}`} className="text-white font-heading font-black italic text-base md:text-lg uppercase leading-tight tracking-tighter group-hover:text-gold-500 transition-colors">
                            {gymData.business.phone}
                         </a>
                      </div>
                   </div>

                   {/* Mail */}
                   <div className="flex flex-col lg:flex-row items-center gap-4 group">
                      <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 bg-zinc-900 border border-zinc-800 text-gold-500 rounded-2xl flex items-center justify-center group-hover:border-gold-500 transition-colors shadow-2xl">
                         <Mail size={24} />
                      </div>
                      <div className="flex flex-col">
                         <span className="text-[10px] font-black uppercase tracking-widest text-white/30 italic mb-1">Email Enquiries</span>
                         <a href={`mailto:${gymData.business.email}`} className="text-white font-heading font-black italic text-base md:text-lg uppercase leading-tight tracking-tighter group-hover:text-gold-500 transition-colors underline decoration-gold-500/30 underline-offset-4">
                            {gymData.business.email}
                         </a>
                      </div>
                   </div>
                </div>
             </div>

             {/* Booking Form Column */}
             <div className="lg:col-span-12 xl:col-span-7">
                <motion.div 
                   initial={{ opacity: 0, x: 50 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.8 }}
                   className="p-8 md:p-12 bg-zinc-900/50 border border-zinc-800/50 rounded-3xl backdrop-blur-xl relative"
                >
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 via-white/10 to-transparent" />
                   
                   <h3 className="text-2xl md:text-4xl font-heading font-black text-white italic tracking-tighter uppercase mb-2">Book Your Session</h3>
                   <p className="text-white/30 text-xs md:text-sm font-black uppercase italic tracking-widest mb-10">Limited personal training slots available.</p>

                   <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-1.5">
                         <label className="text-xs font-black uppercase tracking-widest text-white/50 italic mb-2 block">Full Name</label>
                         <input 
                           type="text" 
                           placeholder="Enter your name"
                           className="w-full bg-zinc-950 border border-zinc-800 px-6 py-4 rounded-xl text-white focus:border-gold-500 outline-none transition-all placeholder:text-white/10 text-sm italic"
                         />
                      </div>
                      <div className="space-y-1.5">
                         <label className="text-xs font-black uppercase tracking-widest text-white/50 italic mb-2 block">Email Address</label>
                         <input 
                           type="email" 
                           placeholder="example@mail.com"
                           className="w-full bg-zinc-950 border border-zinc-800 px-6 py-4 rounded-xl text-white focus:border-gold-500 outline-none transition-all placeholder:text-white/10 text-sm italic"
                         />
                      </div>
                      <div className="space-y-1.5">
                         <label className="text-xs font-black uppercase tracking-widest text-white/50 italic mb-2 block">Phone Number</label>
                         <input 
                           type="tel" 
                           placeholder="+91 0000 0000 00"
                           className="w-full bg-zinc-950 border border-zinc-800 px-6 py-4 rounded-xl text-white focus:border-gold-500 outline-none transition-all placeholder:text-white/10 text-sm italic"
                         />
                      </div>
                      <div className="space-y-1.5">
                         <label className="text-xs font-black uppercase tracking-widest text-white/50 italic mb-2 block">Service Type</label>
                         <select className="w-full bg-zinc-950 border border-zinc-800 px-6 py-4 rounded-xl text-white focus:border-gold-500 outline-none transition-all text-sm italic">
                            <option>Personal Coaching</option>
                            <option>General Membership</option>
                            <option>Group Training</option>
                            <option>Consultation</option>
                         </select>
                      </div>
                      <div className="md:col-span-2 space-y-1.5">
                         <label className="text-xs font-black uppercase tracking-widest text-white/50 italic mb-2 block">Your Message</label>
                         <textarea 
                           rows={4}
                           placeholder="How can we help you crush your goals?"
                           className="w-full bg-zinc-950 border border-zinc-800 px-6 py-5 rounded-xl text-white focus:border-gold-500 outline-none transition-all placeholder:text-white/10 text-sm italic resize-none"
                         />
                      </div>

                      <div className="md:col-span-2">
                         <button className="w-full btn-primary group italic font-black text-base py-5 active:scale-95">
                            Submit Request <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                         </button>
                      </div>
                   </form>
                </motion.div>
             </div>
          </div>
       </div>
    </section>
  );
};
