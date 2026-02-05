import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Financial Reports | StackShop Finance" },
    { name: "description", content: "P&L statements, balance sheets, and audit-ready financial snapshots." },
  ];
};

export default function Reports() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Financial Reports</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Generate and export official financial documentation.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ReportCard title="P&L Statement" period="Q1 2026" />
        <ReportCard title="Balance Sheet" period="As of Today" />
        <ReportCard title="Cash Flow" period="Last 30 Days" />
      </div>

      <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800">
        <h4 className="text-lg font-black dark:text-white mb-6">Archived Statements</h4>
        <div className="space-y-4">
           <ArchiveRow title="Annual Financial Overview" date="Dec 31, 2025" size="2.4 MB" />
           <ArchiveRow title="Tax Compliance Audit" date="Nov 15, 2025" size="1.1 MB" />
           <ArchiveRow title="Quarterly Earnings Report" date="Oct 01, 2025" size="1.8 MB" />
        </div>
      </div>
    </div>
  );
}

function ReportCard({ title, period }: { title: string; period: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 hover:border-emerald-500/50 transition-all group overflow-hidden relative">
      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 dark:bg-emerald-900/10 rounded-full -mr-8 -mt-8 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 mb-6 group-hover:text-emerald-500 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950 transition-all">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      </div>
      <h4 className="text-lg font-black dark:text-white mb-1 leading-none">{title}</h4>
      <p className="text-xs font-bold text-gray-400 mb-6 tracking-widest uppercase">{period}</p>
      <button className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl text-xs transition-all shadow-md shadow-emerald-500/10">DOWNLOAD PDF</button>
    </div>
  );
}

function ArchiveRow({ title, date, size }: { title: string; date: string; size: string }) {
  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-50 dark:border-gray-800 last:border-0">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400">
           <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
        </div>
        <div>
          <div className="text-sm font-black text-gray-900 dark:text-white leading-none mb-1">{title}</div>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{date}</div>
        </div>
      </div>
      <div className="text-xs font-black text-gray-500 uppercase tracking-widest">{size}</div>
    </div>
  );
}
