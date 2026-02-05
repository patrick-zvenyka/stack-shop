import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Strategic Planning | StackShop Management" },
    { name: "description", content: "Forecast models and annual roadmap alignment." },
  ];
};

export default function Planning() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Strategic Planning</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Configure roadmap targets and annual growth projections.</p>
        </div>
        <button className="px-6 py-3 bg-slate-900 text-white font-black rounded-2xl shadow-lg shadow-slate-500/20 text-sm hover:scale-[1.02] flex items-center gap-2 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Add Goal
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PlanningCard 
          title="Market Expansion" 
          description="Launch in Northern Hubs with 12 new retail terminals."
          progress={45}
          deadline="June 2026"
        />
        <PlanningCard 
          title="Supply Optimization" 
          description="Reduce freight lead-times by 12% across Sea routes."
          progress={72}
          deadline="Dec 2026"
        />
      </div>

      <div className="bg-white dark:bg-gray-900 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-sm">
         <h4 className="text-lg font-black dark:text-white mb-6">Historical Forecast Accuracy</h4>
         <div className="flex items-end gap-2 h-48">
            <Bar height="40%" label="Jan" />
            <Bar height="65%" label="Feb" />
            <Bar height="90%" label="Mar" active />
            <Bar height="45%" label="Apr" />
            <Bar height="60%" label="May" />
         </div>
      </div>
    </div>
  );
}

function PlanningCard({ title, description, progress, deadline }: { title: string; description: string; progress: number; deadline: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm space-y-6">
       <div className="flex justify-between items-start">
         <h4 className="text-xl font-black dark:text-white leading-tight">{title}</h4>
         <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{deadline}</span>
       </div>
       <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
       <div className="space-y-2">
         <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
           <span>Completion</span>
           <span>{progress}%</span>
         </div>
         <div className="w-full h-2 bg-gray-50 dark:bg-gray-800 rounded-full overflow-hidden">
           <div className="h-full bg-slate-900 dark:bg-slate-100 rounded-full" style={{ width: `${progress}%` }}></div>
         </div>
       </div>
    </div>
  );
}

function Bar({ height, label, active }: { height: string; label: string; active?: boolean }) {
  return (
    <div className="flex-1 flex flex-col items-center gap-4">
       <div className={`w-full rounded-t-xl transition-all ${active ? 'bg-slate-900 dark:bg-slate-100' : 'bg-slate-100 dark:bg-slate-800'}`} style={{ height }}></div>
       <span className="text-[10px] font-black text-gray-400 uppercase">{label}</span>
    </div>
  );
}
