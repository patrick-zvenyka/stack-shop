import { Link } from "react-router";
import { useState, useEffect } from "react";
import { ThemeToggle } from "../components/ThemeProvider";

export function Welcome() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ["Powers Performance.", "Simplifies Retail.", "Empowers Growth.", "Mastering Commerce."];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  const handleTyping = () => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    if (isDeleting) {
      setDisplayText(fullText.substring(0, displayText.length - 1));
      setTypingSpeed(50);
    } else {
      setDisplayText(fullText.substring(0, displayText.length + 1));
      setTypingSpeed(150);
    }

    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
    }
  };

  return (
    <div className="min-h-screen selection:bg-blue-100 dark:selection:bg-blue-900 transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#fdfcf0]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-100/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform duration-300">
              <ShopIcon className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 group-hover:tracking-widest transition-all duration-500">
              STACK<span className="text-blue-600">SHOP</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-bold hover:text-blue-600 transition-colors hover:translate-y-[-2px] inline-block duration-200">Features</a>
            <a href="#portals" className="text-sm font-bold hover:text-blue-600 transition-colors hover:translate-y-[-2px] inline-block duration-200">Portals</a>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <button className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-blue-600 dark:hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 active:scale-95">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800 mb-8 hover:scale-105 transition-transform duration-300 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-black text-blue-700 dark:text-blue-400 tracking-wide uppercase">Core Intelligence v2.0</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1] min-h-[3.3em] md:min-h-[2.2em]">
            Management that <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 border-r-4 border-blue-600 pr-2">
              {displayText}
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12 leading-relaxed animate-fade-in">
            The all-in-one operating system for your retail business. From real-time inventory to point-of-sale, managed with enterprise-grade precision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#portals" className="px-8 py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-500/25 hover:bg-blue-700 hover:shadow-blue-500/40 hover:-translate-y-1.5 transition-all duration-300 active:scale-95 leading-none flex items-center">
              Access System Portals
            </a>
            <button className="px-8 py-4 bg-white/50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 font-black rounded-2xl hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg transition-all duration-300 active:scale-95 leading-none flex items-center">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-20 px-6 border-y border-gray-100/50 dark:border-gray-900/50 bg-[#f8f7eb]/50 dark:bg-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              title="Predictive Inventory"
              description="Never run out of stock with our AI-driven demand forecasting and supplier integration."
              icon={<InventoryIcon className="w-8 h-8" />}
            />
            <FeatureCard 
              title="Universal POS"
              description="Fast, reliable checkout across all platforms with integrated payments and loyalty."
              icon={<POSIcon className="w-8 h-8" />}
            />
            <FeatureCard 
              title="Real-time Analytics"
              description="Instant insights into sales patterns, profit margins, and employee performance."
              icon={<AnalyticsIcon className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Portals Section */}
      <section id="portals" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tight mb-4">Secure Access Portals</h2>
            <p className="text-gray-500 dark:text-gray-400">Select your role to access your personalized workspace.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {systemViews.map((view) => (
              <Link
                key={view.to}
                to={view.to}
                className="group relative bg-white/80 dark:bg-gray-900 p-8 rounded-[2rem] border border-gray-100/50 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-3 transition-all duration-500 active:scale-[0.98]"
              >
                <div className={`w-14 h-14 rounded-2xl ${view.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  {view.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">{view.text}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                  {view.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-black text-blue-600 group-hover:gap-4 transition-all uppercase tracking-widest">
                  Login <ArrowIcon className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-100/50 dark:border-gray-800 text-center bg-[#fdfcf0] dark:bg-black/20 backdrop-blur-sm">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          &copy; 2026 StackShop Enterprise Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="space-y-4 group p-6 rounded-3xl hover:bg-white/60 dark:hover:bg-gray-800/40 transition-all duration-300 hover:shadow-lg hover:shadow-black/5">
      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 dark:border-gray-800 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        {icon}
      </div>
      <h4 className="text-xl font-black group-hover:text-blue-600 transition-colors">{title}</h4>
      <p className="text-gray-500 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">{description}</p>
    </div>
  );
}

const systemViews = [
  {
    to: "/administrator/login",
    text: "Admin",
    description: "System backbone and security controls.",
    color: "bg-blue-50 dark:bg-blue-900/30 text-blue-600",
    icon: <AdminIcon />
  },
  {
    to: "/finance/login",
    text: "Finance",
    description: "Financial audits and revenue streams.",
    color: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600",
    icon: <FinanceIcon />
  },
  {
    to: "/pos/login",
    text: "POS",
    description: "Fast-lane sales and digital payments.",
    color: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600",
    icon: <POSIcon />
  },
  {
    to: "/management/login",
    text: "Management",
    description: "Staff sync and operational metrics.",
    color: "bg-purple-50 dark:bg-purple-900/30 text-purple-600",
    icon: <ManagementIcon />
  },
  {
    to: "/stock-manager/login",
    text: "Inventory",
    description: "Stock levels and supplier chains.",
    color: "bg-amber-50 dark:bg-amber-900/30 text-amber-600",
    icon: <InventoryIcon />
  },
];

// Reusable SVG Icons
function ShopIcon({ className }: { className?: string }) {
  return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
}

function AdminIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
}

function FinanceIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
}

function POSIcon({ className }: { className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>;
}

function ManagementIcon() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
}

function InventoryIcon({ className }: { className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M2 7v13a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7"/><path d="M2 7h20"/><path d="M10 12h4"/></svg>;
}

function AnalyticsIcon({ className }: { className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>;
}

function ArrowIcon({ className }: { className?: string }) {
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
}
