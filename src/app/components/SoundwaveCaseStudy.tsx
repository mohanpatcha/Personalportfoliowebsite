import React from "react";
import { motion } from "framer-motion";
import { 
  X, 
  ArrowRight, 
  Music, 
  Mic2, 
  Radio, 
  Headphones, 
  Volume2, 
  Share2, 
  User, 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  MinusCircle, 
  AlertOctagon 
} from "lucide-react";

export const SoundwaveCaseStudy = ({ onClose }: { onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    className="fixed inset-0 z-[80] bg-neutral-900 text-white overflow-y-auto"
  >
    {/* Close Button */}
    <div className="fixed top-6 right-6 md:right-12 z-50">
      <button 
        onClick={onClose}
        className="bg-white text-black p-4 rounded-full shadow-lg hover:bg-neutral-200 transition-colors"
      >
        <X size={24} />
      </button>
    </div>

    {/* Hero */}
    <div className="relative h-[60vh] w-full bg-purple-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1588780383829-2e16c0085c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwZGFyayUyMG5lb24lMjBtdXNpYyUyMHN0dWRpb3xlbnwxfHx8fDE3NzE1MDMyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Soundwave App" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 text-white">Soundwave</h1>
        <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto text-purple-200">
          "Experience Audio Like Never Before"
        </p>
      </div>
    </div>

    {/* Content Container */}
    <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-24">
      
      {/* Brief */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-white">Brief about case study</h2>
        <div className="text-lg text-neutral-300 leading-relaxed space-y-6">
          <p>
            In a crowded market of music streaming services, audiophiles and social listeners often feel underserved. Standard compression rates degrade audio quality, and social features are often an afterthought.
          </p>
          <p>
            Soundwave aims to bridge this gap by offering a platform that prioritizes high-fidelity audio streaming and seamless social integration, allowing users to listen together in real-time.
          </p>
          <div className="bg-neutral-800 p-8 border-l-4 border-purple-500 rounded-r-xl">
            <p className="italic text-neutral-200 font-medium">
              "Music is a shared experience. I wanted to create a space where distance doesn't stop friends from jamming out together to their favorite tracks in crystal clear quality."
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-white">Research & Findings</h2>
        <p className="text-lg text-neutral-300">
          We conducted interviews with 20 users, ranging from professional DJs to casual commuters, to understand their listening habits and frustrations.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-widest text-purple-400">Key Pain Points</h3>
            <ul className="space-y-4">
              {[
                "Audio quality degradation on mobile networks",
                "Difficulty syncing playback with friends remotely",
                "Algorithmic recommendations feel repetitive",
                "Lack of detailed metadata for classical and jazz tracks",
                "Cluttered interfaces making library management hard"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-2 h-2 mt-2 bg-purple-500 rounded-full flex-shrink-0"></span>
                  <span className="text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-neutral-800 rounded-xl p-8 shadow-sm border border-neutral-700">
            <h4 className="font-bold text-lg mb-6 text-white">User Preferences</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2 text-neutral-300">
                  <span>Prioritize Audio Quality</span>
                  <span className="font-bold text-white">78%</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 text-neutral-300">
                  <span>Interested in 'Listening Parties'</span>
                  <span className="font-bold text-white">65%</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 text-neutral-300">
                  <span>Wants Dark Mode Default</span>
                  <span className="font-bold text-white">92%</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Define - Personas */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-white">Define - User Personas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-900/50 rounded-full flex items-center justify-center text-purple-400">
                <Headphones size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">The Audiophile</h3>
                <p className="text-purple-400 text-sm">Alex, 28, Sound Engineer</p>
              </div>
            </div>
            <p className="text-neutral-300 mb-6 italic">"I need to hear every nuance of the track. If it's compressed, I'm not interested."</p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase bg-neutral-700 px-2 py-1 rounded text-neutral-300">Goal</span>
                <span className="text-sm text-neutral-400">Lossless streaming, EQ control</span>
              </div>
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase bg-neutral-700 px-2 py-1 rounded text-neutral-300">Frustration</span>
                <span className="text-sm text-neutral-400">Muddy bass, artifacts</span>
              </div>
            </div>
          </div>

          <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-pink-900/50 rounded-full flex items-center justify-center text-pink-400">
                <Share2 size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">The Social Connector</h3>
                <p className="text-pink-400 text-sm">Maya, 22, Student</p>
              </div>
            </div>
            <p className="text-neutral-300 mb-6 italic">"Music is better when shared. I want to show my friends what I'm vibing to right now."</p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase bg-neutral-700 px-2 py-1 rounded text-neutral-300">Goal</span>
                <span className="text-sm text-neutral-400">Real-time listening parties, easy sharing</span>
              </div>
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase bg-neutral-700 px-2 py-1 rounded text-neutral-300">Frustration</span>
                <span className="text-sm text-neutral-400">Copy-pasting links is tedious</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideate - Information Architecture */}
      <section className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif text-white">Ideate - Structure</h2>
        <p className="text-lg text-neutral-300 leading-relaxed">
          The app structure prioritizes quick access to the "Now Playing" experience while keeping library management powerful but tucked away.
        </p>
        
        <div className="bg-neutral-800 border border-neutral-700 p-8 md:p-12 rounded-2xl overflow-x-auto">
           <div className="min-w-[800px] flex flex-col items-center">
              
              {/* Level 1: Home */}
              <div className="relative z-10 mb-12">
                 <div className="bg-purple-600 text-white px-8 py-4 rounded-xl shadow-lg shadow-purple-900/50 font-bold text-lg tracking-wide transform transition-transform hover:scale-105 cursor-default">
                    Home / Discover
                 </div>
                 {/* Line Down */}
                 <div className="absolute left-1/2 -translate-x-1/2 top-full h-8 w-0.5 bg-neutral-600"></div>
              </div>

              {/* Level 2: Branching */}
              <div className="relative w-full max-w-4xl">
                 {/* Horizontal Connector Line */}
                 <div className="absolute top-0 left-[12.5%] right-[12.5%] h-0.5 bg-neutral-600 -translate-y-4"></div>
                 {/* Center Vertical Connector from Parent */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-neutral-600 -translate-y-4"></div>

                 <div className="grid grid-cols-4 gap-4">
                    {/* Node 1 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-neutral-600"></div>
                       <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-purple-900/30 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Music size={24} />
                          </div>
                          <div className="font-bold text-white mb-3 text-lg">Library</div>
                       </div>
                    </div>

                    {/* Node 2 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-neutral-600"></div>
                       <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-pink-900/30 text-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Radio size={24} />
                          </div>
                          <div className="font-bold text-white mb-3 text-lg">Live Rooms</div>
                       </div>
                    </div>

                    {/* Node 3 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-neutral-600"></div>
                       <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-blue-900/30 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Volume2 size={24} />
                          </div>
                          <div className="font-bold text-white mb-3 text-lg">Studio EQ</div>
                       </div>
                    </div>

                    {/* Node 4 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-neutral-600"></div>
                       <div className="bg-neutral-900 border border-neutral-700 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                           <div className="w-12 h-12 bg-orange-900/30 text-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                             <User size={24} />
                          </div>
                          <div className="font-bold text-white mb-3 text-lg">Profile</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Solution */}
      <section className="space-y-8">
        <div className="bg-neutral-800 text-white p-8 md:p-12 rounded-3xl border border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">The Solution</h2>
              <p className="text-neutral-400 leading-relaxed text-lg">
                Soundwave delivers a dark-mode first interface that puts the music front and center. The visualization engine reacts to the beat, creating an immersive visual experience alongside the audio.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-3xl overflow-hidden mb-12 border border-neutral-700 shadow-2xl">
             <img src="https://images.unsplash.com/photo-1511138743687-5c14e8cfcf47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHN0cmVhbWluZyUyMGFwcCUyMG1vYmlsZSUyMGludGVyZmFjZSUyMG1vY2t1cCUyMGRhcmslMjBtb2RlfGVufDF8fHx8MTc3MTUwNjE0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Soundwave Mobile Interfaces" className="w-full h-auto object-contain" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/40 p-6 rounded-2xl border border-neutral-700 hover:border-purple-500 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 mb-4">
                <Radio size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Live Sessions</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Host a room where friends can tune in synchronously. The host controls the queue, while listeners can vote on the next track.
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-2xl border border-neutral-700 hover:border-pink-500 transition-colors">
              <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400 mb-4">
                <Volume2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Lossless Tier</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Support for FLAC and ALAC formats up to 24-bit/192kHz. A visual indicator confirms when you are listening to master quality.
              </p>
            </div>

            <div className="bg-black/40 p-6 rounded-2xl border border-neutral-700 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-4">
                <Mic2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Artist Connect</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Direct integration with artist tours and merchandise. Fans get notified when their favorite artists are performing nearby.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Test */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-white">Design Test</h2>
        <p className="text-lg text-neutral-300 leading-relaxed">
          We tasked 5 participants with creating a "Live Session" and inviting a friend.
        </p>

        {/* Legend */}
        <div className="bg-neutral-800 p-6 rounded-xl border border-neutral-700 shadow-sm mb-8">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-neutral-500">Legend</h4>
            <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-sm text-neutral-300">The task was solved correctly without problems</span>
                </div>
                <div className="flex items-start gap-3">
                    <MinusCircle className="text-blue-600 flex-shrink-0" size={20} />
                    <span className="text-sm text-neutral-300">Problems occurred which delayed the test participant in carrying out the task.</span>
                </div>
                <div className="flex items-start gap-3">
                    <AlertCircle className="text-orange-500 flex-shrink-0" size={20} />
                    <span className="text-sm text-neutral-300">The test participant encountered considerable problems but eventually succeeded in completing the task correctly.</span>
                </div>
                <div className="flex items-start gap-3">
                    <XCircle className="text-red-500 flex-shrink-0" size={20} />
                    <span className="text-sm text-neutral-300">The test participant was unable to complete the task or arrived at a result that deviated significantly from the correct result.</span>
                </div>
                 <div className="flex items-start gap-3">
                    <AlertOctagon className="text-red-600 flex-shrink-0" size={20} />
                    <span className="text-sm text-neutral-300">The test participant arrived at a result that posed an existential threat to the test participant or other human beings.</span>
                </div>
            </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-neutral-800 rounded-xl shadow-lg border border-neutral-700">
             <table className="w-full min-w-[800px] text-left border-collapse">
               <thead>
                 <tr className="bg-purple-900 text-white">
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16">Task</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest">Details</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P1</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P2</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P3</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P4</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P5</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-neutral-700">
                  <tr className="hover:bg-neutral-700/50">
                     <td className="p-4 font-bold text-white">1</td>
                     <td className="p-4 text-neutral-300">Create a new Playlist</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                  </tr>
                  <tr className="hover:bg-neutral-700/50">
                     <td className="p-4 font-bold text-white">2</td>
                     <td className="p-4 text-neutral-300">Start a Live Session</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><AlertCircle className="text-orange-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                  </tr>
                  <tr className="hover:bg-neutral-700/50">
                     <td className="p-4 font-bold text-white">3</td>
                     <td className="p-4 text-neutral-300">Adjust EQ Settings</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><XCircle className="text-red-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><AlertCircle className="text-orange-500 mx-auto" size={20} /></td>
                  </tr>
               </tbody>
             </table>
        </div>
      </section>

    </div>
  </motion.div>
);
