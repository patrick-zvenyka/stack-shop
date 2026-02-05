import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Infrastructure Management | StackShop Admin" },
    { name: "description", content: "Manage branches, hubs, and regional clusters." },
  ];
};

export default function Infrastructure() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Global Infrastructure</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Entity management for branches, distribution hubs, and region mapping.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NodeCard 
          region="North America" 
          clusters={12} 
          nodes={45} 
          traffic="4.2M req/h" 
          status="online"
        />
        <NodeCard 
          region="Europe Central" 
          clusters={8} 
          nodes={32} 
          traffic="2.8M req/h" 
          status="online"
        />
        <NodeCard 
          region="Asia Pacific" 
          clusters={6} 
          nodes={24} 
          traffic="1.5M req/h" 
          status="online"
        />
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm p-8">
        <h4 className="text-lg font-black dark:text-white mb-6">Distribution Hubs</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <HubBadge name="Hub Alpha" location="New York" stock="85%" />
          <HubBadge name="Hub Bravo" location="London" stock="92%" />
          <HubBadge name="Hub Charlie" location="Tokyo" stock="45%" warning />
          <HubBadge name="Hub Delta" location="Berlin" stock="100%" />
        </div>
      </div>
    </div>
  );
}

function NodeCard({ region, clusters, nodes, traffic, status }: { region: string; clusters: number; nodes: number; traffic: string; status: 'online' | 'degraded' }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h4 className="text-xl font-black dark:text-white leading-none">{region}</h4>
          <p className="text-xs font-bold text-emerald-500 mt-2 flex items-center gap-1">
             <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
             Primary Cluster Operating
          </p>
        </div>
        <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Clusters</span>
          <div className="text-lg font-black dark:text-white">{clusters} Units</div>
        </div>
        <div className="space-y-1">
           <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Live Nodes</span>
           <div className="text-lg font-black dark:text-white">{nodes} Active</div>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-50 dark:border-gray-800 flex justify-between items-center">
         <span className="text-xs font-bold text-gray-500">{traffic}</span>
         <button className="text-[10px] font-black text-blue-600 hover:underline">VIEW METRICS</button>
      </div>
    </div>
  );
}

function HubBadge({ name, location, stock, warning }: { name: string; location: string; stock: string; warning?: boolean }) {
  return (
    <div className={`p-5 rounded-3xl border ${warning ? 'border-red-100 bg-red-50/50 dark:border-red-900/30' : 'border-gray-100 dark:border-gray-800'} transition-all`}>
      <div className="text-xs font-black text-gray-900 dark:text-white mb-1">{name}</div>
      <div className="text-[10px] font-bold text-gray-400 mb-3">{location}</div>
      <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
         <div className={`h-full rounded-full ${warning ? 'bg-red-500' : 'bg-blue-600'}`} style={{ width: stock }}></div>
      </div>
      <div className="mt-2 text-[10px] font-black text-right text-gray-500">{stock} Capacity</div>
    </div>
  );
}
