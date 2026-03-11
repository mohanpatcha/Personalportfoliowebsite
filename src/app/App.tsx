import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  ArrowRight, 
  Monitor, 
  PenTool, 
  Layout, 
  Smartphone,
  ChevronRight,
  MousePointer2,
  Layers,
  Code,
  X,
  Mail,
  MapPin,
  Phone,
  Download,
  Clock,
  CheckCircle2,
  AlertCircle,
  XCircle,
  MinusCircle,
  AlertOctagon
} from "lucide-react";

// Image imports
import parkMeIntro from "figma:asset/e18ced14336fc0a1e6265cc33984258158e27062.png";
import parkMeScreens from "figma:asset/fa13f2244bc84b4553e5a6047ad432fa815b895f.png";

import { SoundwaveCaseStudy } from "./components/SoundwaveCaseStudy";
import { NovaBankCaseStudy } from "./components/NovaBankCaseStudy";
import { WanderlustCaseStudy } from "./components/WanderlustCaseStudy";
import { ZenYogaCaseStudy } from "./components/ZenYogaCaseStudy";
import { LuxeLivingCaseStudy } from "./components/LuxeLivingCaseStudy";

// Font imports and global styles
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
    
    body {
      font-family: 'DM Sans', sans-serif;
      background-color: #E6E5E3;
      color: #1A1A1A;
      overflow-x: hidden;
    }
    
    h1, h2, h3, h4, h5, h6, .font-serif {
      font-family: 'Playfair Display', serif;
    }

    .smooth-scroll {
      scroll-behavior: smooth;
    }
    
    .noise-bg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 0;
      opacity: 0.03;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }
  `}</style>
);

const Navbar = ({ onMenuClick }: { onMenuClick: () => void }) => (
  <nav className="flex justify-between items-center px-6 md:px-12 py-6 w-full max-w-7xl mx-auto z-50 relative">
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-black rounded-full"></div>
      <span className="font-bold tracking-widest text-sm uppercase">Mohan Patcha</span>
    </div>
    <button 
      onClick={onMenuClick}
      className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
    >
      <span className="text-xs font-medium tracking-widest uppercase">Menu</span>
      <Menu size={16} />
    </button>
  </nav>
);

const MenuOverlay = ({ isOpen, onClose, onNavigate }: { isOpen: boolean; onClose: () => void; onNavigate: (id: string) => void }) => {
  const menuItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-[#E6E5E3] z-[70] p-8 md:p-12 shadow-2xl flex flex-col justify-between"
          >
            <div className="flex justify-end">
              <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6">
              {menuItems.map((item, idx) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  onClick={() => onNavigate(item.id)}
                  className="text-4xl md:text-5xl font-serif text-left hover:italic hover:pl-4 transition-all duration-300"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="flex flex-col gap-4 text-sm text-neutral-500">
              <p>Based in Hyderabad, India</p>
              <p>hello@mohanpatcha.com</p>
              <div className="flex gap-4 mt-2">
                <a href="https://www.instagram.com/always.mohan/" target="_blank" rel="noopener noreferrer" className="uppercase tracking-widest hover:text-black">Instagram</a>
                <a href="https://www.linkedin.com/in/mohanpatcha/" target="_blank" rel="noopener noreferrer" className="uppercase tracking-widest hover:text-black">LinkedIn</a>
                <a href="https://dribbble.com/mohanpatcha" target="_blank" rel="noopener noreferrer" className="uppercase tracking-widest hover:text-black">Dribbble</a>
                <a href="https://www.behance.net/mohanpatcha" target="_blank" rel="noopener noreferrer" className="uppercase tracking-widest hover:text-black">Behance</a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Hero = ({ onContactClick }: { onContactClick: () => void }) => {
  const heroImages = [
    "https://raw.githubusercontent.com/mohanpatcha/mohanpatcha.com/refs/heads/master/mohanpatchaphoto.png",
    "https://raw.githubusercontent.com/mohanpatcha/mohanpatcha.com/refs/heads/master/mohanpatchaphoto1.png",
    "https://raw.githubusercontent.com/mohanpatcha/mohanpatcha.com/refs/heads/master/mohanpatchaphoto2.png",
    "https://raw.githubusercontent.com/mohanpatcha/mohanpatcha.com/refs/heads/master/mohanpatchaphoto4.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative px-6 md:px-12 py-12 md:py-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div className="md:col-span-5 flex flex-col gap-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg md:text-xl text-neutral-600 font-serif italic">Hey, I'm Mohan,</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-serif mt-2 mb-6">
            A UI/UX <br/>
            <span className="italic font-light">&</span> Brand <br/>
            DESIGNER
          </h1>
          <p className="text-neutral-600 max-w-md leading-relaxed mb-8">
            Transforming ideas into stunning visuals — UI/UX and brand design that captivates, engages, and delivers results.
          </p>
          
          <div className="flex flex-col gap-4">
            <button 
              onClick={onContactClick}
              className="group flex items-center gap-4 bg-black text-white pl-6 pr-2 py-2 rounded-full w-fit hover:bg-neutral-800 transition-all cursor-pointer"
            >
              <span className="text-sm font-medium tracking-widest uppercase">Contact Me</span>
              <div className="bg-white text-black rounded-full p-2 group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </div>
            </button>

            <a 
              href="/resume.pdf" 
              download
              className="group flex items-center gap-4 border border-black text-black pl-6 pr-2 py-2 rounded-full w-fit hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              <span className="text-sm font-medium tracking-widest uppercase">Download Resume</span>
              <div className="bg-black text-white rounded-full p-2 group-hover:bg-white group-hover:text-black transition-colors">
                <Download size={16} />
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="md:col-span-4 relative flex justify-center z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[3/4] max-w-md rounded-t-[100px] overflow-hidden bg-neutral-300 shadow-2xl cursor-pointer"
          onClick={() => setCurrentIndex((prev) => (prev + 1) % heroImages.length)}
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={heroImages[currentIndex]} 
              alt="Mohan Patcha Portrait" 
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="md:col-span-3 flex flex-col justify-center gap-8 md:pl-8">
        {[
          { number: "15+", label: "Years Experience" },
          { number: "110+", label: "Projects Delivered" },
          { number: "*99%", label: "Client Satisfaction" },
          { number: "20", label: "Clients Worldwide" },
        ].map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
            className="text-right md:text-right"
          >
            <h3 className="text-3xl font-bold font-serif">{stat.number}</h3>
            <p className="text-xs uppercase tracking-wider text-neutral-500 mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-sm border border-neutral-200">
      <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
        
        {/* Left Column */}
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">About<br/>Me</h2>
          <div className="h-1 w-20 bg-black mt-4 mb-6"></div>
        </div>
        
        {/* Right Column */}
        <div className="md:w-2/3 flex flex-col gap-8">
          <p className="text-lg text-neutral-600 font-light leading-relaxed">
            I have been practising UX over a decade. I was playing multiple roles in the UX arenas. My passion is to transform customer’s vision into design that solve their unmet needs. I am open to any roles that allow me to provide my innovative ideas for enhancing the product design.
          </p>
          
          <div className="border-l-4 border-black pl-6 py-2">
            <p className="text-2xl md:text-3xl font-serif italic text-neutral-900 leading-tight">
              "Putting user into the design process is very difficult for UX. One of the best way is Design thinking."
            </p>
          </div>
          
          <div className="space-y-6 text-neutral-600 font-light leading-relaxed">
            <p>
              I have over 11+ years of experience in the IT industry where I played a variety of roles that started as a creative designer which has lead to Innovation and Global Strategy while designing product in multiple organisations.
            </p>
            <p>
              My expertise lies in designing multiple products, across the globe and in multiple domains – Operating Systems, Enterprise Applications, Financial Portals, Business and financial management solutions, Retail etc., across multiple platforms – Online, Desktop applications and now mobile applications.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    "User Research", "Design Thinking", "IA", "Quick Prototype", 
    "User Flows", "Personas", "Sitemaps", "Heuristic Evaluation", 
    "UX Sprint Planning", "Collaborative Design", "Ideation", 
    "VD", "UT", "ID"
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-white rounded-[2rem] p-8 md:p-16 shadow-sm border border-neutral-200">
        <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Expertise &<br/>Skills</h2>
            <p className="text-neutral-500 max-w-xs">
              A comprehensive toolkit honed over a decade of hands-on experience in product design and strategy.
            </p>
          </div>
          
          <div className="md:w-2/3 flex flex-wrap gap-3 justify-start md:justify-end">
            {skills.map((skill, idx) => (
              <motion.div 
                key={idx}
                initial={{ backgroundColor: "#F5F5F5", color: "#404040", borderColor: "#E5E5E5" }}
                whileHover={{ scale: 1.05, backgroundColor: "#1A1A1A", color: "#FFFFFF", borderColor: "#1A1A1A" }}
                transition={{ duration: 0.2 }}
                className="px-6 py-3 border rounded-lg text-sm md:text-base font-medium cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


const ParkMeCaseStudy = ({ onClose }: { onClose: () => void }) => (
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
    <div className="relative h-[60vh] w-full bg-blue-900 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <img src="https://images.unsplash.com/photo-1703978959521-a1950df85332?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcmdyb3VuZCUyMHBhcmtpbmclMjBnYXJhZ2UlMjBjb25jcmV0ZSUyMG1pbmltYWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcxNTAyMzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="ParkMe App" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">ParkMe</h1>
        <p className="text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto">
          "Finding Parking Areas" for people
        </p>
      </div>
    </div>

    {/* Content Container */}
    <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col gap-24">
      
      {/* Brief */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Brief about case study</h2>
        <div className="text-lg text-neutral-600 leading-relaxed space-y-6">
          <p>
            The increasing rate of private vehicle usage in the urban areas as a result of rapid economic and population growth is making vehicle parking one of the main concerns for the government.
          </p>
          <p>
            Today, we face tremendous pressure on parking spaces resulting in issues like traffic congestion, illegal parking, parking brawls, etc. to name a few.
          </p>
          <div className="bg-neutral-50 p-8 border-l-4 border-blue-600 rounded-r-xl">
            <p className="italic text-neutral-800 font-medium">
              "Being a resident where I located, I find looking for a parking spot extremely difficult especially if I am in a hurry. I couldn't find a resource at my disposal that could help me combat this issue, hence I have tried to solve the parking problem in this case study."
            </p>
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Research & Findings</h2>
        <p className="text-lg text-neutral-600">
          As initial research, I went online to search about Competitors apps and also interviewed some users to understand pain points.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl font-bold uppercase tracking-widest text-neutral-400">Key Findings</h3>
            <ul className="space-y-4">
              {[
                "People first pain point is finding the parking area in crowded area",
                "Always seeing 'No Parking' signs",
                "Forgetting where they parked their vehicles",
                "When they go to malls, they see 40% time parking full",
                "There is no pre-booking parking slot like movie tickets"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                  <span className="text-neutral-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-neutral-100 rounded-xl p-8 shadow-sm">
            <h4 className="font-bold text-lg mb-6">User Survey Results</h4>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Difficulty finding parking</span>
                  <span className="font-bold">85%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Late due to parking issues</span>
                  <span className="font-bold">72%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "72%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Willing to pre-book</span>
                  <span className="font-bold">64%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "64%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Prefer digital payment</span>
                  <span className="font-bold">90%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Define - General Tasks */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Define - General Tasks</h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          I have been following some users using indirect/shadowing method. After analysing user needs I found some key findings.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Login Required",
            "Google Maps/ Apple Maps",
            "Find Parking place near to me",
            "Weather information",
            "Booking Parking Slot",
            "Boats to be used?",
            "Online Payment",
            "All Vehicles to be allowed? Vehicle Specific parking.",
            "Reviews about Parking Places",
            "Notifications?",
            "Intimations about Parking allotment.",
            "Find my Vehicle?"
          ].map((task, i) => (
            <div key={i} className="bg-rose-500 text-white p-6 rounded-xl flex items-center justify-center text-center font-medium shadow-sm hover:scale-105 transition-transform">
              {task}
            </div>
          ))}
        </div>
      </section>

      {/* Define - User Profiles */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Define - User profiles</h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          Generally all the below data has to be collected by doing qualitative and quantitative data gathering methods, and then have to derive a pattern and ultimately use this data to understand the mental model of the users. By using all the below data we can create personas for every profile and we can also create empathy map to dive deep into the emotional part of the users.
        </p>
        <p className="text-sm text-neutral-500 italic mb-6">
           * But as the assignment describes quite deep enough information to create a persona i am assuming the below data would be an average all the users sample
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Transport People",
              desc: "Professional drivers operating heavy vehicles or buses.",
              needs: "Large parking spaces, overnight options, security."
            },
            {
              title: "Cab Drivers",
              desc: "Taxi and rideshare drivers constantly on the move.",
              needs: "Quick short-term spots, low cost, easy access."
            },
            {
              title: "Citizens",
              desc: "Daily commuters, shoppers, and families.",
              needs: "Safety, proximity to destination, pre-booking."
            }
          ].map((profile, i) => (
            <div key={i} className="bg-neutral-50 p-6 rounded-xl border border-neutral-200">
              <h3 className="text-xl font-bold font-serif mb-3 text-blue-900">{profile.title}</h3>
              <p className="text-neutral-600 mb-4 text-sm">{profile.desc}</p>
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">Key Needs</div>
              <p className="text-neutral-800 text-sm">{profile.needs}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Define - Persona */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Define - Persona</h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-neutral-200">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr className="bg-neutral-50 border-b border-neutral-200">
                <th className="p-4 text-sm font-bold uppercase tracking-widest text-neutral-500">Characteristic</th>
                <th className="p-4 text-sm font-bold uppercase tracking-widest text-blue-900">Transport People</th>
                <th className="p-4 text-sm font-bold uppercase tracking-widest text-blue-900">Cab Drivers</th>
                <th className="p-4 text-sm font-bold uppercase tracking-widest text-blue-900">Citizens</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {[
                { label: "Age Group", val1: "30 - 55", val2: "25 - 50", val3: "18 - 65" },
                { label: "Tech Literacy", val1: "Low to Moderate", val2: "High (App usage)", val3: "Moderate to High" },
                { label: "Pain Points", val1: "Finding large spots", val2: "Traffic & fines", val3: "Safety & Distance" },
                { label: "Motivation", val1: "Rest & Safety", val2: "Efficiency", val3: "Convenience" },
                { label: "Usage Freq", val1: "Daily / Nightly", val2: "Multiple times/day", val3: "Occasional / Daily" },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-neutral-50/50">
                  <td className="p-4 font-medium text-neutral-900 bg-neutral-50/30">{row.label}</td>
                  <td className="p-4 text-neutral-600">{row.val1}</td>
                  <td className="p-4 text-neutral-600">{row.val2}</td>
                  <td className="p-4 text-neutral-600">{row.val3}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Ideate - Empathy Mapping */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Ideate - Empathy Mapping</h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          In order to get a deeper Understanding about user behaviour and decisions, I used empathy mapping method.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 flex flex-col gap-4">
            <h3 className="text-lg font-bold uppercase tracking-widest text-blue-900">Says</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              <li>"Where can I park safely?"</li>
              <li>"I don't want to get a ticket."</li>
              <li>"This is too expensive."</li>
              <li>"Is there space near the entrance?"</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 flex flex-col gap-4">
            <h3 className="text-lg font-bold uppercase tracking-widest text-purple-900">Thinks</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              <li>"I'm going to be late for my meeting."</li>
              <li>"I hope my car doesn't get scratched."</li>
              <li>"Why is parking so complicated?"</li>
              <li>"I wish I could book this in advance."</li>
            </ul>
          </div>
          <div className="bg-green-50 p-8 rounded-2xl border border-green-100 flex flex-col gap-4">
            <h3 className="text-lg font-bold uppercase tracking-widest text-green-900">Does</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              <li>Circles the block multiple times.</li>
              <li>Uses Google Maps to check traffic.</li>
              <li>Asks pedestrians for info.</li>
              <li>Checks for 'No Parking' signs nervously.</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 flex flex-col gap-4">
            <h3 className="text-lg font-bold uppercase tracking-widest text-orange-900">Feels</h3>
            <ul className="list-disc list-inside space-y-2 text-neutral-700">
              <li>Frustrated by traffic.</li>
              <li>Anxious about time.</li>
              <li>Relieved when a spot is found.</li>
              <li>Annoyed by high prices.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Ideate - User Journey */}
      <section className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Ideate - User Journey</h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          After understanding I jump into user journey. Here is the steps for user to use app.
        </p>

        <div className="relative">
          {/* Vertical Line for desktop */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-200 hidden md:block"></div>

          <div className="space-y-8 md:space-y-12 relative">
            {/* Phase 1 */}
            <div className="relative md:pl-24">
               <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-blue-50 rounded-full items-center justify-center border-4 border-white shadow-sm z-10">
                  <span className="text-blue-600 font-bold font-serif text-xl">01</span>
               </div>
               <div className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6 font-serif">Onboarding & Access</h3>
                  <div className="flex flex-wrap gap-3 items-center">
                     <div className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700">Start</div>
                     <ArrowRight className="text-neutral-300" size={16} />
                     <div className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700">Location Access</div>
                     <ArrowRight className="text-neutral-300" size={16} />
                     <div className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-lg text-sm font-bold text-blue-700">Sign Up / Sign In</div>
                  </div>
               </div>
            </div>

            {/* Phase 2 */}
             <div className="relative md:pl-24">
               <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-blue-50 rounded-full items-center justify-center border-4 border-white shadow-sm z-10">
                  <span className="text-blue-600 font-bold font-serif text-xl">02</span>
               </div>
               <div className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6 font-serif">Profile & Vehicle Setup</h3>
                   <div className="flex flex-wrap gap-3 items-center">
                     <div className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700">Create Profile</div>
                     <ArrowRight className="text-neutral-300" size={16} />
                     <div className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700">Add Vehicle</div>
                     <ArrowRight className="text-neutral-300" size={16} />
                     <div className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700">Pair Device</div>
                     <ArrowRight className="text-neutral-300" size={16} />
                     <div className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-lg text-sm font-bold text-blue-700">Dashboard</div>
                  </div>
               </div>
            </div>

            {/* Phase 3 */}
            <div className="relative md:pl-24">
               <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-blue-50 rounded-full items-center justify-center border-4 border-white shadow-sm z-10">
                  <span className="text-blue-600 font-bold font-serif text-xl">03</span>
               </div>
               <div className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6 font-serif">Booking Process</h3>
                   <div className="flex flex-wrap gap-3 items-center">
                     <div className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700">Find Slot</div>
                     <ArrowRight className="text-neutral-300" size={16} />
                     <div className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700">Select Slot</div>
                     <ArrowRight className="text-neutral-300" size={16} />
                     <div className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700">Verify Details</div>
                     <ArrowRight className="text-neutral-300" size={16} />
                     <div className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-lg text-sm font-bold text-blue-700">Confirm</div>
                  </div>
               </div>
            </div>

             {/* Phase 4 */}
            <div className="relative md:pl-24">
               <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 bg-green-50 rounded-full items-center justify-center border-4 border-white shadow-sm z-10">
                  <span className="text-green-600 font-bold font-serif text-xl">04</span>
               </div>
               <div className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6 font-serif">Payment & Parking</h3>
                   <div className="flex flex-wrap gap-3 items-center">
                     <div className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700">Make Payment</div>
                     <ArrowRight className="text-neutral-300" size={16} />
                     <div className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700">Get QR Code</div>
                     <ArrowRight className="text-neutral-300" size={16} />
                     <div className="px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg text-sm font-medium text-neutral-700">Scan at Entry</div>
                     <ArrowRight className="text-neutral-300" size={16} />
                     <div className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-bold shadow-lg shadow-green-200">Park Vehicle</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideate - Information Architecture */}
      <section className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Ideate - Information Architecture</h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          Information architecture is a practise of deciding how to arrange a parts of something to be understandable. IA aims at organizing content so that user Would easily adjust to the functionality of the product and could find everything we need without big effect
        </p>
        
        <div className="bg-neutral-50 border border-neutral-200 p-8 md:p-12 rounded-2xl overflow-x-auto">
           <div className="min-w-[800px] flex flex-col items-center">
              
              {/* Level 1: Splash */}
              <div className="relative z-10 mb-8">
                 <div className="bg-blue-600 text-white px-8 py-4 rounded-xl shadow-lg shadow-blue-200 font-bold text-lg tracking-wide transform transition-transform hover:scale-105 cursor-default">
                    Splash Screen
                 </div>
                 {/* Line Down */}
                 <div className="absolute left-1/2 -translate-x-1/2 top-full h-8 w-0.5 bg-neutral-300"></div>
              </div>

              {/* Level 2: Auth */}
              <div className="relative z-10 mb-12">
                 <div className="bg-neutral-900 text-white px-8 py-3 rounded-xl shadow-lg font-medium tracking-wide transform transition-transform hover:scale-105 cursor-default">
                    Login / Sign Up
                 </div>
                 {/* Line Down */}
                 <div className="absolute left-1/2 -translate-x-1/2 top-full h-8 w-0.5 bg-neutral-300"></div>
              </div>

              {/* Level 3: Branching */}
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
                          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <MapPin size={24} />
                          </div>
                          <div className="font-bold text-neutral-900 mb-3 text-lg">Home</div>
                          <div className="flex flex-wrap justify-center gap-2">
                             <span className="text-[10px] uppercase font-bold text-neutral-500 bg-neutral-100 py-1 px-2 rounded">Search</span>
                             <span className="text-[10px] uppercase font-bold text-neutral-500 bg-neutral-100 py-1 px-2 rounded">Filter</span>
                             <span className="text-[10px] uppercase font-bold text-neutral-500 bg-neutral-100 py-1 px-2 rounded">View</span>
                          </div>
                       </div>
                    </div>

                    {/* Node 2 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-neutral-300"></div>
                       <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Layout size={24} />
                          </div>
                          <div className="font-bold text-neutral-900 mb-3 text-lg">Bookings</div>
                          <div className="flex flex-wrap justify-center gap-2">
                             <span className="text-[10px] uppercase font-bold text-neutral-500 bg-neutral-100 py-1 px-2 rounded">Active</span>
                             <span className="text-[10px] uppercase font-bold text-neutral-500 bg-neutral-100 py-1 px-2 rounded">History</span>
                          </div>
                       </div>
                    </div>

                    {/* Node 3 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-neutral-300"></div>
                       <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <Layers size={24} />
                          </div>
                          <div className="font-bold text-neutral-900 mb-3 text-lg">Wallet</div>
                          <div className="flex flex-wrap justify-center gap-2">
                             <span className="text-[10px] uppercase font-bold text-neutral-500 bg-neutral-100 py-1 px-2 rounded">Add Money</span>
                             <span className="text-[10px] uppercase font-bold text-neutral-500 bg-neutral-100 py-1 px-2 rounded">Cards</span>
                          </div>
                       </div>
                    </div>

                    {/* Node 4 */}
                    <div className="flex flex-col items-center relative pt-8">
                       <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 h-8 w-0.5 bg-neutral-300"></div>
                       <div className="bg-white border border-neutral-200 p-6 rounded-2xl shadow-sm w-full text-center hover:shadow-lg transition-all hover:-translate-y-1">
                           <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                             <MousePointer2 size={24} />
                          </div>
                          <div className="font-bold text-neutral-900 mb-3 text-lg">Profile</div>
                          <div className="flex flex-wrap justify-center gap-2">
                             <span className="text-[10px] uppercase font-bold text-neutral-500 bg-neutral-100 py-1 px-2 rounded">Vehicles</span>
                             <span className="text-[10px] uppercase font-bold text-neutral-500 bg-neutral-100 py-1 px-2 rounded">Settings</span>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* Design Strategy */}
      <section className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Design Strategy</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
            <h3 className="text-xl font-serif font-bold mb-4 text-blue-900">Business Goals</h3>
            <ul className="space-y-2 text-neutral-600 text-sm">
              <li>• Hassle Free Finding Parking system for all Citizens</li>
              <li>• Enhancing the Citizens business experience</li>
              <li>• Partner with more Parking bay providers</li>
            </ul>
          </div>

          <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
            <h3 className="text-xl font-serif font-bold mb-4 text-blue-900">User Groups</h3>
            <ul className="space-y-2 text-neutral-600 text-sm">
              <li>• Citizens</li>
              <li>• Drivers</li>
              <li>• Parking providers</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
           <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
             <h3 className="text-xl font-bold font-serif mb-6 text-neutral-800">The Design Process</h3>
             <div className="flex flex-col gap-4">
               {[
                 { step: "01", title: "Empathize", desc: "User Research, Interviews, Competitor Analysis" },
                 { step: "02", title: "Define", desc: "User Personas, Empathy Maps, Problem Statements" },
                 { step: "03", title: "Ideate", desc: "Brainstorming, User Flows, Information Architecture" },
                 { step: "04", title: "Prototype", desc: "Wireframing, High-Fidelity Mockups, Interactions" },
                 { step: "05", title: "Test", desc: "Usability Testing, Feedback Iteration" }
               ].map((item, idx) => (
                 <div key={idx} className="flex gap-4 items-start">
                   <span className="text-2xl font-serif text-neutral-300 font-bold">{item.step}</span>
                   <div>
                     <h4 className="font-bold text-neutral-800">{item.title}</h4>
                     <p className="text-sm text-neutral-500">{item.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="bg-blue-900 text-white p-8 rounded-xl shadow-md flex flex-col justify-between">
             <div>
                <h3 className="text-xl font-bold font-serif mb-6">Value Proposition</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Bridging the gap between drivers needing space and space owners needing utilization. ParkMe creates a seamless ecosystem for urban mobility.
                </p>
             </div>
             <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-bold mb-1">For Drivers</h4>
                  <p className="text-sm text-blue-200">Save time, fuel, and reduce stress.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-bold mb-1">For City</h4>
                  <p className="text-sm text-blue-200">Reduce congestion and pollution.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <h4 className="font-bold mb-1">For Owners</h4>
                  <p className="text-sm text-blue-200">Monetize unused space effectively.</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Empathise - Competitor Analysis</h2>
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-neutral-200">
           <table className="w-full min-w-[600px] text-left border-collapse">
             <thead>
               <tr className="bg-neutral-50 border-b border-neutral-200">
                 <th className="p-4 text-sm font-bold uppercase tracking-widest text-neutral-500">Feature</th>
                 <th className="p-4 text-sm font-bold uppercase tracking-widest text-blue-600">ParkMe</th>
                 <th className="p-4 text-sm font-bold uppercase tracking-widest text-neutral-600">Google Maps</th>
                 <th className="p-4 text-sm font-bold uppercase tracking-widest text-neutral-600">Traditional</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-neutral-100">
               {[
                 { feature: "Real-time Availability", parkme: true, google: true, trad: false },
                 { feature: "Pre-booking Slots", parkme: true, google: false, trad: false },
                 { feature: "Price Comparison", parkme: true, google: false, trad: false },
                 { feature: "In-app Payment", parkme: true, google: false, trad: false },
                 { feature: "Navigation", parkme: true, google: true, trad: false },
                 { feature: "Valet Service", parkme: true, google: false, trad: true },
               ].map((row, i) => (
                 <tr key={i} className="hover:bg-neutral-50/50">
                   <td className="p-4 font-medium text-neutral-800">{row.feature}</td>
                   <td className="p-4 text-center">
                     {row.parkme ? <span className="inline-block w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center">✓</span> : <span className="text-neutral-300">-</span>}
                   </td>
                   <td className="p-4 text-center">
                     {row.google ? <span className="inline-block w-6 h-6 bg-neutral-100 text-neutral-600 rounded-full flex items-center justify-center">✓</span> : <span className="text-neutral-300">-</span>}
                   </td>
                   <td className="p-4 text-center">
                     {row.trad ? <span className="inline-block w-6 h-6 bg-neutral-100 text-neutral-600 rounded-full flex items-center justify-center">✓</span> : <span className="text-neutral-300">-</span>}
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
        </div>
      </section>

      {/* Solution */}
      <section className="space-y-8">
        <div className="bg-black text-white p-8 md:p-12 rounded-3xl">
          <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-6 text-white">The Solution</h2>
              <p className="text-neutral-300 leading-relaxed text-lg">
                In order to build a seamless and hassle-free experience for all the people who struggle to find parking spots for their vehicles, I designed ParkMe mobile app keeping the user needs and business goals in mind.
              </p>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-3xl overflow-hidden mb-12 border border-neutral-800 shadow-2xl">
             <img src={parkMeScreens} alt="ParkMe Mobile Interfaces" className="w-full h-auto object-contain" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-4">
                <Layout size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Smart Slot Selection</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Real-time visualization of parking zones showing exactly which spots are free (e.g., "4 Slots Free"). Users can choose their preferred location before arriving.
              </p>
            </div>

            <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center text-purple-400 mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Seamless Booking</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                One-tap booking system with clear location details like "Plot No - M03, Sector 18, Noida". The interface provides instant confirmation for your selected zone.
              </p>
            </div>

            <div className="bg-neutral-900/50 p-6 rounded-2xl border border-neutral-800">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">Live Parking Timer</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Active tracking of parking duration with a clear countdown timer ("35 M : 21 S"). Users can monitor their session and easily stop the meter when they leave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Test */}
      <section className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900">Design Test</h2>
        <p className="text-lg text-neutral-600 leading-relaxed">
          Here I have applied task based method for design testing with users
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
                 <tr className="bg-blue-900 text-white">
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
                     <td className="p-4 text-neutral-700">Find Parking Slots</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50">
                     <td className="p-4 font-bold text-neutral-900">2</td>
                     <td className="p-4 text-neutral-700">Filter by Vehicle type</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><AlertCircle className="text-orange-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><AlertCircle className="text-orange-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50">
                     <td className="p-4 font-bold text-neutral-900">3</td>
                     <td className="p-4 text-neutral-700">Are you finding free / parking slots</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><AlertCircle className="text-orange-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><XCircle className="text-red-500 mx-auto" size={20} /></td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50">
                     <td className="p-4 font-bold text-neutral-900">4</td>
                     <td className="p-4 text-neutral-700">Are you able to complete selecting slot and payment</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><AlertCircle className="text-orange-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><XCircle className="text-red-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><AlertCircle className="text-orange-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><AlertCircle className="text-orange-500 mx-auto" size={20} /></td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50">
                     <td className="p-4 font-bold text-neutral-900">5</td>
                     <td className="p-4 text-neutral-700">Navigation & Calling Parking premises people</td>
                     <td className="p-4 text-center"><CheckCircle2 className="text-green-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><AlertCircle className="text-orange-500 mx-auto" size={20} /></td>
                     <td className="p-4 text-center"><AlertCircle className="text-orange-500 mx-auto" size={20} /></td>
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

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  const projects = [
    {
      id: "parkme",
      title: "ParkMe",
      description: "UX Case Study for Smart Parking Solution",
      year: "2026",
      category: "UX Research",
      image: parkMeIntro,
      onClick: () => setActiveProject('parkme')
    },
    {
      id: "soundwave",
      title: "Soundwave",
      description: "Designing an Immersive Audio Tech Experience",
      year: "2025",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1588780383829-2e16c0085c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwZGFyayUyMG5lb24lMjBtdXNpYyUyMHN0dWRpb3xlbnwxfHx8fDE3NzE1MDMyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      onClick: () => setActiveProject('soundwave')
    },
    {
      id: "fintech",
      title: "Nova Bank",
      description: "Next Gen Digital Banking Dashboard",
      year: "2025",
      category: "Fintech",
      image: "https://images.unsplash.com/photo-1618439569122-eddffc5104b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMGFyY2hpdGVjdHVyZSUyMGJsdWUlMjBidWlsZGluZyUyMHNreXNjcmFwZXJ8ZW58MXx8fHwxNzcxNTAzMjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      onClick: () => setActiveProject('fintech')
    },
    {
      id: "travel",
      title: "Wanderlust",
      description: "Travel Planning & Booking App",
      year: "2024",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1691647432227-0c084e0ad818?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHAlMjBhZHZlbnR1cmUlMjBtb3VudGFpbnMlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcxNTA1NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      onClick: () => setActiveProject('travel')
    },
    {
      id: "health",
      title: "Zen Yoga",
      description: "Wellness & Meditation Platform",
      year: "2024",
      category: "Health",
      image: "https://images.unsplash.com/photo-1758466872243-496929504a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHJldHJlYXQlMjBwZWFjZWZ1bCUyMHN0dWRpb3xlbnwxfHx8fDE3NzE1MDU3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      onClick: () => setActiveProject('health')
    },
    {
      id: "ecommerce",
      title: "Luxe Living",
      description: "Modern Furniture E-Commerce Store",
      year: "2023",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1757439402103-fc35542f96f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZnVybml0dXJlJTIwbHV4dXJ5JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcxNTA1NzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      onClick: () => setActiveProject('ecommerce')
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <AnimatePresence>
        {activeProject === 'parkme' && (
          <ParkMeCaseStudy onClose={() => setActiveProject(null)} />
        )}
        {activeProject === 'soundwave' && (
          <SoundwaveCaseStudy onClose={() => setActiveProject(null)} />
        )}
        {activeProject === 'fintech' && (
          <NovaBankCaseStudy onClose={() => setActiveProject(null)} />
        )}
        {activeProject === 'travel' && (
          <WanderlustCaseStudy onClose={() => setActiveProject(null)} />
        )}
        {activeProject === 'health' && (
          <ZenYogaCaseStudy onClose={() => setActiveProject(null)} />
        )}
        {activeProject === 'ecommerce' && (
          <LuxeLivingCaseStudy onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>

      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-serif uppercase">Portfolio</h2>
        <p className="text-sm text-neutral-500 max-w-xs text-right">
          Explore my recent web design creations and discover how we can transform your vision into reality.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            onClick={project.onClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`w-full group cursor-pointer ${project.id === 'parkme' ? '' : ''}`}
          >
            <div className="relative w-full aspect-[4/5] bg-neutral-900 overflow-hidden rounded-2xl mb-6">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src={project.image}
                alt={project.title} 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
              />
                            {project.id === 'parkme' && (
                <img 
                  src="https://images.unsplash.com/photo-1747573235085-aa6b21b92e07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBwYXJraW5nJTIwbG90JTIwY2FycyUyMG91dGRvb3J8ZW58MXx8fHwxNzcxNTAyODQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                 <p className="text-white text-sm font-light mb-2 flex items-center gap-2">
                   View Project <ArrowRight size={16} />
                 </p>
              </div>
            </div>
            
            <div className="border-t border-neutral-300 pt-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold uppercase">{project.title}</h3>
                <span className="text-neutral-400 text-sm">{project.year}</span>
              </div>
              <div className="flex justify-between items-center">
                 <p className="text-neutral-500 text-sm truncate pr-4">{project.description}</p>
                 <span className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">{project.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 max-w-7xl mx-auto bg-white/40 backdrop-blur-sm rounded-3xl mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Let's Work Together</h2>
          <p className="text-neutral-600 mb-12 max-w-md">
            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-black text-white p-3 rounded-full">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:hello@mohanpatcha.com" className="text-neutral-600 hover:text-black transition-colors">hello@mohanpatcha.com</a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-black text-white p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide mb-1">Location</p>
                <p className="text-neutral-600">Hyderabad, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-black text-white p-3 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-wide mb-1">Phone</p>
                <p className="text-neutral-600">+91 (988) 541-7755</p>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe"
                className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com"
                className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest">Subject</label>
            <input 
              type="text" 
              id="subject" 
              placeholder="Project Inquiry"
              className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest">Message</label>
            <textarea 
              id="message" 
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full bg-transparent border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors resize-none"
            ></textarea>
          </div>

          <button className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-full hover:bg-neutral-800 transition-all font-medium tracking-wide uppercase text-sm mt-4">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 md:px-12 border-t border-neutral-300 bg-neutral-200">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <h2 className="text-8xl font-serif opacity-10">MP</h2>
      </div>
      <div className="flex gap-8">
        <a href="https://www.instagram.com/always.mohan/" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest hover:underline">Instagram</a>
        <a href="https://www.linkedin.com/in/mohanpatcha/" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest hover:underline">LinkedIn</a>
        <a href="https://dribbble.com/mohanpatcha" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest hover:underline">Dribbble</a>
        <a href="https://www.behance.net/mohanpatcha" target="_blank" rel="noopener noreferrer" className="text-sm uppercase tracking-widest hover:underline">Behance</a>
      </div>
      <div className="text-sm text-neutral-500">
        © 2026 Mohan Patcha. All rights reserved.
      </div>
    </div>
  </footer>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen relative">
      <GlobalStyles />
      <div className="noise-bg"></div>
      
      <Navbar onMenuClick={toggleMenu} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onNavigate={scrollToSection} />
      
      <main className="relative z-10">
        <Hero onContactClick={() => scrollToSection('contact')} />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
