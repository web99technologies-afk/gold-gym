import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../UI/SectionHeader';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Dumbbell, 
  Flame, 
  Activity, 
  Coffee, 
  CheckCircle, 
  Droplets,
  Zap,
  Clock,
  ArrowRight
} from 'lucide-react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, getDay } from 'date-fns';
import { cn } from '../../utils/cn';

export const WorkoutCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getWorkoutForDate = (date: Date) => {
    const day = getDay(date); // 0 (Sun) to 6 (Sat)
    
    const workouts: Record<number, any> = {
      0: { title: 'Rest & Recovery', type: 'Recovery', icon: Coffee, desc: 'Light stretching and foam rolling', duration: '30 min' },
      1: { title: 'Chest & Triceps', type: 'Strength', icon: Dumbbell, desc: 'Flat/Incline bench, Cable flys', duration: '75 min', intensity: 'High' },
      2: { title: 'Back & Bicep', type: 'Strength', icon: Dumbbell, desc: 'Deadlifts, Rowings, Curls', duration: '75 min', intensity: 'High' },
      3: { title: 'Leg Day Power', type: 'Strength', icon: Dumbbell, desc: 'Squats, Leg Press, Extensions', duration: '90 min', intensity: 'Extreme' },
      4: { title: 'Shoulder & Core', type: 'Hypertrophy', icon: Activity, desc: 'OHP, Lateral raises, Planks', duration: '60 min', intensity: 'Medium' },
      5: { title: 'Full Body Functional', type: 'Conditioning', icon: Flame, desc: 'Sled push, Battle ropes, HIIT', duration: '60 min', intensity: 'High' },
      6: { title: 'Cardio Focus', type: 'Cardio', icon: Zap, desc: 'Treadmill sprints, Jump ropes', duration: '45 min', intensity: 'Medium' },
    };

    return workouts[day];
  };

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-6 bg-zinc-900/50 p-4 md:p-6 border border-zinc-800 rounded-2xl">
        <div className="flex items-center gap-2 md:gap-4">
          <CalendarIcon className="text-gold-500 w-5 h-5 md:w-6 md:h-6" />
          <h3 className="text-xl md:text-2xl font-heading font-black text-white uppercase italic tracking-tighter">
            {format(currentMonth, 'MMMM yyyy')}
          </h3>
        </div>
        <div className="flex gap-1 md:gap-2">
          <button onClick={prevMonth} className="p-2 md:p-3 bg-zinc-800 hover:bg-gold-500 hover:text-black rounded-lg transition-colors border border-zinc-700 active:scale-90">
            <ChevronLeft size={18} />
          </button>
          <button onClick={nextMonth} className="p-2 md:p-3 bg-zinc-800 hover:bg-gold-500 hover:text-black rounded-lg transition-colors border border-zinc-700 active:scale-90">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const fullDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="grid grid-cols-7 mb-4">
        {fullDays.map((day, i) => (
          <div key={i} className="text-center font-black uppercase text-[10px] tracking-widest text-white/30 italic">
            <span className="hidden md:inline">{day}</span>
            <span className="md:hidden">{days[i]}</span>
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const workout = getWorkoutForDate(cloneDay);
        const isToday = isSameDay(cloneDay, new Date());
        const isSelected = isSameDay(cloneDay, selectedDate);
        const isCurrentMonth = isSameMonth(cloneDay, monthStart);

        days.push(
          <div
            key={day.toString()}
            className={cn(
               "relative h-16 md:h-32 p-1.5 md:p-2 border border-zinc-900/50 cursor-pointer transition-all duration-300 overflow-hidden group active:bg-gold-500/10",
               !isCurrentMonth ? "opacity-10 bg-black pointer-events-none" : "bg-zinc-900/20 hover:bg-zinc-800/40",
               isSelected ? "border-gold-500 bg-gold-500/5 z-0" : ""
            )}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <div className="flex justify-between items-start">
               <span className={cn(
                 "text-[10px] md:text-xs font-heading font-black italic",
                 isSelected ? "text-gold-500" : "text-white/40",
                 isToday ? "text-white bg-gold-500 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center rounded-full -m-1" : ""
               )}>
                 {format(day, "d")}
               </span>
               {isCurrentMonth && workout.type !== 'Recovery' && (
                 <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-gold-500 group-hover:animate-ping" />
               )}
            </div>
            
            {isCurrentMonth && (
              <div className="mt-1 md:mt-2 hidden sm:block">
                 <p className={cn(
                   "text-[8px] md:text-[9px] uppercase font-bold tracking-tighter truncate leading-none mb-1",
                   isSelected ? "text-gold-500" : "text-white/30"
                 )}>
                   {workout?.title}
                 </p>
                 <div className="flex gap-1">
                    {workout?.icon && (
                      <workout.icon size={10} className="text-gold-500/50" />
                    )}
                 </div>
              </div>
            )}

            {/* Selection indicator mobile optimized */}
            <AnimatePresence>
               {isSelected && (
                 <motion.div 
                   layoutId="active-date-border"
                   className="absolute inset-0 border-2 border-gold-500 pointer-events-none rounded-sm"
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                 />
               )}
            </AnimatePresence>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="border border-zinc-900 rounded-3xl overflow-hidden bg-zinc-950/50 shadow-2xl">{rows}</div>;
  };

  const activeWorkout = getWorkoutForDate(selectedDate);

  return (
    <section id="planner" className="section-padding bg-black relative">
       <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none" />
       
       <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
             subtitle="Dynamic Planner" 
             title="Daily Targets" 
             className="mb-10 md:mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
             {/* Calendar Column */}
             <div className="lg:col-span-8 order-2 lg:order-1">
                {renderHeader()}
                {renderDays()}
                {renderCells()}
                <div className="mt-6 flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest text-white/30 italic justify-center lg:justify-start">
                   <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-gold-500" /> Workout Day</div>
                   <div className="flex items-center gap-2"><div className="w-2 h-2 border border-zinc-800 bg-black rounded-full" /> Rest Day</div>
                   <div className="flex items-center gap-2 font-black text-white italic">Tap date to view details</div>
                </div>
             </div>

             {/* Workout Details Card - Optimized for Mobile Bottom Reading */}
             <div className="lg:col-span-4 self-start order-1 lg:order-2">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={selectedDate.toString()}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.98 }}
                   transition={{ duration: 0.3 }}
                   className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8 relative overflow-hidden group"
                 >
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/5 blur-3xl rounded-full" />
                    
                    <div className="flex items-center gap-3 mb-6 text-gold-500 font-black uppercase tracking-widest text-[10px] italic">
                       <CheckCircle size={14} /> Plan Overview
                    </div>

                    <h4 className="text-white font-heading font-black italic tracking-tighter text-2xl md:text-3xl uppercase leading-none mb-2">
                      {format(selectedDate, "EEEE, MMM do")}
                    </h4>
                    
                    <div className="flex gap-4 items-center mb-6">
                       <span className="text-gold-500/70 font-black italic text-xs uppercase tracking-widest">{activeWorkout.type} Program</span>
                       <div className="h-1 w-1 rounded-full bg-zinc-700" />
                       <span className="text-white/30 text-[10px] font-black uppercase italic tracking-widest">Phase 1</span>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5 md:p-6 mb-6 group hover:border-gold-500/30 transition-all">
                       <div className="flex gap-4 items-center mb-4">
                          <div className="w-12 h-12 flex-shrink-0 bg-gold-500 flex items-center justify-center rounded-xl shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform">
                             <activeWorkout.icon className="text-black" />
                          </div>
                          <div className="min-w-0">
                             <h5 className="text-white font-heading font-black uppercase text-lg md:text-xl italic leading-none truncate">{activeWorkout.title}</h5>
                             <span className="text-[10px] uppercase font-black tracking-widest text-white/40 italic">Main Activity</span>
                          </div>
                       </div>
                       <p className="text-white/50 text-[11px] sm:text-xs italic leading-relaxed mb-6">
                          {activeWorkout.desc}
                       </p>
                       
                       <div className="grid grid-cols-2 gap-4 border-t border-zinc-800 pt-6">
                          <div className="flex flex-col gap-1">
                             <span className="text-[10px] uppercase font-black tracking-widest text-white/30 block">Duration</span>
                             <div className="flex items-center gap-2 text-white">
                                <Clock size={14} className="text-gold-500" /> <span className="text-xs font-black font-heading italic">{activeWorkout.duration}</span>
                             </div>
                          </div>
                          <div className="flex flex-col gap-1">
                             <span className="text-[10px] uppercase font-black tracking-widest text-white/30 block">Intensity</span>
                             <div className="flex items-center gap-2 text-white">
                                <Zap size={14} className="text-gold-500" /> <span className="text-xs font-black font-heading italic">{activeWorkout.intensity || 'Active Recovery'}</span>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                       <div className="bg-zinc-950/50 border border-zinc-800 p-3 rounded-2xl flex items-center gap-3 active:bg-zinc-800">
                          <Droplets className="text-gold-500" size={16} />
                          <div>
                             <span className="text-white font-black italic text-[9px] block">Hydration</span>
                             <span className="text-[8px] uppercase text-white/30 italic">4.5 Liters</span>
                          </div>
                       </div>
                       <div className="bg-zinc-950/50 border border-zinc-800 p-3 rounded-2xl flex items-center gap-3 active:bg-zinc-800">
                          <Activity className="text-gold-500" size={16} />
                          <div>
                             <span className="text-white font-black italic text-[9px] block">Stretching</span>
                             <span className="text-[8px] uppercase text-white/30 italic">10 min post</span>
                          </div>
                       </div>
                    </div>

                    <button className="w-full btn-primary group italic font-black text-sm">
                      Log Performance <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="mt-6 text-center text-white/20 text-[10px] font-black italic uppercase tracking-widest">
                       Verify intensity with your head coach.
                    </p>
                 </motion.div>
               </AnimatePresence>
             </div>
          </div>
       </div>
    </section>
  );
};
