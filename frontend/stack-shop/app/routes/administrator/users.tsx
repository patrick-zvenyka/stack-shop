import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "User Management | StackShop Admin" },
    { name: "description", content: "Manage staff, roles, and administrative access." },
  ];
};

export default function UserManagement() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">User Management</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Manage administrative staff and nested permission groups.</p>
        </div>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Add New Staff
        </button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Staff Member</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Role & Rank</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
            <UserRow name="Alexander Vance" email="vance.a@stackshop.io" role="Root Admin" rank="Level 9" status="active" />
            <UserRow name="Sarah Chen" email="chen.s@stackshop.io" role="Finance Lead" rank="Level 7" status="active" />
            <UserRow name="Marcus Thorne" email="thorne.m@stackshop.io" role="Field Agent" rank="Level 4" status="away" />
            <UserRow name="Elena Rodriguez" email="rodriguez.e@stackshop.io" role="Inventory Mgr" rank="Level 6" status="active" />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UserRow({ name, email, role, rank, status }: { name: string; email: string; role: string; rank: string; status: 'active' | 'away' | 'inactive' }) {
  const statusColors = {
    active: "bg-emerald-500",
    away: "bg-amber-500",
    inactive: "bg-red-500"
  };

  return (
    <tr className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
      <td className="px-8 py-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-black text-xs text-blue-600">{name.split(' ').map(n => n[0]).join('')}</div>
          <div>
            <div className="text-sm font-black text-gray-900 dark:text-white leading-none mb-1">{name}</div>
            <div className="text-xs font-bold text-gray-400">{email}</div>
          </div>
        </div>
      </td>
      <td className="px-8 py-6">
        <div className="text-sm font-black text-gray-700 dark:text-gray-300 mb-1">{role}</div>
        <div className="text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-900/10 inline-block px-1.5 py-0.5 rounded-md">{rank}</div>
      </td>
      <td className="px-8 py-6">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 capitalize">
          <span className={`w-2 h-2 rounded-full ${statusColors[status]} ${status === 'active' ? 'animate-pulse' : ''}`}></span>
          {status}
        </div>
      </td>
      <td className="px-8 py-6 text-right">
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-gray-400 hover:text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </button>
      </td>
    </tr>
  );
}
