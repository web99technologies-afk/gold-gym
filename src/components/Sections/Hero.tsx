import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
// @ts-ignore
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageSquare, Phone, ChevronDown } from 'lucide-react';
import { gymData } from '../../data/gymData';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable GSAP parallax on screens larger than 1024px
    if (window.innerWidth >= 1024) {
      const ctx = gsap.context(() => {
        gsap.to(videoOverlayRef.current, {
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
          y: '20%',
          opacity: 0.3,
        });
      }, heroRef);
      return () => ctx.revert();
    }
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-black pt-20 px-5 sm:px-10 lg:px-20">
      {/* Background Image - Optimized for Mobile */}
      <div 
        ref={videoOverlayRef}
        className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-50 md:opacity-60"
        style={{ backgroundImage: `url('/images/gym/hero-bg.jpg')` }}
      />
      
      {/* Overlay Gradients - Enhanced for Mobile Contrast */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/90 via-black/40 to-black" />
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-black via-transparent to-black" />
      
      {/* Grid Overlay - Subtler on Mobile */}
      <div className="absolute inset-0 z-1 bg-grid opacity-10 md:opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center items-center lg:items-start text-center lg:text-left pt-10 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 mb-6 bg-gold-500/10 border border-gold-500/20 px-4 py-2 rounded-full"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse" />
          <span className="text-gold-500 font-black uppercase tracking-widest text-[10px]">
            Kumbakonam's Top-Tier Fitness Hub
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-8xl font-heading font-black italic tracking-tighter text-white uppercase leading-[0.9] mb-8"
        >
          TRANSFORM <br /> 
          <span className="text-gold-500">YOUR BODY</span> <br />
          AT GOLD GYM
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
          className="text-sm sm:text-lg md:text-xl text-white/50 font-medium max-w-xl mb-12 leading-relaxed"
        >
          Premium fitness destination in Kumbakonam. Advanced equipment, results-oriented training, and absolute discipline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a href="#contact" className="btn-primary group w-full sm:w-auto text-base">
            Join Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#schedule" className="btn-outline group w-full sm:w-auto text-base">
            View Schedule
          </a>
        </motion.div>

        {/* Hero Quick Contacts for Mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.2 }}
          className="mt-16 flex items-center justify-center lg:justify-start gap-8 md:gap-12"
        >
          <a 
            href={`https://wa.me/${gymData.business.whatsapp}`} 
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-white group-hover:text-gold-500 group-hover:border-gold-500/50 transition-all">
              <MessageSquare size={16} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">WhatsApp</span>
          </a>
          <a 
            href={`tel:${gymData.business.phone}`} 
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-white group-hover:text-gold-500 group-hover:border-gold-500/50 transition-all">
              <Phone size={16} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">Call Now</span>
          </a>
        </motion.div>
      </div>

      {/* Hero Scroll Down Indicator - Subtler on Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 select-none hidden sm:block"
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 60 }}
        transition={{ duration: 1.5, delay: 3.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent to-gold-500/50"
      />
    </section>
  );
};
