import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../UI/SectionHeader';
import { gymData } from '../../data/gymData';
import { Clock, Info, Droplets, Zap, Activity } from 'lucide-react';
import { cn } from '../../utils/cn';

export const WorkoutSchedule = () => {
  const [activeTab, setActiveTab] = useState(gymData.workoutSchedule.tabs[0]);
  const [activeLevel, setActiveLevel] = useState(gymData.workoutSchedule.levels[0]);
  const [activeDay, setActiveDay] = useState('Monday');

  const scheduleTabs = gymData.workoutSchedule.tabs;
  const levelTabs = gymData.workoutSchedule.levels;
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const scheduleData = (gymData.workoutSchedule as any).muscleGain?.[activeLevel] || {};
  const currentDayData = scheduleData[activeDay] || { workout: 'Rest Day', isRest: true };

  const daysRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the active day tab into view on mobile
  useEffect(() => {
    const activeEl = daysRef.current?.querySelector(`[data-active="true"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeDay]);

  return (
    <section id="schedule" className="section-padding bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          subtitle="Tailored Precision" 
          title="Weekly Split" 
        />

        {/* Filters Wrapper - Improved for Mobile */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
           {/* Goal Tabs - Horizontal Scroll on Mobile */}
           <div className="overflow-x-auto pb-4 lg:pb-0 scrollbar-hide -mx-5 px-5 lg:mx-0 lg:px-0">
             <div className="flex gap-2 min-w-max">
               {scheduleTabs.map(tab => (
                 <button
                   key={tab}
                   onClick={() => setActiveTab(tab)}
                   className={cn(
                     "px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300",
                     activeTab === tab ? "bg-gold-500 text-black shadow-lg shadow-gold-500/20 scale-105" : "bg-zinc-900 text-white/40 hover:text-white"
                   )}
                 >
                   {tab}
                 </button>
               ))}
             </div>
           </div>
           
           <div className="h-0.5 w-full bg-zinc-900 lg:h-10 lg:w-[1px] lg:bg-zinc-800" />

           {/* Level Tabs - Horizontal Scroll on Mobile */}
           <div className="overflow-x-auto pb-4 lg:pb-0 scrollbar-hide -mx-5 px-5 lg:mx-0 lg:px-0">
             <div className="flex gap-2 min-w-max">
               {levelTabs.map(lvl => (
                 <button
                   key={lvl}
                   onClick={() => setActiveLevel(lvl)}
                   className={cn(
                     "px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300",
                     activeLevel === lvl ? "bg-white text-black scale-105" : "bg-zinc-900 text-white/40 hover:text-white"
                   )}
                 >
                   {lvl}
                 </button>
               ))}
             </div>
           </div>
        </div>

        {/* Days Navigation - Horizontal Scroll Hub */}
        <div 
          ref={daysRef}
          className="flex overflow-x-auto pb-6 mb-10 scrollbar-hide -mx-5 px-5 lg:mx-0 lg:px-0 scroll-smooth items-center"
        >
            <div className="flex gap-2 min-w-max mx-auto">
                {days.map(day => (
                  <button
                    key={day}
                    data-active={activeDay === day}
                    onClick={() => setActiveDay(day)}
                    className={cn(
                      "px-8 py-4 rounded-xl font-heading font-black uppercase text-sm italic tracking-tighter transition-all duration-300 border-2",
                      activeDay === day ? "border-gold-500 text-gold-500 bg-gold-500/5" : "border-zinc-900 text-white/30 hover:text-white"
                    )}
                  >
                    {day}
                  </button>
                ))}
            </div>
        </div>

        {/* Day Card View Optimized for Mobile */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${activeLevel}-${activeDay}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* Day Overview Header */}
            <div className="lg:col-span-1">
               <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 blur-3xl rounded-full" />
                  
                  <span className="text-gold-500 font-black uppercase tracking-[0.2em] text-[10px] mb-3 block">Daily Focus</span>
                  <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase italic tracking-tighter mb-4 leading-none">{currentDayData.workout}</h3>
                  <div className="h-1 w-12 bg-gold-500 mb-8" />
                  
                  {currentDayData.isRest ? (
                    <div className="flex flex-col gap-6">
                      <p className="text-white/40 italic text-sm leading-relaxed">Relax and recover. Priority: Hydration, Mobility, and Sleep.</p>
                      <div className="p-8 bg-zinc-950 border border-zinc-800 rounded-2xl flex items-center justify-center opacity-40">
                         <Droplets size={48} className="text-gold-500" />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-wrap gap-6 mb-10">
                         <div className="flex items-center gap-3 text-white/60">
                           <Clock size={16} className="text-gold-500" /> <span className="text-xs font-black uppercase tracking-widest font-heading italic">60-90m</span>
                         </div>
                         <div className="flex items-center gap-3 text-white/60">
                           <Zap size={16} className="text-gold-500" /> <span className="text-xs font-black uppercase tracking-widest font-heading italic">High Intensity</span>
                         </div>
                      </div>
                      <div className="p-5 bg-gold-500/5 border border-gold-500/10 rounded-2xl">
                         <div className="flex gap-2 items-center mb-3 font-black text-[10px] uppercase text-gold-500 italic">
                           <Info size={14} /> Coach Remark
                         </div>
                         <p className="text-white/50 text-xs italic leading-relaxed">
                            {currentDayData.trainerNote || "Focus on mind-muscle connection and perfect form."}
                         </p>
                      </div>
                    </>
                  )}
               </div>
            </div>

            {/* Exercise List - Smooth Accordion feel on Mobile */}
            <div className="lg:col-span-2 space-y-4">
              {currentDayData.isRest ? (
                <div className="h-full flex flex-col gap-6 p-10 border border-zinc-800 rounded-3xl bg-zinc-900/20 backdrop-blur-sm">
                   <h4 className="text-2xl font-heading font-black text-white uppercase italic tracking-tighter leading-none mb-4">Muscle growth happens during rest</h4>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl group hover:border-gold-500/30 transition-all">
                        <Droplets className="text-gold-500 mb-4" />
                        <h5 className="font-black uppercase italic text-sm mb-2">Maximum Hydration</h5>
                        <p className="text-white/30 text-xs leading-relaxed">Drink at least 4.5L of water today to flush toxins and recover.</p>
                      </div>
                      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-2xl group hover:border-gold-500/30 transition-all">
                        <Activity className="text-gold-500 mb-4" />
                        <h5 className="font-black uppercase italic text-sm mb-2">Form & Mobility</h5>
                        <p className="text-white/30 text-xs leading-relaxed">Light stretching to prevent stiffness and improve range of motion.</p>
                      </div>
                   </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {currentDayData.exercises?.map((ex: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="group flex gap-4 items-center justify-between p-5 md:p-6 bg-zinc-900 border border-zinc-800 hover:border-gold-500/20 rounded-2xl transition-all duration-300 active:bg-zinc-800"
                    >
                      <div className="flex items-center gap-4 md:gap-6">
                        <span className="w-6 h-6 flex items-center justify-center font-heading font-black text-gold-500/50 italic text-lg leading-none">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="text-base md:text-xl font-heading font-black text-white uppercase italic tracking-tighter group-hover:text-gold-500 transition-colors">
                            {ex.name}
                          </h4>
                          <div className="flex gap-4 mt-1.5 opacity-40">
                             <span className="text-[9px] font-black uppercase tracking-widest italic">{ex.reps} Reps</span>
                             <span className="text-[9px] font-black uppercase tracking-widest italic">Rest: {ex.rest}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex gap-0.5 mb-1.5">
                           {[...Array(Math.min(parseInt(ex.sets), 5))].map((_, s) => (
                             <div key={s} className="w-1.5 h-4 bg-gold-500 rounded-sm" />
                           ))}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gold-500 italic leading-none">{ex.sets} Sets</span>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Mobile-Friendly Warmup Suggestion */}
                  <div className="p-5 bg-gold-500/5 border border-gold-500/20 rounded-2xl flex gap-4 items-center">
                     <div className="w-10 h-10 flex-shrink-0 bg-gold-500 rounded-lg flex items-center justify-center">
                        <Zap size={20} className="text-black" />
                     </div>
                     <div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gold-500 italic block mb-1">Essential Warmup</span>
                        <p className="text-white/40 text-[10px] sm:text-xs italic leading-tight">
                           {currentDayData.warmUp}
                        </p>
                     </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
