import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
// @ts-ignore
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { gymData } from '../../data/gymData';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax effect
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

      // Split text or char animations would go here for extra premium feel
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background Image/Video Placeholder */}
      <div 
        ref={videoOverlayRef}
        className="absolute inset-0 z-0 bg-cover bg-center grayscale opacity-60"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')` }}
      />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-black via-transparent to-black/20" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-1 bg-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 pt-10">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6 bg-gold-500/10 border border-gold-500/20 px-4 py-2 rounded-full"
          >
            <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            <span className="text-gold-500 font-bold uppercase tracking-widest text-xs">
              KUMBAKONAM'S ELITE TRANSFORMATION CENTER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.4, ease: "easeOut" }}
            className="text-5xl md:text-8xl font-heading font-black italic tracking-tighter text-white uppercase leading-[0.9] mb-8"
          >
            TRANSFORM <br /> 
            <span className="text-gold-500">YOUR BODY</span> <br />
            AT GOLD GYM
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/60 font-medium max-w-2xl mb-12 leading-relaxed"
          >
            Experience Kumbakonam's most premium fitness destination. 
            From expert-led weight training to results-oriented nutrition - 
            discipline, strength, and transformation start here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8, ease: "easeOut" }}
            className="flex flex-wrap gap-6"
          >
            <a href="#contact" className="btn-primary group">
              Join Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#schedule" className="btn-outline group">
              View Schedule
            </a>
          </motion.div>

          {/* Social / Phone CTA on Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
            className="mt-16 flex items-center gap-8 text-white/40"
          >
            <a 
              href={`https://wa.me/${gymData.business.whatsapp}`} 
              className="flex items-center gap-2 hover:text-gold-500 transition-colors"
            >
              <MessageSquare size={16} /> <span className="text-xs font-bold uppercase tracking-widest leading-none">WhatsApp</span>
            </a>
            <a 
              href={`tel:${gymData.business.phone}`} 
              className="flex items-center gap-2 hover:text-gold-500 transition-colors"
            >
              <Phone size={16} /> <span className="text-xs font-bold uppercase tracking-widest leading-none">Call Now</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 100 }}
        transition={{ duration: 1.5, delay: 3.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent to-gold-500"
      />
    </section>
  );
};
