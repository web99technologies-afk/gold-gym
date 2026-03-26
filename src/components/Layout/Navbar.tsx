import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
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
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 lg:px-20",
          isScrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-xl" : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex flex-col group">
            <span className="text-2xl md:text-3xl font-heading font-black italic text-white leading-none tracking-tighter group-hover:text-gold-500 transition-colors">
              GOLD <span className="text-gold-500 group-hover:text-white transition-colors">GYM</span>
            </span>
            <span className="text-[10px] md:text-xs font-heading font-bold uppercase tracking-[0.2em] text-gold-500/80 mt-1 leading-none">
              {gymData.business.location}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold uppercase tracking-wider text-white/70 hover:text-gold-500 transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a 
              href={`https://wa.me/${gymData.business.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900 border border-zinc-800 rounded-full hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
            >
              <MessageSquare size={18} />
            </a>
            <a onClick={() => window.location.href = '#contact'} className="btn-primary py-3 px-6 text-sm">
              Join Now
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-gold-500 transition-colors"
          >
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black pt-32 px-10 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-heading font-bold uppercase text-white hover:text-gold-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="w-full flex flex-col gap-4 mt-8">
                <a 
                  href={`tel:${gymData.business.phone}`}
                  className="flex items-center justify-center gap-3 w-full py-4 border-2 border-white/20 text-white font-bold uppercase tracking-wider"
                >
                  <Phone size={20} /> Call Now
                </a>
                <a 
                  href={`https://wa.me/${gymData.business.whatsapp}`}
                  target="_blank"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-gold-500 text-black font-bold uppercase tracking-wider"
                >
                  <MessageSquare size={20} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
