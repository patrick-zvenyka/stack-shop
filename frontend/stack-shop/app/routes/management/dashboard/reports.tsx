import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Executive Reports | StackShop Management" },
    { name: "description", content: "High-level summary documents for board review and strategic alignment." },
  ];
};

export default function ManagementReports() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Executive Library</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Access verified board-ready strategic documentation.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <ReportCard title="Operational Performance Summary" period="Monthly (Feb 2026)" type="PDF + Interactive" />
         <ReportCard title="Market Stability Analysis" period="Quarterly (Q1 2026)" type="PDF" />
      </div>

      <div className="bg-white dark:bg-gray-900 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-sm">
         <h4 className="text-lg font-black dark:text-white mb-8">Archived Management Artifacts</h4>
         <div className="space-y-4">
            <ArchiveDoc title="Global Logistics Integration Roadmap" date="Dec 2025" owner="ER (CEO)" />
            <ArchiveDoc title="Annual Operational Audit" date="Nov 2025" owner="SM (CFO)" />
            <ArchiveDoc title="Seed Series Deployment Report" date="Oct 2025" owner="ER (CEO)" />
         </div>
      </div>
    </div>
  );
}

function ReportCard({ title, period, type }: { title: string; period: string; type: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-800 hover:border-slate-400 group transition-all duration-500 overflow-hidden relative">
       <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 dark:bg-slate-800 rounded-full -mr-16 -mt-16 group-hover:bg-slate-900 transition-colors duration-500"></div>
       <div className="relative z-10">
          <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400 mb-6 group-hover:text-white transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          </div>
          <h4 className="text-xl font-black dark:text-white mb-1 leading-tight group-hover:text-white transition-colors">{title}</h4>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{period}</p>
          <div className="flex justify-between items-center">
             <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{type}</span>
             <button className="px-6 py-2 bg-slate-900 text-white dark:bg-white dark:text-black rounded-full font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">Download</button>
          </div>
       </div>
    </div>
  );
}

function ArchiveDoc({ title, date, owner }: { title: string; date: string; owner: string }) {
  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-50 dark:border-gray-800 last:border-0 group hover:px-2 transition-all">
       <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400">
             <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <div>
             <div className="text-sm font-black text-gray-900 dark:text-white mb-1 leading-none">{title}</div>
             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{date}</div>
          </div>
       </div>
       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">{owner}</span>
    </div>
  );
}
