import { type MetaFunction } from "react-router";
import { useState } from "react";
import { AdminSidebar } from "../../components/administrator/AdminSidebar";
import { AdminTopbar } from "../../components/administrator/AdminTopbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Administrator Dashboard | StackShop" },
    { name: "description", content: "Enterprise system administration and control center." },
  ];
};

export default function Administrator() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <AdminTopbar 
          title="Administrator Portal" 
          nodeID="Root.Node_892" 
          adminName="System Admin" 
          adminInitial="AD" 
        />

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* System Health Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard label="CPU Usage" value="24.8%" color="text-blue-600" description="Load balanced across 8 nodes" />
            <StatCard label="Mem Utilization" value="3.2GB" color="text-indigo-600" description="Optimized heap allocation" />
            <StatCard label="Latency" value="12ms" color="text-emerald-600" description="Sub-microservice response" />
            <StatCard label="Active Sessions" value="1,204" color="text-amber-600" description="Across 12 global branches" />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">Administrative Processes</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AdminToolCard 
                title="Identity & Access Control"
                description="Manage administrative staff, field agents, and nested permission groups."
                icon={<UsersIcon className="w-6 h-6" />}
                count="45 Staff"
              />
              <AdminToolCard 
                title="Financial Core Settings"
                description="Configure multi-currency matrices, tax brackets, and payment gateway logic."
                icon={<FinanceIcon className="w-6 h-6" />}
              />
              <AdminToolCard 
                title="Global Store Infrastructure"
                description="Entity management for branches, distribution hubs, and region mapping."
                icon={<InfrastrcutureIcon className="w-6 h-6" />}
                count="12 Branches"
              />
              <AdminToolCard 
                title="Security & Audit Vault"
                description="Deep-dive into immutable activity logs, IP whitelisting, and encryption keys."
                icon={<SecurityIcon className="w-6 h-6" />}
                alert="Last audit: 4h ago"
              />
              <AdminToolCard 
                title="Data Integrity & Sync"
                description="Manual database triggers, clear CDN caches, and data migration utility."
                icon={<ConfigIcon className="w-6 h-6" />}
              />
              <AdminToolCard 
                title="API & Integrations"
                description="Third-party hook management for logistics, ERPs, and external marketing."
                icon={<OverviewIcon className="w-6 h-6" />}
                count="8 Connected"
              />
            </div>
          </div>

          {/* Activity Feed and Recent Events */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
               <div className="flex justify-between items-center mb-6">
                 <h4 className="text-lg font-black dark:text-white">Recent System Events</h4>
                 <button className="text-xs font-bold text-blue-600 hover:underline hover:translate-x-1 transition-transform inline-flex items-center gap-1">Full Logs <ArrowIcon className="w-3" /></button>
               </div>
               <div className="space-y-6">
                 <EventRow time="14:23:01" source="AUTH_GATE" message="Failed login attempt detected from 192.168.1.1 (Brute force protection active)" type="warning" />
                 <EventRow time="13:45:12" source="STORE_API" message="Inventory synchronization complete for Region South-East" type="success" />
                 <EventRow time="12:10:05" source="SYS_CRON" message="Database backup initialized and uploaded to S3-Vault-East" type="info" />
                 <EventRow time="11:30:22" source="USER_MGMT" message="New role 'Regional_Lead' provisioned by Root.Node_001" type="info" />
               </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-500/20 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-10 -mt-10"></div>
                 <h4 className="text-lg font-black mb-2 relative z-10">Maintenance Mode</h4>
                 <p className="text-blue-100 text-sm mb-6 relative z-10 leading-relaxed">Schedule system-wide downtime or restrict access to superusers during updates.</p>
                 <button className="w-full py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl font-black text-sm transition-all group-hover:scale-[1.02]">
                   Enter Maintenance
                 </button>
              </div>

              <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                <h4 className="text-lg font-black dark:text-white mb-4">Quick Shortcuts</h4>
                <div className="space-y-3">
                   <ShortcutButton label="Generate API Key" />
                   <ShortcutButton label="Export User List" />
                   <ShortcutButton label="System Audit Report" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function AdminToolCard({ title, description, icon, count, alert }: { title: string; description: string; icon: React.ReactNode; count?: string; alert?: string }) {
  return (
    <div className="group bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 flex flex-col items-start cursor-pointer">
      <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-600 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400 transition-all duration-500 mb-6 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <div className="flex-1 w-full">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-black dark:text-white group-hover:text-blue-600 transition-colors leading-snug">{title}</h4>
          {count && <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-[10px] font-black tracking-widest uppercase rounded-full group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">{count}</span>}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">{description}</p>
        <div className="w-full flex justify-between items-center">
           <span className="text-xs font-black text-blue-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all">CONFIGURE SYSTEM <ArrowIcon className="w-3" /></span>
           {alert && <span className="text-[10px] font-bold text-amber-600 truncate">{alert}</span>}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color, description }: { label: string; value: string; color: string; description: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-transparent dark:from-white/5 opacity-50"></div>
      <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <div className={`text-3xl font-black ${color} mb-2`}>{value}</div>
      <p className="text-[10px] font-bold text-gray-500 leading-tight">{description}</p>
    </div>
  );
}

function EventRow({ time, source, message, type }: { time: string; source: string; message: string; type: 'info' | 'warning' | 'success' }) {
  const colors = {
    info: "text-blue-600 bg-blue-50 dark:bg-blue-900/10",
    warning: "text-red-600 bg-red-50 dark:bg-red-900/10",
    success: "text-emerald-600 bg-emerald-50 dark:bg-emerald-900/10"
  };

  return (
    <div className="flex gap-4 items-start group">
      <div className="text-[10px] font-black text-gray-400 font-mono mt-1 shrink-0">{time}</div>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 ${colors[type]} text-[9px] font-black uppercase tracking-widest rounded-md`}>{source}</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{message}</p>
      </div>
    </div>
  );
}

function ShortcutButton({ label }: { label: string }) {
  return (
    <button className="w-full text-left px-5 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-blue-600 hover:text-white transition-all duration-300 font-bold text-sm flex justify-between items-center group">
      {label}
      <ArrowIcon className="w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
    </button>
  );
}

// Icons
const OverviewIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>;
const UsersIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const SecurityIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>;
const ConfigIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
const InfrastrcutureIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>;
const FinanceIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const ArrowIcon = ({ className }: { className?: string }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
