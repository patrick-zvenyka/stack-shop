import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Quality Audits | StackShop Stock Manager" },
    { name: "description", content: "Mandatory stock verification cycles and damaged goods reporting." },
  ];
};

export default function Audits() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Quality Audits</h3>
        <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Immutable records of stock verification cycles and damage reports.</p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
         <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-3xl mx-auto flex items-center justify-center text-gray-300 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
         </div>
         <h4 className="text-xl font-black dark:text-white mb-2">Initiate Batch Audit</h4>
         <p className="text-sm text-gray-500 max-w-sm mx-auto mb-8 leading-relaxed">Select a warehouse zone or scan a batch ID to begin a quality verification cycle.</p>
         
         <div className="max-w-md mx-auto relative group">
            <input 
              type="text" 
              placeholder="Scan Batch ID or Zone Code..."
              className="w-full bg-gray-50 dark:bg-gray-800 border focus:border-amber-500 rounded-2xl px-6 py-4 text-center text-sm font-bold outline-none transition-all"
            />
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800">
           <h4 className="text-lg font-black dark:text-white mb-6">Recent Audit Reports</h4>
           <div className="space-y-4">
              <AuditEntry zone="ZONE-A (High Value)" date="Feb 03" status="PASSED" />
              <AuditEntry zone="ZONE-D (Bulk Storage)" date="Feb 02" status="WARNING" />
              <AuditEntry zone="EXP-RACK-02" date="Jan 31" status="PASSED" />
           </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center text-center">
           <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4">Stock Integrity Rating</div>
           <div className="text-4xl font-black text-amber-600">99.4%</div>
           <p className="text-xs font-bold text-gray-500 mt-2">Verified across 12,400 units</p>
        </div>
      </div>
    </div>
  );
}

function AuditEntry({ zone, date, status }: { zone: string; date: string; status: 'PASSED' | 'WARNING' }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-50 dark:border-gray-800 last:border-0">
       <div>
          <div className="text-sm font-bold text-gray-800 dark:text-gray-200">{zone}</div>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{date}</div>
       </div>
       <div className={`text-[10px] font-black tracking-widest px-2 py-0.5 rounded-md ${
         status === 'PASSED' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20' : 'bg-orange-50 text-orange-600 dark:bg-orange-900/20'
       }`}>
          {status}
       </div>
    </div>
  );
}
