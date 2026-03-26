import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Sections/Hero';
import { About } from './components/Sections/About';
import { WhyChooseUs, Programs } from './components/Sections/Features';
import { WorkoutSchedule } from './components/Workout/WorkoutSchedule';
import { WorkoutCalendar } from './components/Workout/WorkoutCalendar';
import { Trainers, Memberships } from './components/Sections/Memberships';
import { FAQ, Contact, TransformationGallery } from './components/Sections/ContactFAQ';
import { Footer } from './components/Layout/Footer';
import { Preloader } from './components/Layout/Preloader';
import { MobileFloaters } from './components/Layout/MobileFloaters';

function App() {
  useEffect(() => {
    // Only enable smooth scroll on screens larger than mobile for better performance
    if (window.innerWidth >= 1024) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return (
    <div className="relative bg-black min-h-screen selection:bg-gold-500 selection:text-black">
      <Preloader />
      <Navbar />
      
      <main className="relative z-10 pb-24 md:pb-0">
        <Hero />
        <About />
        <WhyChooseUs />
        <Programs />
        <WorkoutSchedule />
        <WorkoutCalendar />
        <Trainers />
        <TransformationGallery />
        <Memberships />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <MobileFloaters />

      {/* Progress Scroll Indicator for Desktop */}
      <div className="hidden lg:block fixed right-10 top-1/2 -translate-y-1/2 flex-col gap-8 z-50">
        <div className="w-1 h-32 bg-zinc-900 rounded-full relative overflow-hidden">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            className="absolute top-0 left-0 w-full bg-gold-500" 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
