import { useState } from 'react';
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

  return (
    <section id="schedule" className="section-padding bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          subtitle="Precision Training" 
          title="Workout Schedule" 
        />

        {/* Filters Wrapper */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-16 bg-zinc-900/40 p-4 border border-zinc-800 rounded-2xl">
           <div className="flex gap-2">
             {scheduleTabs.map(tab => (
               <button
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={cn(
                   "px-6 py-2 rounded-xl text-xs font-bold uppercase transition-all duration-300",
                   activeTab === tab ? "bg-gold-500 text-black shadow-lg shadow-gold-500/20" : "bg-transparent text-white/40 hover:text-white"
                 )}
               >
                 {tab}
               </button>
             ))}
           </div>
           
           <div className="h-10 w-[1px] bg-zinc-800 hidden md:block" />

           <div className="flex gap-2">
             {levelTabs.map(lvl => (
               <button
                 key={lvl}
                 onClick={() => setActiveLevel(lvl)}
                 className={cn(
                   "px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300",
                   activeLevel === lvl ? "bg-white text-black" : "bg-zinc-800/50 text-white/40 hover:text-white"
                 )}
               >
                 {lvl}
               </button>
             ))}
           </div>
        </div>

        {/* Days Navigation */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
            {days.map(day => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={cn(
                  "px-8 py-3 rounded-none font-heading font-black uppercase text-sm tracking-tighter transition-all duration-300 border-b-2",
                  activeDay === day ? "border-gold-500 text-gold-500 bg-gold-500/5" : "border-transparent text-white/30 hover:text-white"
                )}
              >
                {day.substring(0, 3)}
              </button>
            ))}
        </div>

        {/* Schedule Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTab}-${activeLevel}-${activeDay}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Left: Day Header and Note */}
            <div className="lg:col-span-1 flex flex-col gap-6">
               <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl h-full">
                  <span className="text-gold-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-2 block">Focus of the Day</span>
                  <h3 className="text-4xl font-heading font-black text-white uppercase italic tracking-tighter mb-4">{currentDayData.workout}</h3>
                  <div className="h-[2px] w-12 bg-gold-500 mb-6" />
                  
                  {currentDayData.isRest ? (
                    <div className="flex flex-col gap-4">
                      <p className="text-white/40 italic">Take this time to recover and let your muscles grow. Focus on hydration and mobility.</p>
                      <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=700&auto=format&fit=crop" className="w-full h-40 object-cover grayscale opacity-30 rounded-xl mt-4" alt="Rest" />
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4 mb-8">
                         <div className="flex items-center gap-3 text-white/60">
                           <Clock size={16} className="text-gold-500" /> <span className="text-sm font-bold uppercase tracking-wider">60 - 90 Mins</span>
                         </div>
                         <div className="flex items-center gap-3 text-white/60">
                           <Zap size={16} className="text-gold-500" /> <span className="text-sm font-bold uppercase tracking-wider">High Intensity</span>
                         </div>
                      </div>
                      <div className="bg-gold-500/5 border-l-4 border-gold-500 p-4">
                         <div className="flex gap-2 items-center mb-2 font-bold text-xs uppercase text-gold-500">
                           <Info size={14} /> Trainer Note
                         </div>
                         <p className="text-white/60 text-xs italic leading-relaxed">
                            {currentDayData.trainerNote || "Consult trainer for form check before starting."}
                         </p>
                      </div>
                    </>
                  )}
               </div>
            </div>

            {/* Right: Exercise List */}
            <div className="lg:col-span-2 space-y-4">
              {currentDayData.isRest ? (
                <div className="h-full flex flex-col gap-6 p-8 border border-zinc-800 rounded-2xl bg-zinc-900/40">
                   <h4 className="text-2xl font-heading font-black text-white uppercase italic tracking-tighter">Growth happens during recovery</h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800">
                        <Droplets className="text-gold-500 mb-4" />
                        <h5 className="font-bold uppercase text-sm mb-2">Hydrate</h5>
                        <p className="text-white/40 text-xs leading-relaxed italic">Drink at least 4-5 liters of water to support physiological repair.</p>
                      </div>
                      <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800">
                        <Activity className="text-gold-500 mb-4" />
                        <h5 className="font-bold uppercase text-sm mb-2">Mobility</h5>
                        <p className="text-white/40 text-xs leading-relaxed italic">Light stretching and foam rolling to improve blood flow and range of motion.</p>
                      </div>
                   </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-4 mb-2">
                     <div className="h-[2px] flex-grow bg-zinc-800" />
                     <span className="text-white/20 font-bold uppercase text-[10px] tracking-widest leading-none">Main Exercises</span>
                     <div className="h-[2px] flex-grow bg-zinc-800" />
                  </div>
                  {currentDayData.exercises?.map((ex: any, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group flex gap-4 md:items-center justify-between p-6 bg-zinc-900 border border-zinc-800 hover:border-gold-500/30 rounded-2xl transition-all duration-300"
                    >
                      <div className="flex items-start md:items-center gap-6">
                        <span className="w-8 h-8 flex items-center justify-center font-heading font-black text-gold-500 italic text-xl">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="text-lg md:text-xl font-heading font-black text-white uppercase italic tracking-tighter leading-none group-hover:text-gold-500 transition-colors">
                            {ex.name}
                          </h4>
                          <div className="flex gap-4 mt-2">
                             <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 italic">Target: {ex.reps} Reps</span>
                             <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 italic">Rest: {ex.rest}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex gap-1">
                           {[...Array(parseInt(ex.sets))].map((_, s) => (
                             <div key={s} className="w-1.5 h-6 bg-gold-500" />
                           ))}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gold-500 mt-2">{ex.sets} Sets</span>
                      </div>
                    </motion.div>
                  ))}
                  <div className="p-6 bg-gold-500/5 border border-gold-500/20 rounded-2xl">
                     <div className="flex gap-3 items-center mb-1">
                        <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-gold-500 italic">Warm-up Recommendation</span>
                     </div>
                     <p className="text-white/50 text-xs italic">
                        {currentDayData.warmUp}
                     </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
