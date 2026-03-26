import { motion } from 'framer-motion';
import { MessageSquare, Phone } from 'lucide-react';
import { gymData } from '../../data/gymData';

export const MobileFloaters = () => {
  return (
    <>
      {/* Floating Buttons for Mobile/Desktop */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
        {/* WhatsApp Button */}
        <motion.a 
          href={`https://wa.me/${gymData.business.whatsapp}`} 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-green-500 text-white flex items-center justify-center rounded-2xl shadow-[0_10px_30px_rgba(34,197,94,0.4)] md:w-16 md:h-16"
          title="WhatsApp Enquiry"
        >
          <MessageSquare size={24} />
        </motion.a>
      </div>

      {/* Sticky Bottom Bar for Mobile Only */}
      <div className="fixed bottom-0 left-0 w-full z-[100] lg:hidden">
          <div className="bg-black/80 backdrop-blur-xl border-t border-white/10 p-3 sm:p-4 grid grid-cols-2 gap-3">
              <a 
                href={`tel:${gymData.business.phone}`} 
                className="flex items-center justify-center gap-3 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-xs active:bg-zinc-800 transition-colors"
              >
                <Phone size={18} className="text-gold-500" /> Call Now
              </a>
              <a 
                href="#contact" 
                className="flex items-center justify-center gap-3 py-4 bg-gold-500 text-black rounded-2xl font-black uppercase tracking-widest text-[10px] sm:text-xs active:bg-gold-400 transition-colors shadow-lg shadow-gold-500/20 mobile-cta-pulse"
              >
                Join Today
              </a>
          </div>
      </div>
    </>
  );
};
