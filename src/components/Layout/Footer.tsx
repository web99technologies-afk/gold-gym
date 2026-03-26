import { gymData } from '../../data/gymData';
import { Share2, Globe, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black pt-20 pb-10 border-t border-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="col-span-1 lg:col-span-1">
             <a href="#" className="flex flex-col mb-8 group">
                <span className="text-3xl font-heading font-black italic text-white leading-none tracking-tighter group-hover:text-gold-500 transition-colors">
                  GOLD <span className="text-gold-500 group-hover:text-white transition-colors">GYM</span>
                </span>
                <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-gold-500/80 mt-1 leading-none">
                  {gymData.business.location}
                </span>
             </a>
             <p className="text-white/40 text-sm italic leading-relaxed mb-8">
               Empowering Kumbakonam with premium fitness solutions, professional guidance, and life-changing transformations since 2016.
             </p>
             <div className="flex gap-4">
               {[Share2, Globe].map((Icon, i) => (
                 <a key={i} href="#" className="w-10 h-10 bg-zinc-900 border border-zinc-800 flex items-center justify-center rounded-xl text-white/40 hover:text-gold-500 hover:border-gold-500 transition-all duration-300">
                    <Icon size={18} />
                 </a>
               ))}
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-black uppercase text-lg italic tracking-tighter mb-8 leading-none">Quick Links</h4>
            <ul className="space-y-4">
               {['About Us', 'Our Programs', 'Workout Schedule', 'Trainers', 'Pricing Plans'].map((link) => (
                 <li key={link}>
                   <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/40 hover:text-gold-500 transition-colors text-sm font-bold uppercase tracking-widest text-[10px] italic">
                     {link}
                   </a>
                 </li>
               ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-heading font-black uppercase text-lg italic tracking-tighter mb-8 leading-none">Get In Touch</h4>
            <ul className="space-y-6">
               <li className="flex gap-4 items-start">
                  <MapPin size={18} className="text-gold-500 mt-1" />
                  <span className="text-white/40 text-sm italic">{gymData.business.address}</span>
               </li>
               <li className="flex gap-4 items-start">
                  <Phone size={18} className="text-gold-500 mt-1" />
                  <span className="text-white/40 text-sm italic">{gymData.business.phone}</span>
               </li>
               <li className="flex gap-4 items-start">
                  <Mail size={18} className="text-gold-500 mt-1" />
                  <span className="text-white/40 text-sm italic">{gymData.business.email}</span>
               </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h4 className="text-white font-heading font-black uppercase text-lg italic tracking-tighter mb-8 leading-none">Gym Hours</h4>
            <ul className="space-y-4">
               <li className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest italic">Morning</span>
                  <span className="text-gold-500 text-xs font-bold italic">{gymData.business.timings.morning}</span>
               </li>
               <li className="flex justify-between border-b border-zinc-900 pb-2">
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest italic">Evening</span>
                  <span className="text-gold-500 text-xs font-bold italic">{gymData.business.timings.evening}</span>
               </li>
               <li className="flex justify-between">
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest italic">Sunday</span>
                  <span className="text-red-500/60 text-xs font-bold italic font-bold">Closed</span>
               </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest italic order-2 md:order-1">
             © 2024 Gold Gym Kumbakonam. All rights reserved.
           </p>
           
           <button 
             onClick={scrollToTop}
             className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-black hover:bg-white transition-all duration-300 order-1 md:order-2 shadow-2xl shadow-gold-500/20"
           >
              <ArrowUp size={20} />
           </button>
           
           <div className="flex gap-6 order-3">
              <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest italic">Privacy Policy</span>
              <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest italic">Terms of Use</span>
           </div>
        </div>
      </div>
      
      {/* Scroll indicator for SEO / Local branding */}
      <div className="absolute -bottom-10 left-0 w-full opacity-5 pointer-events-none overflow-hidden select-none">
          <span className="text-[200px] font-heading font-black whitespace-nowrap italic text-white leading-none">GOLD GYM KUMBAKONAM</span>
      </div>
    </footer>
  );
};
