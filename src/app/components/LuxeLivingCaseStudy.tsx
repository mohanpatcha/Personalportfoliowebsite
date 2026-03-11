import React from "react";
import { motion } from "framer-motion";
import { 
  X, 
  ShoppingBag,
  Armchair,
  Box,
  Truck,
  MessageSquare,
  CheckCircle2, 
  AlertCircle, 
  XCircle,
  Home,
  Tag,
  Search,
  MinusCircle,
  AlertOctagon
} from "lucide-react";

export const LuxeLivingCaseStudy = ({ onClose }: { onClose: () => void }) => (
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
        className="bg-neutral-900 text-white p-4 rounded-full shadow-lg hover:bg-neutral-800 transition-colors"
      >
        <X size={24} />
      </button>
    </div>

    {/* Hero */}
    <div className="relative h-[60vh] w-full bg-neutral-200 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <img 
          src="https://images.unsplash.com/photo-1757439402103-fc35542f96f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZnVybml0dXJlJTIwbHV4dXJ5JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcxNTA1NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Luxe Living App" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="relative z-10 text-center text-neutral-900 px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Luxe Living</h1>
        <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto text-neutral-700">
          "Elevate Your Space with Timeless Design"
        </p>
      </div>
    </div>

    {/* Content Container */}
    <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-24">
      
      {/* Brief */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">The Objective</h2>
        <div className="text-lg text-neutral-600 leading-relaxed space-y-6">
          <p>
            Buying furniture online is often a gamble. Customers struggle with visualizing how a piece will fit in their home, and low-quality imagery can lead to disappointment and returns.
          </p>
          <p>
            Luxe Living aims to bridge the gap between digital browsing and physical showrooms. We focused on high-fidelity visual storytelling, AR integration, and a seamless checkout experience.
          </p>
          <div className="bg-neutral-100 p-8 border-l-4 border-neutral-900 rounded-r-xl">
            <p className="italic text-neutral-800 font-medium">
              "We're not just selling chairs and tables. We're helping people curate the backdrop of their lives."
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Customer Insights</h2>
        <p className="text-lg text-neutral-600">
          We analyzed customer support tickets and conducted usability tests with 40 potential buyers.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-widest text-neutral-400">Buying Hurdles</h3>
            <ul className="space-y-4">
              {[
                "Unsure about dimensions and scale",
                "Color accuracy concerns (screen vs. reality)",
                "Hidden shipping costs and delivery times",
                "Lack of styling inspiration",
                "Complicated return policies"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-2 h-2 mt-2 bg-neutral-900 rounded-full flex-shrink-0"></span>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-neutral-50 rounded-xl p-8 shadow-sm border border-neutral-200">
            <h4 className="font-bold text-lg mb-6 text-neutral-800">Must-Have Features</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2 text-neutral-600">
                  <span>Augmented Reality View</span>
                  <span className="font-bold text-neutral-900">92%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-neutral-900 h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 text-neutral-600">
                  <span>Customer Photo Reviews</span>
                  <span className="font-bold text-neutral-900">88%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-neutral-900 h-2 rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 text-neutral-600">
                  <span>Material Swatches</span>
                  <span className="font-bold text-neutral-900">75%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-neutral-900 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Define - Personas */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">The Shoppers</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600">
                <Home size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">The New Homeowner</h3>
                <p className="text-neutral-500 text-sm">Sophie, 30, Architect</p>
              </div>
            </div>
            <p className="text-neutral-600 mb-6 italic">"I just bought my first place. It's a blank canvas, and I want high-quality pieces that will last."</p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase bg-neutral-100 px-2 py-1 rounded text-neutral-600">Focus</span>
                <span className="text-sm text-neutral-600">Durability, aesthetic cohesion</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-600">
                <Tag size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">The Upgrader</h3>
                <p className="text-neutral-500 text-sm">James, 45, Consultant</p>
              </div>
            </div>
            <p className="text-neutral-600 mb-6 italic">"I'm replacing my IKEA furniture one piece at a time. I'm willing to pay for premium design."</p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase bg-neutral-100 px-2 py-1 rounded text-neutral-600">Focus</span>
                <span className="text-sm text-neutral-600">Material quality, exclusivity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideate - Sitemap */}
      <section className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Shopping Experience</h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          The site architecture is designed to guide the user from broad inspiration to specific product details.
        </p>
        
        <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-12 rounded-2xl overflow-x-auto">
           <div className="min-w-[800px] flex flex-col items-center">
              
              {/* Level 1: Landing */}
              <div className="relative z-10 mb-12">
                 <div className="bg-neutral-900 text-white px-8 py-4 rounded-xl shadow-lg font-bold text-lg tracking-wide transform transition-transform hover:scale-105 cursor-default">
                    Homepage
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
                          <div className="w-12 h-12 bg-neutral-100 text-neutral-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Search size={24} />
                          </div>
                          <div className="font-bold text-neutral-900 mb-3 text-lg">Browse</div>
                          <p className="text-xs text-neutral-500">Categories, Filters</p>
                       </div>
                    </div>

                    {/* Node 2 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-neutral-300"></div>
                       <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-neutral-100 text-neutral-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Armchair size={24} />
                          </div>
                          <div className="font-bold text-neutral-900 mb-3 text-lg">Product</div>
                          <p className="text-xs text-neutral-500">Details, AR View</p>
                       </div>
                    </div>

                    {/* Node 3 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-neutral-300"></div>
                       <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-neutral-100 text-neutral-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <ShoppingBag size={24} />
                          </div>
                          <div className="font-bold text-neutral-900 mb-3 text-lg">Cart</div>
                          <p className="text-xs text-neutral-500">Review, Checkout</p>
                       </div>
                    </div>

                    {/* Node 4 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-neutral-300"></div>
                       <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                           <div className="w-12 h-12 bg-neutral-100 text-neutral-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Truck size={24} />
                          </div>
                          <div className="font-bold text-neutral-900 mb-3 text-lg">Track</div>
                          <p className="text-xs text-neutral-500">Shipping, Delivery</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Solution */}
      <section className="space-y-8">
        <div className="bg-neutral-900 text-white p-8 md:p-12 rounded-3xl border border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">The Solution</h2>
              <p className="text-neutral-400 leading-relaxed text-lg">
                An elegant, gallery-like interface that builds trust through transparency and interactivity.
              </p>
            </div>
          </div>
          
          <div className="bg-neutral-900 rounded-3xl overflow-hidden mb-12 border border-neutral-800 shadow-2xl">
             <img src="https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBzaG9wcGluZyUyMGFwcCUyMG1vYmlsZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzE1MDYxNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Luxe Living Mobile Interfaces" className="w-full h-auto object-contain" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-4">
                <Box size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">AR Integration</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                "View in Room" feature allows users to place 3D models of furniture in their actual space using their phone camera.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-4">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Design Concierge</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Live chat with interior designers who can answer questions about fabric, care, and styling.
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-4">
                <Truck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">White Glove Service</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Premium delivery options that include assembly and packaging removal are clearly highlighted at checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Test */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Design Test</h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          We measured the success rate of the AR feature and the checkout process.
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
                 <tr className="bg-neutral-900 text-white">
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
                     <td className="p-4 text-neutral-600">Use AR to Place Sofa</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><AlertCircle className="text-orange-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50">
                     <td className="p-4 font-bold text-neutral-900">2</td>
                     <td className="p-4 text-neutral-600">Customize Fabric Color</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50">
                     <td className="p-4 font-bold text-neutral-900">3</td>
                     <td className="p-4 text-neutral-600">Complete Purchase</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
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
