export function GlobalFooter() {
  return (
    <footer className="py-12 border-t border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-950/50 backdrop-blur-sm transition-colors duration-500 mt-auto">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            </div>
            <div>
              <span className="text-xl font-black tracking-tighter dark:text-white block leading-none">STACK<span className="text-blue-600">SHOP</span></span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Enterprise OS</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            <FooterLink label="System Status" href="#" pulse />
            <FooterLink label="Documentation" href="#" />
            <FooterLink label="Security Policy" href="#" />
            <FooterLink label="Support Desk" href="#" />
          </div>
        </div>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-8"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            &copy; 2026 <span className="font-bold text-gray-900 dark:text-white">StackShop Enterprise Solutions</span>. Engineered for excellence.
          </p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 bg-blue-100 dark:bg-blue-900/30"></div>
              <div className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 bg-indigo-100 dark:bg-indigo-900/30"></div>
              <div className="w-6 h-6 rounded-full border-2 border-white dark:border-gray-900 bg-emerald-100 dark:bg-emerald-900/30"></div>
            </div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Ambient</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ label, href, pulse }: { label: string; href: string; pulse?: boolean }) {
  return (
    <a 
      href={href} 
      className="text-sm font-bold text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors flex items-center gap-2 group"
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      )}
      {label}
    </a>
  );
}
