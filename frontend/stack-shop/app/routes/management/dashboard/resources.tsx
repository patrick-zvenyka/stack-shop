import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Resource Allocation | StackShop Management" },
    { name: "description", content: "Executive oversight of global staff and hub resource distribution." },
  ];
};

export default function Resources() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Resource Allocation</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Manage global human capital and physical hub assets.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ResourceUnit icon="💼" label="Strategic Staff" count="24" allocation="High" />
        <ResourceUnit icon="📦" label="Warehouse Nodes" count="3" allocation="Optimal" />
        <SidebarStat icon="🚚" label="Logistics Fleet" count="12" allocation="Expanding" />
      </div>

      <div className="bg-white dark:bg-gray-900 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-sm">
         <h4 className="text-lg font-black dark:text-white mb-8">Departmental Headcount Distribution</h4>
         <div className="space-y-6">
            <StaffDistribution label="Logistics Operations" count={45} total={124} color="bg-amber-500" />
            <StaffDistribution label="Retail Management" count={67} total={124} color="bg-indigo-500" />
            <StaffDistribution label="Financial Services" count={12} total={124} color="bg-emerald-500" />
         </div>
      </div>
    </div>
  );
}

function ResourceUnit({ icon, label, count, allocation }: { icon: string; label: string; count: string; allocation: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center text-center">
       <div className="text-4xl mb-4">{icon}</div>
       <div className="text-2xl font-black dark:text-white mb-1">{count}</div>
       <p className="text-sm font-bold text-gray-400 mb-6">{label}</p>
       <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-50 dark:bg-slate-800 px-3 py-1 rounded-full">{allocation}</span>
    </div>
  );
}

function SidebarStat({ icon, label, count, allocation }: { icon: string; label: string; count: string; allocation: string }) {
  return (
    <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl shadow-slate-500/20 flex flex-col items-center text-center">
       <div className="text-4xl mb-4">{icon}</div>
       <div className="text-2xl font-black mb-1">{count}</div>
       <p className="text-sm font-bold text-slate-400 mb-6">{label}</p>
       <span className="text-[10px] font-black uppercase tracking-widest text-white/50 bg-white/10 px-3 py-1 rounded-full">{allocation}</span>
    </div>
  );
}

function StaffDistribution({ label, count, total, color }: { label: string; count: number; total: number; color: string }) {
  const percentage = (count / total) * 100;
  return (
    <div className="space-y-2">
       <div className="flex justify-between items-center text-sm font-black">
          <span className="text-gray-500">{label}</span>
          <span className="dark:text-white">{count} Members</span>
       </div>
       <div className="w-full h-3 bg-gray-50 dark:bg-gray-800 rounded-full overflow-hidden">
          <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }}></div>
       </div>
    </div>
  );
}
