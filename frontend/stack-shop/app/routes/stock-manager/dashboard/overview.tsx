import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Warehouse Overview | StackShop Stock Manager" },
    { name: "description", content: "Comprehensive warehouse management and logistics overview." },
  ];
};

export default function StockOverview() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Logistics Pulse Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard label="Total Units" value="24,802" color="text-amber-600" description="Across 3 regional hubs" icon={<PackageIcon />} />
        <StatCard label="Active Shipments" value="8" color="text-orange-600" description="3 arriving today" icon={<TruckIcon />} />
        <StatCard label="Stock Integrity" value="99.4%" color="text-emerald-600" description="Last audit 2 days ago" icon={<ShieldIcon />} />
        <StatCard label="Supply Value" value="$1.2M" color="text-indigo-600" description="Calculated FIFO cost" icon={<DollarIcon />} />
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">Warehouse Core Modules</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StockToolCard 
            title="Master Catalog"
            description="Manage global SKU definitions, technical specs, and warehouse allocation rules."
            icon={<CatalogIcon className="w-6 h-6" />}
            count="1,248 SKUs"
          />
          <StockToolCard 
            title="Incoming Units"
            description="Process freight arrivals, verify manifest accuracy, and register batch numbers."
            icon={<ArrivalIcon className="w-6 h-6" />}
            alert="3 shipments due"
          />
          <StockToolCard 
            title="Supplier Network"
            description="Manage vendor relations, pending purchase orders, and lead-time tracking."
            icon={<SupplierIcon className="w-6 h-6" />}
          />
          <StockToolCard 
            title="Quality Audits"
            description="Mandatory stock verification cycles, damaged goods reporting, and expiry management."
            icon={<AuditIcon className="w-6 h-6" />}
          />
          <StockToolCard 
            title="Logistics Map"
            description="Route optimization for hub-to-hub transfers and last-mile branch delivery."
            icon={<MapIcon className="w-6 h-6" />}
          />
          <StockToolCard 
            title="Unit Repack"
            description="Manage broken-bulk operations, bundle creation, and custom labeling."
            icon={<RepackIcon className="w-6 h-6" />}
          />
        </div>
      </div>

      {/* Manifest Stream and Capacity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
           <div className="flex justify-between items-center mb-6">
             <h4 className="text-lg font-black dark:text-white">Recent Freight Manifests</h4>
             <button className="text-xs font-bold text-amber-600 hover:underline hover:translate-x-1 transition-transform inline-flex items-center gap-1">View All Logs <ArrowIcon className="w-3" /></button>
           </div>
           <div className="space-y-6">
             <ManifestRow id="MF-8291" origin="Shenzen Port" destination="Hub Alpha (NYC)" status="In Transit" />
             <ManifestRow id="MF-8290" origin="EU Logistics" destination="Hub Bravo (LDN)" status="Delivered" />
             <ManifestRow id="MF-8289" origin="Global Electronics" destination="Hub Alpha (NYC)" status="Delivered" />
             <ManifestRow id="MF-8288" origin="Tech Components Co" destination="Hub Charlie (TYO)" status="Processing" />
           </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-amber-600 to-orange-700 p-8 rounded-[2.5rem] text-white shadow-xl shadow-amber-500/20 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-10 -mt-10"></div>
             <h4 className="text-lg font-black mb-2 relative z-10">Warehouse Capacity</h4>
             <div className="text-3xl font-black mb-4 relative z-10">84%</div>
             <p className="text-amber-100 text-sm mb-6 relative z-10 leading-relaxed">Storage utilization across primary racks is high. Optimize shelf allocation.</p>
             <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mb-6 relative z-10">
                <div className="h-full bg-white rounded-full w-[84%]"></div>
             </div>
             <button className="w-full py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl font-black text-sm transition-all group-hover:scale-[1.02]">
               Reallocate Storage
             </button>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
            <h4 className="text-lg font-black dark:text-white mb-4">Stock Alerts</h4>
            <div className="space-y-3">
               <StockAlert label="Critical Low Stock" count="12" type="error" />
               <StockAlert label="Audit Exceptions" count="2" type="warning" />
               <StockAlert label="New P.O. Approvals" count="5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StockToolCard({ title, description, icon, count, alert }: { title: string; description: string; icon: React.ReactNode; count?: string; alert?: string }) {
  return (
    <div className="group bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 flex flex-col items-start cursor-pointer">
      <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-900/30 dark:group-hover:text-amber-400 transition-all duration-500 mb-6 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <div className="flex-1 w-full">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-black dark:text-white group-hover:text-amber-600 transition-colors leading-snug">{title}</h4>
          {count && <span className="px-2.5 py-1 bg-amber-50 dark:bg-amber-900/10 text-[10px] font-black tracking-widest uppercase rounded-full text-amber-600">{count}</span>}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">{description}</p>
        <div className="w-full flex justify-between items-center">
           <span className="text-xs font-black text-amber-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all">ACCESS MODULE <ArrowIcon className="w-3" /></span>
           {alert && <span className="text-[10px] font-bold text-orange-600 truncate">{alert}</span>}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color, description, icon }: { label: string; value: string; color: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 text-gray-100 dark:text-gray-800 transition-transform group-hover:scale-110 group-hover:-rotate-12 duration-500">
        {icon}
      </div>
      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1 relative z-10">{label}</p>
      <div className={`text-3xl font-black ${color} mb-2 relative z-10`}>{value}</div>
      <p className="text-[10px] font-bold text-gray-500 leading-tight relative z-10">{description}</p>
    </div>
  );
}

function ManifestRow({ id, origin, destination, status }: { id: string; origin: string; destination: string; status: 'In Transit' | 'Delivered' | 'Processing' }) {
  return (
    <div className="flex justify-between items-center group">
      <div className="flex gap-4 items-center">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${status === 'Delivered' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20' : 'bg-amber-50 text-amber-600 dark:bg-amber-900/20'}`}>
          <ArrivalIcon className="w-5" />
        </div>
        <div>
          <div className="text-sm font-black text-gray-900 dark:text-white leading-none mb-1">{id}</div>
          <div className="text-xs font-bold text-gray-400">{origin} → {destination}</div>
        </div>
      </div>
      <div className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
        status === 'Delivered' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/10' : 'bg-amber-50 text-amber-600 dark:bg-amber-900/10'
      }`}>
        {status}
      </div>
    </div>
  );
}

function StockAlert({ label, count, type }: { label: string; count?: string; type?: 'warning' | 'error' | 'info' }) {
  const styles = {
    error: "bg-red-50 text-red-600 dark:bg-red-900/10",
    warning: "bg-orange-50 text-orange-600 dark:bg-orange-900/10",
    info: "bg-gray-50 text-gray-600 dark:bg-gray-800/50"
  };

  return (
    <button className={`w-full text-left px-5 py-3 rounded-2xl ${styles[type || 'info']} hover:opacity-80 transition-all duration-300 font-bold text-sm flex justify-between items-center`}>
      {label}
      {count && <span className="px-2 py-0.5 bg-black/10 text-[10px] rounded-md">{count}</span>}
    </button>
  );
}

// Icons
const PackageIcon = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>;
const TruckIcon = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-2.235-2.907a1 1 0 0 0-.777-.369H15"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>;
const ShieldIcon = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const DollarIcon = () => <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;

const CatalogIcon = ({ className }: { className?: string }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const ArrivalIcon = ({ className }: { className?: string }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 8v8"/><path d="m8 12 4 4 4-4"/></svg>;
const SupplierIcon = ({ className }: { className?: string }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const AuditIcon = ({ className }: { className?: string }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>;
const MapIcon = ({ className }: { className?: string }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>;
const RepackIcon = ({ className }: { className?: string }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>;
const ArrowIcon = ({ className }: { className?: string }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
