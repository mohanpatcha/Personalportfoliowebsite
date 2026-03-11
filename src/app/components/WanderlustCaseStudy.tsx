import React from "react";
import { motion } from "framer-motion";
import { 
  X, 
  Map, 
  Compass, 
  Calendar, 
  Users, 
  Plane, 
  Camera, 
  Star,
  CheckCircle2, 
  AlertCircle, 
  XCircle,
  Tent,
  MinusCircle,
  AlertOctagon
} from "lucide-react";

export const WanderlustCaseStudy = ({ onClose }: { onClose: () => void }) => (
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
        className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-neutral-800 transition-colors"
      >
        <X size={24} />
      </button>
    </div>

    {/* Hero */}
    <div className="relative h-[60vh] w-full bg-orange-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1691647432227-0c084e0ad818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHAlMjBhZHZlbnR1cmUlMjBtb3VudGFpbnMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcxNTA1NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Wanderlust App" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Wanderlust</h1>
        <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto text-orange-100">
          "Plan Less, Experience More"
        </p>
      </div>
    </div>

    {/* Content Container */}
    <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-24">
      
      {/* Brief */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">The Problem</h2>
        <div className="text-lg text-neutral-600 leading-relaxed space-y-6">
          <p>
            Travel planning is fragmented. Travelers currently toggle between 5-7 different apps to book flights, find accommodations, read reviews, and build itineraries. This leads to information overload and decision fatigue.
          </p>
          <p>
            Wanderlust consolidates the entire journey—from inspiration to booking to on-trip navigation—into one cohesive, visually stunning platform.
          </p>
          <div className="bg-orange-50 p-8 border-l-4 border-orange-500 rounded-r-xl">
            <p className="italic text-orange-900 font-medium">
              "I wanted to create an app that feels like a travel companion, not just a booking engine. It should inspire you to explore."
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">User Research</h2>
        <p className="text-lg text-neutral-600">
          We conducted diary studies with 15 frequent travelers over a 3-month period to track their planning behaviors.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-widest text-orange-400">Pain Points</h3>
            <ul className="space-y-4">
              {[
                "Disorganized itineraries spread across emails and notes",
                "Difficulty coordinating with group members",
                "Lack of authentic, 'off-the-beaten-path' recommendations",
                "Fear of missing out on local experiences",
                "Budget tracking is manual and tedious"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-neutral-50 rounded-xl p-8 shadow-sm border border-neutral-200">
            <h4 className="font-bold text-lg mb-6 text-neutral-800">Top Desired Features</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2 text-neutral-600">
                  <span>Collaborative Itinerary</span>
                  <span className="font-bold text-neutral-900">94%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: "94%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 text-neutral-600">
                  <span>Offline Maps</span>
                  <span className="font-bold text-neutral-900">82%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: "82%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 text-neutral-600">
                  <span>Local Guide Connect</span>
                  <span className="font-bold text-neutral-900">68%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: "68%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Define - Personas */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Traveler Personas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                <Compass size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">The Explorer</h3>
                <p className="text-neutral-500 text-sm">Liam, 32, Photographer</p>
              </div>
            </div>
            <p className="text-neutral-600 mb-6 italic">"I don't want to see what everyone else sees. I want to find the hidden gems."</p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase bg-neutral-100 px-2 py-1 rounded text-neutral-600">Needs</span>
                <span className="text-sm text-neutral-600">Visual inspiration, location scouting</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Users size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">The Organizer</h3>
                <p className="text-neutral-500 text-sm">Rachel, 29, Project Manager</p>
              </div>
            </div>
            <p className="text-neutral-600 mb-6 italic">"I plan trips for my whole friend group. I need a way to keep everyone on the same page."</p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase bg-neutral-100 px-2 py-1 rounded text-neutral-600">Needs</span>
                <span className="text-sm text-neutral-600">Collaboration tools, expense splitting</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideate - Sitemap */}
      <section className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Information Architecture</h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          The app is structured around the "Trip" concept, where all related data points (flights, stays, activities) live under one umbrella.
        </p>
        
        <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-12 rounded-2xl overflow-x-auto">
           <div className="min-w-[800px] flex flex-col items-center">
              
              {/* Level 1: Home */}
              <div className="relative z-10 mb-12">
                 <div className="bg-orange-600 text-white px-8 py-4 rounded-xl shadow-lg font-bold text-lg tracking-wide transform transition-transform hover:scale-105 cursor-default">
                    Home / Feed
                 </div>
                 {/* Line Down */}
                 <div className="absolute left-1/2 -translate-x-1/2 top-full h-8 w-0.5 bg-neutral-300"></div>
              </div>

              {/* Level 2: Branching */}
              <div className="relative w-full max-w-4xl">
                 {/* Horizontal Connector Line */}
                 <div className="absolute top-0 left-[12.5%] right-[12.5%] h-0.5 bg-neutral-300 -translate-y-4"></div>
                 {/* Center Vertical Connector from Parent */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-neutral-300 -translate-y-4"></div>

                 <div className="grid grid-cols-4 gap-4">
                    {/* Node 1 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-neutral-300"></div>
                       <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Compass size={24} />
                          </div>
                          <div className="font-bold text-neutral-900 mb-3 text-lg">Explore</div>
                          <p className="text-xs text-neutral-500">Guides, Stories, Map</p>
                       </div>
                    </div>

                    {/* Node 2 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-neutral-300"></div>
                       <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Plane size={24} />
                          </div>
                          <div className="font-bold text-neutral-900 mb-3 text-lg">Trips</div>
                          <p className="text-xs text-neutral-500">Upcoming, Past, Drafts</p>
                       </div>
                    </div>

                    {/* Node 3 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-neutral-300"></div>
                       <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Camera size={24} />
                          </div>
                          <div className="font-bold text-neutral-900 mb-3 text-lg">Capture</div>
                          <p className="text-xs text-neutral-500">Journal, Photos, Tips</p>
                       </div>
                    </div>

                    {/* Node 4 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-neutral-300"></div>
                       <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                           <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Star size={24} />
                          </div>
                          <div className="font-bold text-neutral-900 mb-3 text-lg">Saved</div>
                          <p className="text-xs text-neutral-500">Favorites, Wishlist</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Solution */}
      <section className="space-y-8">
        <div className="bg-orange-900 text-white p-8 md:p-12 rounded-3xl border border-orange-800">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">The Solution</h2>
              <p className="text-orange-200 leading-relaxed text-lg">
                A visually immersive interface that turns travel planning from a chore into a joy.
              </p>
            </div>
          </div>
          
          <div className="bg-neutral-900 rounded-3xl overflow-hidden mb-12 border border-orange-800 shadow-2xl">
             <img src="https://images.unsplash.com/photo-1745945847741-afc7ea2ff638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHAlMjBib29raW5nJTIwbW9iaWxlJTIwc2NyZWVuJTIwbW91bnRhaW5zfGVufDF8fHx8MTc3MTUwNjE1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Wanderlust Mobile Interfaces" className="w-full h-auto object-contain" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-200 mb-4">
                <Map size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Visual Itinerary</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Drag-and-drop interface to build daily plans on a map, automatically calculating travel times between stops.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-200 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Group Sync</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Real-time collaboration allows friends to vote on activities and split costs instantly within the app.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-200 mb-4">
                <Tent size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Curated Stays</h3>
              <p className="text-orange-100 text-sm leading-relaxed">
                Hand-picked accommodations that offer unique experiences, not just a bed to sleep in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Test */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Design Test</h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          We tested the itinerary builder with 5 groups planning real trips.
        </p>

        {/* Legend */}
        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm mb-8">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-neutral-500">Legend</h4>
            <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-sm text-neutral-600">The task was solved correctly without problems</span>
                </div>
                <div className="flex items-start gap-3">
                    <MinusCircle className="text-blue-600 flex-shrink-0" size={20} />
                    <span className="text-sm text-neutral-600">Problems occurred which delayed the test participant in carrying out the task.</span>
                </div>
                <div className="flex items-start gap-3">
                    <AlertCircle className="text-orange-500 flex-shrink-0" size={20} />
                    <span className="text-sm text-neutral-600">The test participant encountered considerable problems but eventually succeeded in completing the task correctly.</span>
                </div>
                <div className="flex items-start gap-3">
                    <XCircle className="text-red-500 flex-shrink-0" size={20} />
                    <span className="text-sm text-neutral-600">The test participant was unable to complete the task or arrived at a result that deviated significantly from the correct result.</span>
                </div>
                 <div className="flex items-start gap-3">
                    <AlertOctagon className="text-red-600 flex-shrink-0" size={20} />
                    <span className="text-sm text-neutral-600">The test participant arrived at a result that posed an existential threat to the test participant or other human beings.</span>
                </div>
            </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-neutral-200">
             <table className="w-full min-w-[800px] text-left border-collapse">
               <thead>
                 <tr className="bg-orange-900 text-white">
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16">Task</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest">Details</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P1</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P2</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P3</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P4</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P5</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-neutral-100">
                  <tr className="hover:bg-neutral-50/50">
                     <td className="p-4 font-bold text-neutral-900">1</td>
                     <td className="p-4 text-neutral-600">Create a 3-Day Trip</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50">
                     <td className="p-4 font-bold text-neutral-900">2</td>
                     <td className="p-4 text-neutral-600">Invite a Friend</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50">
                     <td className="p-4 font-bold text-neutral-900">3</td>
                     <td className="p-4 text-neutral-600">Add Custom Location</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><AlertCircle className="text-orange-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><XCircle className="text-red-500 mx-auto" size={20} /></td>
                  </tr>
               </tbody>
             </table>
        </div>
      </section>

    </div>
  </motion.div>
);
