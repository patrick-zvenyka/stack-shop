import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "KPI & Performance | StackShop Management" },
    { name: "description", content: "Granular tracking of unit-level velocity and operational performance." },
  ];
};

export default function Performance() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">KPI Benchmarks</h3>
        <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Operational velocity across all business units.</p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden text-left w-full">
         <table className="w-full">
           <thead>
             <tr className="border-b border-gray-100 dark:border-gray-800">
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Org Unit</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Target</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Current</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Deviation</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Trend</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50 text-sm font-black">
             <KPIRow unit="Logistics" target="2.0 Days" current="1.2 Days" deviation="-40%" positive />
             <KPIRow unit="Finance" target="98% Match" current="100% Match" deviation="+2%" positive />
             <KPIRow unit="Retail (POS)" target="$1.2M Rev" current="$1.1M Rev" deviation="-8%" />
             <KPIRow unit="Stock (Whse)" target="0.5% Loss" current="0.2% Loss" deviation="-60%" positive />
           </tbody>
         </table>
      </div>
    </div>
  );
}

function KPIRow({ unit, target, current, deviation, positive }: { unit: string; target: string; current: string; deviation: string; positive?: boolean }) {
  return (
    <tr className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
       <td className="px-8 py-6 text-gray-900 dark:text-white">{unit}</td>
       <td className="px-8 py-6 text-gray-400">{target}</td>
       <td className="px-8 py-6 text-gray-900 dark:text-white">{current}</td>
       <td className={`px-8 py-6 ${positive ? 'text-emerald-500' : 'text-red-500'}`}>{deviation}</td>
       <td className="px-8 py-6 text-right">
          <div className={`w-8 h-4 rounded-full inline-flex items-center justify-center ${positive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={positive ? '-rotate-45' : 'rotate-45'}>
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
             </svg>
          </div>
       </td>
    </tr>
  );
}
