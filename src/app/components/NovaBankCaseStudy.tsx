import React from "react";
import { motion } from "framer-motion";
import { 
  X, 
  ArrowRight, 
  CreditCard, 
  DollarSign, 
  PieChart, 
  TrendingUp, 
  ShieldCheck, 
  Smartphone,
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  Briefcase,
  Wallet,
  MinusCircle,
  AlertOctagon
} from "lucide-react";

export const NovaBankCaseStudy = ({ onClose }: { onClose: () => void }) => (
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
    <div className="relative h-[60vh] w-full bg-slate-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <img 
          src="https://images.unsplash.com/photo-1618439569122-eddffc5104b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMGFyY2hpdGVjdHVyZSUyMGJsdWUlMjBidWlsZGluZyUyMHNreXNjcmFwZXJ8ZW58MXx8fHwxNzcxNTAzMjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Nova Bank App" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Nova Bank</h1>
        <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto text-blue-100">
          "Banking Reimagined for the Digital Age"
        </p>
      </div>
    </div>

    {/* Content Container */}
    <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-24">
      
      {/* Brief */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900">The Challenge</h2>
        <div className="text-lg text-neutral-600 leading-relaxed space-y-6">
          <p>
            Traditional banking applications are often cluttered with legacy features, making it difficult for users to perform simple tasks like checking their spending habits or transferring money quickly.
          </p>
          <p>
            Nova Bank was conceived as a mobile-first solution that strips away the complexity, offering a clean, intuitive interface that empowers users to take control of their financial health.
          </p>
          <div className="bg-blue-50 p-8 border-l-4 border-blue-600 rounded-r-xl">
            <p className="italic text-blue-900 font-medium">
              "We didn't just want to build another bank app. We wanted to build a financial companion that helps you understand your money, not just store it."
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900">Market Research</h2>
        <p className="text-lg text-neutral-600">
          We surveyed 50 millennials and Gen Z users to understand their banking pain points. The results were clear: speed and transparency are paramount.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-widest text-slate-400">User Frustrations</h3>
            <ul className="space-y-4">
              {[
                "Hidden fees and unclear transaction descriptions",
                "Slow transfer speeds between different banks",
                "Lack of visual insights into spending categories",
                "Overwhelming menus with too many options",
                "Poor customer support accessibility"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 rounded-xl p-8 shadow-sm border border-slate-200">
            <h4 className="font-bold text-lg mb-6 text-slate-800">Feature Requests</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2 text-slate-600">
                  <span>Spending Analytics</span>
                  <span className="font-bold text-slate-900">88%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 text-slate-600">
                  <span>Instant Peer-to-Peer Pay</span>
                  <span className="font-bold text-slate-900">75%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2 text-slate-600">
                  <span>Savings Goals</span>
                  <span className="font-bold text-slate-900">62%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "62%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Define - Personas */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900">Target Audience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Briefcase size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">The Young Pro</h3>
                <p className="text-slate-500 text-sm">David, 26, Analyst</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6 italic">"I want to invest my spare change and track my net worth without using five different apps."</p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase bg-slate-100 px-2 py-1 rounded text-slate-600">Needs</span>
                <span className="text-sm text-slate-600">Investment tracking, automated savings</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <Wallet size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">The Budgeter</h3>
                <p className="text-slate-500 text-sm">Sarah, 21, Student</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6 italic">"I'm on a tight budget. I need to know exactly where my money is going every month."</p>
            <div className="space-y-2">
              <div className="flex gap-2">
                <span className="text-xs font-bold uppercase bg-slate-100 px-2 py-1 rounded text-slate-600">Needs</span>
                <span className="text-sm text-slate-600">Expense categorization, limit alerts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideate - Sitemap */}
      <section className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900">App Structure</h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          The navigation is simplified into four main pillars, accessible from a bottom tab bar.
        </p>
        
        <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 rounded-2xl overflow-x-auto">
           <div className="min-w-[800px] flex flex-col items-center">
              
              {/* Level 1: Auth */}
              <div className="relative z-10 mb-12">
                 <div className="bg-slate-800 text-white px-8 py-4 rounded-xl shadow-lg font-bold text-lg tracking-wide transform transition-transform hover:scale-105 cursor-default">
                    Biometric Auth
                 </div>
                 {/* Line Down */}
                 <div className="absolute left-1/2 -translate-x-1/2 top-full h-8 w-0.5 bg-slate-300"></div>
              </div>

              {/* Level 2: Branching */}
              <div className="relative w-full max-w-4xl">
                 {/* Horizontal Connector Line */}
                 <div className="absolute top-0 left-[12.5%] right-[12.5%] h-0.5 bg-slate-300 -translate-y-4"></div>
                 {/* Center Vertical Connector from Parent */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-0.5 bg-slate-300 -translate-y-4"></div>

                 <div className="grid grid-cols-4 gap-4">
                    {/* Node 1 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-slate-300"></div>
                       <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <PieChart size={24} />
                          </div>
                          <div className="font-bold text-slate-900 mb-3 text-lg">Dashboard</div>
                          <p className="text-xs text-slate-500">Overview, Recent Transactions</p>
                       </div>
                    </div>

                    {/* Node 2 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-slate-300"></div>
                       <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <ArrowRight size={24} />
                          </div>
                          <div className="font-bold text-slate-900 mb-3 text-lg">Payments</div>
                          <p className="text-xs text-slate-500">Send, Request, Bills</p>
                       </div>
                    </div>

                    {/* Node 3 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-slate-300"></div>
                       <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <TrendingUp size={24} />
                          </div>
                          <div className="font-bold text-slate-900 mb-3 text-lg">Invest</div>
                          <p className="text-xs text-slate-500">Stocks, Crypto, Savings</p>
                       </div>
                    </div>

                    {/* Node 4 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-slate-300"></div>
                       <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                           <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <CreditCard size={24} />
                          </div>
                          <div className="font-bold text-slate-900 mb-3 text-lg">Cards</div>
                          <p className="text-xs text-slate-500">Manage, Freeze, Limits</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Solution */}
      <section className="space-y-8">
        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl border border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">The Solution</h2>
              <p className="text-slate-300 leading-relaxed text-lg">
                A clean, distraction-free interface that uses data visualization to tell the story of your money.
              </p>
            </div>
          </div>
          
          <div className="bg-neutral-900 rounded-3xl overflow-hidden mb-12 border border-slate-800 shadow-2xl">
             <img src="https://images.unsplash.com/photo-1765226410758-9ae3d34cd791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwYmFua2luZyUyMGFwcCUyMGRhc2hib2FyZCUyMG1vYmlsZSUyMGludGVyZmFjZSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzcxNTA2MTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Nova Bank Mobile Interfaces" className="w-full h-auto object-contain" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 mb-4">
                <PieChart size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Smart Insights</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Automatically categorized transactions with weekly and monthly spending breakdowns.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Ironclad Security</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Biometric login, instant card freezing, and real-time transaction alerts for peace of mind.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Micro-Investing</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Round up every purchase to the nearest dollar and invest the spare change automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Test */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-slate-900">Design Test</h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          We observed users performing critical financial tasks to ensure the new flow was intuitive.
        </p>
        
        {/* Legend */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-slate-500">Legend</h4>
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
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-slate-200">
             <table className="w-full min-w-[800px] text-left border-collapse">
               <thead>
                 <tr className="bg-slate-900 text-white">
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16">Task</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest">Details</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P1</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P2</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P3</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P4</th>
                   <th className="p-4 text-sm font-bold uppercase tracking-widest w-16 text-center">P5</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50">
                     <td className="p-4 font-bold text-slate-900">1</td>
                     <td className="p-4 text-slate-600">Check Monthly Spending</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                     <td className="p-4 font-bold text-slate-900">2</td>
                     <td className="p-4 text-slate-600">Send Money to a Friend</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                     <td className="p-4 font-bold text-slate-900">3</td>
                     <td className="p-4 text-slate-600">Freeze Debit Card</td>
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
