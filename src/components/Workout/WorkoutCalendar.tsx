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

  // Sample data generator for demonstration
  const getWorkoutForDate = (date: Date) => {
    const day = getDay(date); // 0 (Sun) to 6 (Sat)
    
    // Simple mapping for demo
    const workouts: Record<number, any> = {
      0: { title: 'Recovery & Mobility', type: 'Rest', icon: Coffee, desc: 'Light stretching and foam rolling', duration: '30 min' },
      1: { title: 'Heavy Chest & Triceps', type: 'Strength', icon: Dumbbell, desc: 'Flat/Incline bench, Cable flys', duration: '75 min', intensity: 'High' },
      2: { title: 'Back & Bicep Power', type: 'Strength', icon: Dumbbell, desc: 'Deadlifts, Rowings, Curls', duration: '75 min', intensity: 'High' },
      3: { title: 'Leg Day Annihilation', type: 'Strength', icon: Dumbbell, desc: 'Squats, Leg Press, Extensions', duration: '90 min', intensity: 'Extreme' },
      4: { title: 'Shoulder & Core Focus', type: 'Hypertrophy', icon: Activity, desc: 'OHP, Lateral raises, Planks', duration: '60 min', intensity: 'Medium' },
      5: { title: 'Full Body Functional', type: 'Conditioning', icon: Flame, desc: 'Sled push, Battle ropes, HIIT', duration: '60 min', intensity: 'High' },
      6: { title: 'Dynamic Cardio', type: 'Cardio', icon: Zap, desc: 'Treadmill sprints, Jump ropes', duration: '45 min', intensity: 'Medium' },
    };

    return workouts[day];
  };

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const renderHeader = () => {
    return (
      <div className="flex items-center justify-between mb-8 bg-zinc-900/50 p-6 border border-zinc-800 rounded-2xl">
        <div className="flex items-center gap-4">
          <CalendarIcon className="text-gold-500" />
          <h3 className="text-2xl font-heading font-black text-white uppercase italic tracking-tighter">
            {format(currentMonth, 'MMMM yyyy')}
          </h3>
        </div>
        <div className="flex gap-2">
          <button onClick={prevMonth} className="p-3 bg-zinc-800 hover:bg-gold-500 hover:text-black rounded-lg transition-colors border border-zinc-700">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextMonth} className="p-3 bg-zinc-800 hover:bg-gold-500 hover:text-black rounded-lg transition-colors border border-zinc-700">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="grid grid-cols-7 mb-4">
        {days.map((day, i) => (
          <div key={i} className="text-center font-bold uppercase text-[10px] tracking-widest text-white/30 italic">
            {day}
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
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        const workout = getWorkoutForDate(cloneDay);
        const isToday = isSameDay(cloneDay, new Date());
        const isSelected = isSameDay(cloneDay, selectedDate);
        const isCurrentMonth = isSameMonth(cloneDay, monthStart);

        days.push(
          <div
            key={day.toString()}
            className={cn(
               "relative h-24 md:h-32 p-2 border border-zinc-900/50 cursor-pointer transition-all duration-300 overflow-hidden group",
               !isCurrentMonth ? "opacity-10 bg-black" : "bg-zinc-900/20 hover:bg-zinc-800/40",
               isSelected ? "border-gold-500 bg-gold-500/5 z-10" : ""
            )}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <div className="flex justify-between items-start">
               <span className={cn(
                 "text-xs font-heading font-black italic",
                 isSelected ? "text-gold-500" : "text-white/40",
                 isToday ? "text-white bg-gold-500 w-6 h-6 flex items-center justify-center rounded-full -m-1" : ""
               )}>
                 {formattedDate}
               </span>
               {isCurrentMonth && workout.type !== 'Rest' && (
                 <div className="w-1.5 h-1.5 rounded-full bg-gold-500 group-hover:animate-ping" />
               )}
            </div>
            
            {isCurrentMonth && (
              <div className="mt-2 hidden md:block">
                 <p className={cn(
                   "text-[9px] uppercase font-bold tracking-tighter truncate leading-none mb-1",
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

            {/* Selection indicator border */}
            <AnimatePresence>
               {isSelected && (
                 <motion.div 
                   layoutId="active-date-border"
                   className="absolute inset-0 border-2 border-gold-500 pointer-events-none"
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
    return <div className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-950 shadow-2xl">{rows}</div>;
  };

  const activeWorkout = getWorkoutForDate(selectedDate);

  return (
    <section id="planner" className="section-padding bg-black relative">
       <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-950 to-transparent pointer-events-none" />
       
       <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
             subtitle="Interactive Dashboard" 
             title="Date-wise Workout Planner" 
             className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
             {/* Calendar Column */}
             <div className="lg:col-span-8">
                {renderHeader()}
                {renderDays()}
                {renderCells()}
             </div>

             {/* Workout Details Column */}
             <div className="lg:col-span-4 self-start">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={selectedDate.toString()}
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, scale: 0.95 }}
                   transition={{ duration: 0.4 }}
                   className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden"
                 >
                    {/* Glassmorphism gradient */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/10 blur-3xl rounded-full" />
                    
                    <div className="flex items-center gap-3 mb-6 text-gold-500 font-bold uppercase tracking-widest text-[10px] italic">
                       <CheckCircle size={14} /> Selected Plan
                    </div>

                    <h4 className="text-white font-heading font-black italic tracking-tighter text-3xl uppercase leading-none mb-2">
                      {format(selectedDate, "EEEE, MMM do")}
                    </h4>
                    
                    <div className="flex gap-4 items-center mb-8">
                       <span className="text-gold-500/50 font-bold italic text-sm">{activeWorkout.type} Program</span>
                       <div className="h-1 w-1 rounded-full bg-zinc-700" />
                       <span className="text-white/30 text-xs italic">Week 1 of 4</span>
                    </div>

                    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 mb-8 group hover:border-gold-500/30 transition-colors">
                       <div className="flex gap-4 items-center mb-4">
                          <div className="w-12 h-12 bg-gold-500 flex items-center justify-center rounded-xl shadow-lg shadow-gold-500/20 group-hover:scale-110 transition-transform">
                             <activeWorkout.icon className="text-black" />
                          </div>
                          <div>
                             <h5 className="text-white font-heading font-black uppercase text-xl italic leading-none">{activeWorkout.title}</h5>
                             <span className="text-[10px] uppercase font-bold tracking-widest text-white/40 italic">Focus Area</span>
                          </div>
                       </div>
                       <p className="text-white/60 text-xs italic leading-relaxed mb-6">
                          {activeWorkout.desc}
                       </p>
                       
                       <div className="grid grid-cols-2 gap-4 border-t border-zinc-800 pt-6">
                          <div>
                             <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 block mb-1">Duration</span>
                             <div className="flex items-center gap-2 text-white">
                                <Clock size={14} className="text-gold-500" /> <span className="text-xs font-bold">{activeWorkout.duration}</span>
                             </div>
                          </div>
                          <div>
                             <span className="text-[10px] uppercase font-bold tracking-widest text-white/30 block mb-1">Intensity</span>
                             <div className="flex items-center gap-2 text-white">
                                <Zap size={14} className="text-gold-500" /> <span className="text-xs font-bold">{activeWorkout.intensity || 'Active Recovery'}</span>
                             </div>
                          </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-8">
                       <div className="bg-gold-500/5 border border-gold-500/10 p-4 rounded-xl flex items-center gap-3 group hover:border-gold-500/40 transition-colors">
                          <Droplets className="text-gold-500" size={18} />
                          <div>
                             <span className="text-white font-bold text-xs block leading-none">Hydration</span>
                             <span className="text-[9px] uppercase text-white/40 italic">4 Liters Daily</span>
                          </div>
                       </div>
                       <div className="bg-gold-500/5 border border-gold-500/10 p-4 rounded-xl flex items-center gap-3 group hover:border-gold-500/40 transition-colors">
                          <Activity className="text-gold-500" size={18} />
                          <div>
                             <span className="text-white font-bold text-xs block leading-none">Cooldown</span>
                             <span className="text-[9px] uppercase text-white/40 italic">10 min Stretch</span>
                          </div>
                       </div>
                    </div>

                    <button className="w-full btn-primary group">
                      Log Performance <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <p className="mt-6 text-center text-white/30 text-[9px] italic uppercase tracking-widest font-bold">
                       Always consult your trainer before increasing weights.
                    </p>
                 </motion.div>
               </AnimatePresence>
             </div>
          </div>
       </div>
    </section>
  );
};
