import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 border-2 border-gold-500/20 border-t-gold-500 rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center font-heading text-xl font-black text-gold-500 italic">
                GG
              </div>
            </div>
            <div className="flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="text-3xl md:text-5xl font-heading font-black italic tracking-tighter text-white uppercase text-center leading-tight mb-2"
              >
                GOLD <span className="text-gold-500">GYM</span>
              </motion.h1>
              
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                transition={{ duration: 1, delay: 0.8, ease: "circOut" }}
                className="h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mb-3"
              />

              <motion.p
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 1.2 }}
                 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-gold-500/80"
              >
                 Kumbakonam
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
