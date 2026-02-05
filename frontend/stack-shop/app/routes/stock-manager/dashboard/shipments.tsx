import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Incoming Shipments | StackShop Stock Manager" },
    { name: "description", content: "Process freight arrivals and verify manifests." },
  ];
};

export default function Shipments() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Incoming Shipments</h3>
        <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Pending freight arrivals and manifest verification queue.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ShipmentCard id="MF-8291" origin="Shenzen Port" type="Sea Freight" arrival="Feb 06" status="In Transit" />
        <ShipmentCard id="MF-8294" origin="Frankfurt Hub" type="Air Freight" arrival="Feb 05" status="Arriving" alert />
      </div>

      <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
        <h4 className="text-lg font-black dark:text-white mb-6">Recent Arrivals (Verified)</h4>
        <div className="space-y-4">
           <ArrivalRow id="MF-8290" date="Feb 04" cargo="Electronics (400 Units)" source="EU Logistics" />
           <ArrivalRow id="MF-8289" date="Feb 03" cargo="Apparel (1,200 Units)" source="Global Electronics" />
        </div>
      </div>
    </div>
  );
}

function ShipmentCard({ id, origin, type, arrival, status, alert }: { id: string; origin: string; type: string; arrival: string; status: string; alert?: boolean }) {
  return (
    <div className={`p-8 bg-white dark:bg-gray-900 rounded-[2.5rem] border ${alert ? 'border-orange-500/50' : 'border-gray-100 dark:border-gray-800'} shadow-sm relative overflow-hidden group`}>
      <div className="flex justify-between items-start mb-6">
        <div>
          <div className="text-xs font-black text-amber-600 uppercase tracking-widest mb-1">{id}</div>
          <h4 className="text-xl font-black dark:text-white">{origin}</h4>
        </div>
        <div className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full ${alert ? 'bg-orange-500 text-white animate-pulse' : 'bg-amber-100 text-amber-700'}`}>
          {status}
        </div>
      </div>
      <div className="flex justify-between items-end">
        <div className="space-y-1">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Expected Arrival</div>
          <div className="text-lg font-black dark:text-white">{arrival} 2026</div>
        </div>
        <div className="text-right">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Transport</div>
          <div className="text-sm font-black text-gray-600 dark:text-gray-300">{type}</div>
        </div>
      </div>
    </div>
  );
}

function ArrivalRow({ id, date, cargo, source }: { id: string; date: string; cargo: string; source: string }) {
  return (
    <div className="flex justify-between items-center py-4 border-b border-gray-50 dark:border-gray-800 last:border-0">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-900/10 flex items-center justify-center text-emerald-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <div>
          <div className="text-sm font-black text-gray-900 dark:text-white leading-none mb-1">{cargo}</div>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{id} • {source}</div>
        </div>
      </div>
      <div className="text-xs font-black text-gray-500 uppercase tracking-widest">{date}</div>
    </div>
  );
}
