import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { gymData } from '../../data/gymData';
import { cn } from '../../utils/cn';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className={cn(
          "fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-5 md:px-20",
          isScrolled ? "bg-black/90 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5" : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group relative z-[110]">
            <img src="/images/logo.png" alt="Gold Gym" className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-heading font-black italic text-white leading-none tracking-tighter group-hover:text-gold-500 transition-colors">
                GOLD GYM
              </span>
              <span className="text-[8px] md:text-[10px] font-heading font-black uppercase tracking-[0.2em] text-gold-500 mt-0.5 leading-none">
                {gymData.business.location}
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-widest text-white/50 hover:text-gold-500 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <a 
                href={`https://wa.me/${gymData.business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
              >
                <MessageSquare size={18} />
              </a>
              <a href="#contact" className="btn-primary py-3 px-6 text-xs font-black italic">
                Join Now
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-[110] p-2 text-white hover:text-gold-500 transition-colors bg-zinc-900/50 rounded-lg border border-white/5 active:scale-90"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-md lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-[95] w-[85%] sm:w-[350px] h-full bg-zinc-950 border-l border-white/10 pt-32 pb-10 px-8 lg:hidden flex flex-col shadow-[-20px_0_50px_rgba(0,0,0,0.5)]"
          >
             <div className="flex-grow flex flex-col gap-1 justify-center">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 + 0.2 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-4 text-2xl font-heading font-black uppercase text-white hover:text-gold-500 transition-colors border-b border-white/5 group"
                  >
                    <span className="group-hover:translate-x-2 transition-transform">{link.name}</span>
                    <ChevronRight size={20} className="text-gold-500 opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.a>
                ))}
             </div>

             <div className="mt-auto space-y-4">
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 block mb-6">Quick Contact</span>
               <div className="grid grid-cols-2 gap-4">
                  <a 
                    href={`tel:${gymData.business.phone}`}
                    className="flex flex-col items-center justify-center gap-2 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-2xl active:bg-zinc-800 transition-colors"
                  >
                    <Phone size={20} className="text-gold-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Call</span>
                  </a>
                  <a 
                    href={`https://wa.me/${gymData.business.whatsapp}`}
                    target="_blank"
                    className="flex flex-col items-center justify-center gap-2 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-2xl active:bg-zinc-800 transition-colors"
                  >
                    <MessageSquare size={20} className="text-gold-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Chat</span>
                  </a>
               </div>
               <a 
                 href="#contact" 
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="w-full btn-primary italic font-black text-sm"
               >
                 Start Training Now
               </a>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
