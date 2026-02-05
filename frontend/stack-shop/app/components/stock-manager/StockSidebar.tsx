import { Link, NavLink } from "react-router";

export function StockSidebar() {
  return (
    <aside className="w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col hidden lg:flex h-screen sticky top-0">
      <div className="p-8 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-amber-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
          </div>
          <span className="text-xl font-black tracking-tight dark:text-white">Stock<span className="text-amber-600 text-sm ml-0.5">Manager</span></span>
        </div>
      </div>
      
      <nav className="flex-1 p-6 space-y-1">
        <SidebarLink to="/stock-manager" icon={<WarehouseIcon />} label="Warehouse Overview" end />
        <SidebarLink to="/stock-manager/inventory" icon={<InventoryIcon />} label="Master Catalog" />
        <SidebarLink to="/stock-manager/shipments" icon={<ShipmentIcon />} label="Incoming Units" />
        <SidebarLink to="/stock-manager/suppliers" icon={<SupplierIcon />} label="Supplier Network" />
        <SidebarLink to="/stock-manager/audits" icon={<AuditIcon />} label="Quality Audits" />
      </nav>

      <div className="p-6 border-t border-gray-100 dark:border-gray-800">
        <Link 
          to="/stock-manager/login"
          className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all font-bold text-sm"
        >
          <SignOutIcon />
          Sign Out
        </Link>
      </div>
    </aside>
  );
}

function SidebarLink({ to, icon, label, end }: { to: string; icon: React.ReactNode; label: string; end?: boolean }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 ${
        isActive 
          ? "bg-amber-600 text-white shadow-lg shadow-amber-500/25 translate-x-1" 
          : "text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
      }`}
    >
      <div className="transition-transform duration-300">
        {icon}
      </div>
      {label}
    </NavLink>
  );
}

const WarehouseIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3Z"/><path d="M9 17h6"/><path d="M9 12h6"/><path d="M12 21v-4"/></svg>;
const InventoryIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>;
const ShipmentIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-2.235-2.907a1 1 0 0 0-.777-.369H15"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>;
const SupplierIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const AuditIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>;
const SignOutIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
