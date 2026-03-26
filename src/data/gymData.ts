export const gymData = {
  business: {
    name: "Gold Gym Kumbakonam",
    brand: "Gold Gym",
    location: "Kumbakonam",
    address: "Kumbakonam, Tamil Nadu - 612001",
    fullAddress: "123, Luxury Fitness Plaza, Near New Railway Station, Kumbakonam, Tamil Nadu - 612001",
    phone: "+91 98765 43210",
    email: "info@goldgymkumbakonam.com",
    whatsapp: "919876543210",
    googleMaps: "https://goo.gl/maps/123456789",
    timings: {
      morning: "05:00 AM - 10:00 AM",
      evening: "05:00 PM - 10:00 PM",
      sunday: "Closed",
    },
    social: {
      facebook: "https://facebook.com/goldgymkumbakonam",
      instagram: "https://instagram.com/goldgymkumbakonam",
      youtube: "https://youtube.com/@goldgymkumbakonam",
    }
  },
  stats: [
    { label: "Members Trained", value: "500+" },
    { label: "Transformation Programs", value: "120+" },
    { label: "Certified Trainers", value: "10+" },
    { label: "Years of Legacy", value: "8+" },
  ],
  features: [
    { 
      title: "Certified Trainers", 
      desc: "Our trainers are certified experts focused on strength development and transformation.",
      icon: "Award" 
    },
    { 
      title: "Modern Equipment", 
      desc: "State-of-the-art machines and free weights for all training levels.",
      icon: "Dumbbell" 
    },
    { 
      title: "Transformation Support", 
      desc: "Comprehensive guidance for fat loss, muscle gain, and overall fitness.",
      icon: "Activity" 
    },
    { 
      title: "Friendly Training Environment", 
      desc: "A motivating and clean space to help you stay focused on your goals.",
      icon: "Users" 
    }
  ],
  programs: [
    {
      title: "Weight Training",
      desc: "Build muscle and strength with our structured weight lifting programs.",
      icon: "Dumbbell"
    },
    {
      title: "Cardio Training",
      desc: "Improve cardiovascular health and burn fat with high-intensity cardio.",
      icon: "Flame"
    },
    {
      title: "Personal Training",
      desc: "One-on-one coaching tailored to your specific goals and fitness level.",
      icon: "UserCheck"
    },
    {
      title: "Body Transformation",
      desc: "Intensive 90-day programs for significant changes in body composition.",
      icon: "TrendingUp"
    }
  ],
  trainers: [
    {
      name: "Suresh",
      role: "Certified Head Trainer",
      bio: "Certified fitness trainer focused on strength development, disciplined coaching, and transformation-based results.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=687&auto=format&fit=crop"
    },
    {
      name: "Arun",
      role: "Pro Bodybuilder & Coach",
      bio: "Specialist in muscle hypertrophy and contest preparation with 10+ years of experience.",
      image: "https://images.unsplash.com/photo-1549476464-37392f719918?q=80&w=687&auto=format&fit=crop"
    },
    {
      name: "Vikram",
      role: "Functional Fitness Expert",
      bio: "Master of HIIT and functional mobility training to help you move better and faster.",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=687&auto=format&fit=crop"
    }
  ],
  plans: [
    {
      name: "Monthly Flex",
      price: "1,500",
      duration: "/ Month",
      features: [
        "Full Gym Floor Access",
        "Free Fitness Consultation",
        "Standard Equipment Access",
        "Locker Room Usage",
        "Basic Mobile App Access"
      ]
    },
    {
      name: "Quarterly Pro",
      price: "4,000",
      duration: "/ 3 Months",
      recommended: true,
      features: [
        "Everything in Monthly Plan",
        "Body Bio-data Tracking",
        "Nutritional Guidance Sheet",
        "Cardio Equipment Unlimited",
        "Personal Training Sample (1 Session)"
      ]
    },
    {
      name: "Elite Coaching",
      price: "Custom",
      duration: "/ Personalized",
      features: [
        "Dedicated Personal Coach",
        "Customized Macro Diet Plan",
        "Daily Progress Review",
        "1:1 Training Sessions",
        "VIP Treatment & Early Entry"
      ]
    }
  ],
  transformations: [
    { name: "John Doe", result: "Lost 15kg in 3 Months", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?q=80&w=600&auto=format&fit=crop" },
    { name: "Sarah Smith", result: "Built Lean Muscle", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop" },
    { name: "Mike Ross", result: "Improved Mobility", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop" },
    { name: "Emily Blunt", result: "Body Shaping", image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=600&auto=format&fit=crop" }
  ],
  faqs: [
    {
      q: "Do you have personal training?",
      a: "Yes, we offer one-on-one personal training sessions with certified coaches who tailor programs to your specific goals."
    },
    {
      q: "What are the gym timings?",
      a: "We are open from 05:00 AM to 10:00 AM in the morning and 05:00 PM to 10:00 PM in the evening from Monday to Saturday."
    },
    {
      q: "Are beginner-friendly programs available?",
      a: "Absolutely! We have dedicated beginner programs that focus on teaching proper form and building a strong foundation."
    },
    {
      q: "Do you offer weight loss programs?",
      a: "Yes, our transformation programs are specifically designed for efficient fat loss and body composition improvement."
    }
  ],
  workoutSchedule: {
    tabs: ["Muscle Gain", "Fat Loss", "General Fitness"],
    levels: ["Beginner", "Intermediate", "Advanced"],
    muscleGain: {
      Beginner: {
        Monday: {
          workout: "Chest + Triceps",
          exercises: [
            { name: "Bench Press", sets: "4", reps: "10-12", rest: "90s" },
            { name: "Incline DB Press", sets: "3", reps: "12", rest: "60s" },
            { name: "Cable Fly", sets: "3", reps: "15", rest: "45s" },
            { name: "Push-ups", sets: "3", reps: "Failure", rest: "60s" },
            { name: "Tricep Pushdown", sets: "3", reps: "12", rest: "60s" }
          ],
          warmUp: "Dynamic stretches, push-ups 2x15",
          trainerNote: "Focus on controlled movements and slow eccentric phase."
        },
        Tuesday: {
          workout: "Back + Biceps",
          exercises: [
            { name: "Lat Pulldowns", sets: "4", reps: "10-12", rest: "90s" },
            { name: "Seated Cable Row", sets: "3", reps: "12", rest: "60s" },
            { name: "DB Rows", sets: "3", reps: "12", rest: "60s" },
            { name: "Barbell Curls", sets: "3", reps: "10", rest: "60s" },
            { name: "Hammer Curls", sets: "3", reps: "12", rest: "60s" }
          ],
          warmUp: "Pull-ups (assisted if needed), arm circles",
          trainerNote: "Don't swing. Pull with your elbows, not your hands."
        },
        Wednesday: { workout: "Rest / Recovery", isRest: true },
        Thursday: {
          workout: "Legs",
          exercises: [
            { name: "Squats", sets: "4", reps: "10", rest: "120s" },
            { name: "Leg Press", sets: "3", reps: "12", rest: "90s" },
            { name: "Leg Extensions", sets: "3", reps: "15", rest: "60s" },
            { name: "Leg Curls", sets: "3", reps: "15", rest: "60s" },
            { name: "Calf Raises", sets: "4", reps: "20", rest: "45s" }
          ],
          warmUp: "Bodyweight squats, leg swings",
          trainerNote: "Keep your core tight and heels planted on the floor."
        },
        Friday: {
          workout: "Shoulders + Core",
          exercises: [
            { name: "Overhead DB Press", sets: "4", reps: "10", rest: "90s" },
            { name: "Lateral Raises", sets: "3", reps: "15", rest: "60s" },
            { name: "Front Raises", sets: "3", reps: "12", rest: "60s" },
            { name: "Plank", sets: "3", reps: "60s", rest: "60s" },
            { name: "Leg Raises", sets: "3", reps: "20", rest: "45s" }
          ],
          warmUp: "Shoulder rotations, cat-cow",
          trainerNote: "Avoid shrugging. Focus on isolating the deltoid heads."
        },
        Saturday: {
          workout: "Full Body / Cardio",
          exercises: [
            { name: "Deadlifts", sets: "3", reps: "8-10", rest: "120s" },
            { name: "Treadmill Run", sets: "10 min", reps: "Steady", rest: "-" },
            { name: "Bodyweight Circuit", sets: "3 Rounds", reps: "All-out", rest: "90s" }
          ],
          warmUp: "Jump ropes 5 mins",
          trainerNote: "Keep it light but keep the intensity high for cardio benefits."
        },
        Sunday: { workout: "Rest / Recovery", isRest: true }
      }
    }
  }
};
