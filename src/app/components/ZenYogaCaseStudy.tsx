import React from "react";
import { motion } from "framer-motion";
import { 
  X, 
  Activity,
  Heart,
  Play,
  Calendar,
  User,
  CheckCircle2, 
  AlertCircle, 
  XCircle,
  Coffee,
  Wind,
  Smile,
  MinusCircle,
  AlertOctagon
} from "lucide-react";

export const ZenYogaCaseStudy = ({ onClose }: { onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    className="fixed inset-0 z-[80] bg-white overflow-y-auto"
  >
    {/* Close Button */}
    <div className="fixed top-6 right-6 md:right-12 z-50">
      <button 
        onClick={onClose}
        className="bg-stone-800 text-white p-4 rounded-full shadow-lg hover:bg-stone-700 transition-colors"
      >
        <X size={24} />
      </button>
    </div>

    {/* Hero */}
    <div className="relative h-[60vh] w-full bg-stone-100 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <img 
          src="https://images.unsplash.com/photo-1758466872243-496929504a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHJldHJlYXQlMjBwZWFjZWZ1bCUyMHN0dWRpb3xlbnwxfHx8fDE3NzE1MDU3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Zen Yoga App" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="relative z-10 text-center text-stone-900 px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Zen Yoga</h1>
        <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto text-stone-700">
          "Find Your Balance, Anywhere"
        </p>
      </div>
    </div>

    {/* Content Container */}
    <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-24">
      
      {/* Brief */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900">The Vision</h2>
        <div className="text-lg text-stone-600 leading-relaxed space-y-6">
          <p>
            In a fast-paced world, mental and physical well-being often take a backseat. Existing wellness apps can feel clinical or overwhelming with data, adding stress rather than reducing it.
          </p>
          <p>
            Zen Yoga was designed to be a digital sanctuary. We focused on calming aesthetics, intuitive navigation, and personalized journeys that adapt to the user's mood and energy levels.
          </p>
          <div className="bg-stone-50 p-8 border-l-4 border-stone-400 rounded-r-xl">
            <p className="italic text-stone-800 font-medium">
              "We believe technology should support your well-being, not demand your attention. Zen Yoga is about mindful connection, not mindless scrolling."
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Discovery Phase</h2>
        <p className="text-lg text-stone-600">
          We interviewed 30 individuals interested in mindfulness, from beginners to advanced practitioners.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-widest text-stone-400">Barriers to Practice</h3>
            <ul className="space-y-4">
              {[
                "Not knowing where to start",
                "Feeling intimidated by advanced poses",
                "Lack of time for full 60-minute classes",
                "Inconsistent routine due to busy schedules",
                "Wanting to focus on specific needs (e.g., back pain, anxiety)"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-2 h-2 mt-2 bg-stone-400 rounded-full flex-shrink-0"></span>
                  <span className="text-stone-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-stone-50 rounded-xl p-8 shadow-sm border border-stone-200">
            <h4 className="font-bold text-lg mb-6 text-stone-800">User Needs</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2 text-stone-600">
                  <span>Short Sessions (10-20 min)</span>
                  <span className="font-bold text-stone-900">85%</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-2">
                  <div className="bg-stone-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 text-stone-600">
                  <span>Mood-Based Recommendations</span>
                  <span className="font-bold text-stone-900">78%</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-2">
                  <div className="bg-stone-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 text-stone-600">
                  <span>Progress Tracking</span>
                  <span className="font-bold text-stone-900">60%</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-2">
                  <div className="bg-stone-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Define - Personas */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900">The Practitioner</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-stone-600">
                <Coffee size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">The Busy Parent</h3>
                <p className="text-stone-500 text-sm">Emma, 35, Mother of 2</p>
              </div>
            </div>
            <p className="text-stone-600 mb-6 italic">"I only have 15 minutes before the kids wake up. I need something to center me quickly."</p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase bg-stone-100 px-2 py-1 rounded text-stone-600">Goal</span>
                <span className="text-sm text-stone-600">Stress relief, quick routines</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Activity size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900">The Athlete</h3>
                <p className="text-stone-500 text-sm">Mark, 28, Runner</p>
              </div>
            </div>
            <p className="text-stone-600 mb-6 italic">"I need yoga for recovery and flexibility. I want to target my hamstrings and hips."</p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase bg-stone-100 px-2 py-1 rounded text-stone-600">Goal</span>
                <span className="text-sm text-stone-600">Physical recovery, injury prevention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideate - Sitemap */}
      <section className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900">The Flow</h2>
        <p className="text-lg text-stone-600 leading-relaxed">
          The app opens with a daily check-in, asking "How do you feel?" to curate the perfect session for that moment.
        </p>
        
        <div className="bg-stone-50 border border-stone-200 p-8 md:p-12 rounded-2xl overflow-x-auto">
           <div className="min-w-[800px] flex flex-col items-center">
              
              {/* Level 1: Check-in */}
              <div className="relative z-10 mb-12">
                 <div className="bg-stone-800 text-white px-8 py-4 rounded-xl shadow-lg font-bold text-lg tracking-wide transform transition-transform hover:scale-105 cursor-default">
                    Daily Check-In
                 </div>
                 {/* Line Down */}
                 <div className="absolute left-1/2 -translate-x-1/2 top-full h-8 w-0.5 bg-stone-300"></div>
              </div>

              {/* Level 2: Branching */}
              <div className="relative w-full max-w-4xl">
                 {/* Horizontal Connector Line */}
                 <div className="absolute top-0 left-[12.5%] right-[12.5%] h-0.5 bg-stone-300 -translate-y-4"></div>
                 {/* Center Vertical Connector from Parent */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-stone-300 -translate-y-4"></div>

                 <div className="grid grid-cols-4 gap-4">
                    {/* Node 1 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-stone-300"></div>
                       <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-stone-100 text-stone-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Smile size={24} />
                          </div>
                          <div className="font-bold text-stone-900 mb-3 text-lg">For You</div>
                          <p className="text-xs text-stone-500">Personalized Mix</p>
                       </div>
                    </div>

                    {/* Node 2 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-stone-300"></div>
                       <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-stone-100 text-stone-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Play size={24} />
                          </div>
                          <div className="font-bold text-stone-900 mb-3 text-lg">Library</div>
                          <p className="text-xs text-stone-500">Classes, Collections</p>
                       </div>
                    </div>

                    {/* Node 3 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-stone-300"></div>
                       <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-stone-100 text-stone-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Wind size={24} />
                          </div>
                          <div className="font-bold text-stone-900 mb-3 text-lg">Breathe</div>
                          <p className="text-xs text-stone-500">Meditation Timer</p>
                       </div>
                    </div>

                    {/* Node 4 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-stone-300"></div>
                       <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                           <div className="w-12 h-12 bg-stone-100 text-stone-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <User size={24} />
                          </div>
                          <div className="font-bold text-stone-900 mb-3 text-lg">Journey</div>
                          <p className="text-xs text-stone-500">Stats, Badges</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Solution */}
      <section className="space-y-8">
        <div className="bg-stone-200 text-stone-900 p-8 md:p-12 rounded-3xl border border-stone-300">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-stone-900">The Solution</h2>
              <p className="text-stone-700 leading-relaxed text-lg">
                A minimalist, earth-toned interface that feels like a breath of fresh air. 
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl overflow-hidden mb-12 border border-stone-300 shadow-2xl">
             <img src="https://images.unsplash.com/photo-1667199021925-5778681d0406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwYXBwJTIweW9nYSUyMG1vYmlsZSUyMHNjcmVlbiUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MTUwNjE1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Zen Yoga Mobile Interfaces" className="w-full h-auto object-contain" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/60 p-6 rounded-2xl border border-white/50">
              <div className="w-12 h-12 bg-stone-900/10 rounded-full flex items-center justify-center text-stone-700 mb-4">
                <Smile size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Mood Check-In</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                A simple slider to rate your physical and mental state, which instantly filters the class library.
              </p>
            </div>

            <div className="bg-white/60 p-6 rounded-2xl border border-white/50">
              <div className="w-12 h-12 bg-stone-900/10 rounded-full flex items-center justify-center text-stone-700 mb-4">
                <Play size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Smart Player</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Video player with distraction-free mode and adjustable audio mixing for voice and ambient music.
              </p>
            </div>

            <div className="bg-white/60 p-6 rounded-2xl border border-white/50">
              <div className="w-12 h-12 bg-stone-900/10 rounded-full flex items-center justify-center text-stone-700 mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Mindful Streaks</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Encouraging consistency without the pressure. "Rest days" are celebrated as part of the process.
              </p>
            </div>
          </div>

          {/* Interface Details */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-serif text-stone-900 mb-3">Refined Interfaces</h3>
              <p className="text-stone-600 max-w-2xl mx-auto">Designed for clarity and calm, ensuring the UI never distracts from the practice.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Screen 1 */}
              <div className="space-y-4 group">
                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[9/19] bg-stone-100 relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <img 
                    src="https://images.unsplash.com/photo-1702561474109-17616a842a5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwYXBwJTIwbW9iaWxlJTIwaW50ZXJmYWNlJTIwdWklMjBzY3JlZW58ZW58MXx8fHwxNzcxNTczMDc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Home Dashboard" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent pointer-events-none"></div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-stone-900">Personalized Home</h4>
                  <p className="text-sm text-stone-500 mt-1">Daily recommendations based on your check-in.</p>
                </div>
              </div>

              {/* Screen 2 */}
              <div className="space-y-4 group">
                  <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[9/19] bg-stone-100 relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <img 
                    src="https://images.unsplash.com/photo-1522844123782-9547a63eb28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwd29ya291dCUyMGFwcCUyMHNjcmVlbnxlbnwxfHx8fDE3NzE1NzMwODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Class Interface" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent pointer-events-none"></div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-stone-900">Immersive Classes</h4>
                  <p className="text-sm text-stone-500 mt-1">Distraction-free viewing with clear instruction.</p>
                </div>
              </div>

              {/* Screen 3 */}
              <div className="space-y-4 group">
                  <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[9/19] bg-stone-100 relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  <img 
                    src="https://images.unsplash.com/photo-1719168773674-1bafa68bf9ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwYXBwJTIwdWklMjBzY3JlZW4lMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzcxNTczMDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                    alt="Progress & Stats" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent pointer-events-none"></div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-stone-900">Mindful Journey</h4>
                  <p className="text-sm text-stone-500 mt-1">Tracking streaks and meditation minutes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Test */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Design Test</h2>
        <p className="text-lg text-stone-600 leading-relaxed">
          We observed users navigating the "Mood Check-In" flow to find a relevant class.
        </p>

        {/* Legend */}
        <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm mb-8">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-stone-500">Legend</h4>
            <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-sm text-stone-600">The task was solved correctly without problems</span>
                </div>
                <div className="flex items-start gap-3">
                    <MinusCircle className="text-blue-600 flex-shrink-0" size={20} />
                    <span className="text-sm text-stone-600">Problems occurred which delayed the test participant in carrying out the task.</span>
                </div>
                <div className="flex items-start gap-3">
                    <AlertCircle className="text-orange-500 flex-shrink-0" size={20} />
                    <span className="text-sm text-stone-600">The test participant encountered considerable problems but eventually succeeded in completing the task correctly.</span>
                </div>
                <div className="flex items-start gap-3">
                    <XCircle className="text-red-500 flex-shrink-0" size={20} />
                    <span className="text-sm text-stone-600">The test participant was unable to complete the task or arrived at a result that deviated significantly from the correct result.</span>
                </div>
                 <div className="flex items-start gap-3">
                    <AlertOctagon className="text-red-600 flex-shrink-0" size={20} />
                    <span className="text-sm text-stone-600">The test participant arrived at a result that posed an existential threat to the test participant or other human beings.</span>
                </div>
            </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-stone-200">
             <table className="w-full min-w-[800px] text-left border-collapse">
               <thead>
                 <tr className="bg-stone-800 text-white">
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16">Task</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest">Details</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P1</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P2</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P3</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P4</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P5</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-stone-100">
                  <tr className="hover:bg-stone-50/50">
                     <td className="p-4 font-bold text-stone-900">1</td>
                     <td className="p-4 text-stone-600">Complete Mood Check-In</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                     <td className="p-4 font-bold text-stone-900">2</td>
                     <td className="p-4 text-stone-600">Start a Class</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                  </tr>
                  <tr className="hover:bg-stone-50/50">
                     <td className="p-4 font-bold text-stone-900">3</td>
                     <td className="p-4 text-stone-600">Set a Reminder</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><AlertCircle className="text-orange-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                  </tr>
               </tbody>
             </table>
        </div>
      </section>

    </div>
  </motion.div>
);
