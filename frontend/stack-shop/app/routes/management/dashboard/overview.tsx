import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Strategic Overview | StackShop Management" },
    { name: "description", content: "Executive dashboard for high-level operational oversight." },
  ];
};

export default function StrategicOverview() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Strategic Pulse */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <ExecutiveStatCard label="Operating Revenue" value="$4.2M" trend="+12.4%" color="text-slate-900" description="Quarter-to-date yield" />
        <ExecutiveStatCard label="Unit Efficiency" value="94.2%" trend="+2.1%" color="text-emerald-600" description="Logistics performance" />
        <ExecutiveStatCard label="Risk Index" value="Low" trend="-5%" color="text-blue-600" description="Market stability factor" />
        <ExecutiveStatCard label="Headcount" value="124" trend="+4" color="text-slate-500" description="Global staff count" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-gray-900 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-sm">
             <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-none">Global Performance Stream</h3>
                <div className="flex gap-2">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Real-time Feed</span>
                </div>
             </div>
             
             <div className="space-y-6">
                <PerformanceRow label="North America Revenue" value="$2.1M" progress={85} />
                <PerformanceRow label="EMEA Logistics Speed" value="1.2 Days" progress={92} color="bg-blue-500" />
                <PerformanceRow label="APAC Inventory Health" value="Stable" progress={74} color="bg-amber-500" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <ToolModuleCard title="Strategic Planning" description="Forecast models and annual roadmap alignment." />
             <ToolModuleCard title="KPI & Performance" description="Granular tracking of unit-level velocity." />
          </div>
        </div>

        <div className="space-y-8">
           <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-700/50 blur-3xl rounded-full -mr-10 -mt-10"></div>
              <h4 className="text-lg font-black mb-6 relative z-10">Quarterly Target</h4>
              <div className="text-4xl font-black mb-2 relative z-10">$5.0M</div>
              <p className="text-slate-400 text-xs mb-8 relative z-10">You are currently 84% of the way to the Q1 revenue milestone.</p>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-8 relative z-10">
                 <div className="h-full bg-white rounded-full w-[84%]"></div>
              </div>
              <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-sm hover:scale-[1.02] transition-all relative z-10">
                Generate Report
              </button>
           </div>

           <div className="bg-white dark:bg-gray-900 p-8 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-sm">
              <h4 className="text-lg font-black dark:text-white mb-6">Staffing Overview</h4>
              <div className="space-y-4">
                 <StaffMetric label="Finance" count="12" />
                 <StaffMetric label="Logistics" count="45" />
                 <StaffMetric label="Retail (POS)" count="67" />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

function ExecutiveStatCard({ label, value, trend, color, description }: { label: string; value: string; trend: string; color: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm group">
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <div className="flex items-baseline gap-2 mb-2">
        <div className={`text-3xl font-black ${color} dark:text-white`}>{value}</div>
        <div className="text-[10px] font-black text-emerald-500">{trend}</div>
      </div>
      <p className="text-[10px] font-bold text-gray-500">{description}</p>
    </div>
  );
}

function PerformanceRow({ label, value, progress, color }: { label: string; value: string; progress: number; color?: string }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className="font-bold text-gray-600 dark:text-gray-400">{label}</span>
        <span className="font-black text-gray-900 dark:text-white">{value}</span>
      </div>
      <div className="w-full h-1.5 bg-gray-50 dark:bg-gray-800 rounded-full overflow-hidden">
        <div className={`h-full ${color || 'bg-slate-900 dark:bg-slate-100'} rounded-full`} style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

function ToolModuleCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 hover:border-slate-400 transition-all cursor-pointer group">
       <h4 className="text-lg font-black dark:text-white mb-2 group-hover:text-slate-600 transition-colors tracking-tight">{title}</h4>
       <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

function StaffMetric({ label, count }: { label: string; count: string }) {
  return (
    <div className="flex justify-between items-center text-sm font-bold">
       <span className="text-gray-500">{label}</span>
       <span className="text-slate-900 dark:text-white">{count}</span>
    </div>
  );
}
