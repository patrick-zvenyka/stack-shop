import { type MetaFunction } from "react-router";
import { useState, useMemo } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "User Management | StackShop Admin" },
    { name: "description", content: "Manage staff, roles, and administrative access." },
  ];
};

type UserStatus = 'active' | 'away' | 'inactive';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  rank: string;
  status: UserStatus;
  lastPasswordReset?: string;
}

const INITIAL_USERS: User[] = [
  { id: "1", name: "Alexander Vance", email: "vance.a@stackshop.io", role: "Root Admin", rank: "Level 9", status: "active", lastPasswordReset: "2026-01-15" },
  { id: "2", name: "Sarah Chen", email: "chen.s@stackshop.io", role: "Finance Lead", rank: "Level 7", status: "active", lastPasswordReset: "2026-02-01" },
  { id: "3", name: "Marcus Thorne", email: "thorne.m@stackshop.io", role: "Field Agent", rank: "Level 4", status: "away", lastPasswordReset: "2025-12-20" },
  { id: "4", name: "Elena Rodriguez", email: "rodriguez.e@stackshop.io", role: "Inventory Mgr", rank: "Level 6", status: "active", lastPasswordReset: "2026-01-30" },
];

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const filteredUsers = useMemo(() => {
    return users.filter(user => 
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [users, searchQuery]);

  const handleAddUser = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleDeleteUser = (id: string) => {
    if (confirm("Are you sure you want to decommission this staff member? This action is logged in the Security Vault.")) {
      setUsers(prev => prev.filter(u => u.id !== id));
    }
  };

  const handleResetPassword = (user: User) => {
    const newPassword = prompt(`Enter new secure password for ${user.name}:`);
    if (newPassword) {
      if (newPassword.length < 8) {
        alert("Security Breach: Password must be at least 8 characters.");
        return;
      }
      setUsers(prev => prev.map(u => u.id === user.id ? { ...u, lastPasswordReset: new Date().toISOString().split('T')[0] } : u));
      alert(`Credential Update Successful: Master key for ${user.name} has been recycled.`);
    }
  };

  const handleSaveUser = (userData: Omit<User, 'id'>) => {
    if (editingUser) {
      setUsers(prev => prev.map(u => u.id === editingUser.id ? { ...userData, id: u.id, lastPasswordReset: u.lastPasswordReset } : u));
    } else {
      const newUser = { ...userData, id: Math.random().toString(36).substr(2, 9), lastPasswordReset: new Date().toISOString().split('T')[0] };
      setUsers(prev => [newUser, ...prev]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">User Management</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Manage administrative staff and nested permission groups.</p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input 
              type="text" 
              placeholder="Search staff, roles, or emails..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-sm"
            />
          </div>
          <button 
            onClick={handleAddUser}
            className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-lg shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm flex items-center gap-2 whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            Add Staff
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden min-h-[400px]">
        {filteredUsers.length > 0 ? (
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
              {filteredUsers.map(user => (
                <UserRow 
                  key={user.id} 
                  user={user} 
                  onEdit={() => handleEditUser(user)}
                  onDelete={() => handleDeleteUser(user.id)}
                  onResetPassword={() => handleResetPassword(user)}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col items-center justify-center p-20 text-center">
            <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800/50 rounded-3xl flex items-center justify-center text-gray-300 dark:text-gray-700 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            </div>
            <h4 className="text-xl font-black text-gray-900 dark:text-white mb-2">No results found</h4>
            <p className="text-gray-500 dark:text-gray-400 font-medium max-w-xs">We couldn't find any staff members matching your current search parameters.</p>
          </div>
        )}
      </div>

      {isModalOpen && (
        <UserModal 
          user={editingUser} 
          onClose={() => setIsModalOpen(false)} 
          onSave={handleSaveUser}
        />
      )}
    </div>
  );
}

function UserRow({ user, onEdit, onDelete, onResetPassword }: { user: User; onEdit: () => void; onDelete: () => void; onResetPassword: () => void }) {
  const statusColors = {
    active: "bg-emerald-500",
    away: "bg-amber-500",
    inactive: "bg-red-500"
  };

  return (
    <tr className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
      <td className="px-8 py-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center font-black text-xs text-blue-600">
            {user.name.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <div className="text-sm font-black text-gray-900 dark:text-white leading-none mb-1">{user.name}</div>
            <div className="text-xs font-bold text-gray-400">{user.email}</div>
          </div>
        </div>
      </td>
      <td className="px-8 py-6">
        <div className="text-sm font-black text-gray-700 dark:text-gray-300 mb-1">{user.role}</div>
        <div className="text-[10px] font-black uppercase tracking-wider text-blue-600 bg-blue-50 dark:bg-blue-900/10 inline-block px-1.5 py-0.5 rounded-md">{user.rank}</div>
      </td>
      <td className="px-8 py-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 capitalize">
            <span className={`w-2 h-2 rounded-full ${statusColors[user.status]} ${user.status === 'active' ? 'animate-pulse' : ''}`}></span>
            {user.status}
          </div>
          {user.lastPasswordReset && <div className="text-[9px] font-black text-gray-400 uppercase tracking-tighter">Keyed: {user.lastPasswordReset}</div>}
        </div>
      </td>
      <td className="px-8 py-6 text-right">
        <div className="flex justify-end gap-2">
          <button 
            onClick={onResetPassword}
            title="Reset Password"
            className="p-2 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors text-gray-400 hover:text-amber-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6v6H9V6h6zm0-2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6zM5 8h2v4H5V8zm14 0h-2v4h2V8zM12 18v2m-5-2v2m10-2v2"/></svg>
          </button>
          <button 
            onClick={onEdit} 
            className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors text-gray-400 hover:text-blue-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
          </button>
          <button 
            onClick={onDelete}
            className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors text-gray-400 hover:text-red-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
          </button>
        </div>
      </td>
    </tr>
  );
}

function UserModal({ user, onClose, onSave }: { user: User | null; onClose: () => void; onSave: (data: Omit<User, 'id'>) => void }) {
  const [formData, setFormData] = useState<Omit<User, 'id'>>(
    user ? { ...user } : { name: "", email: "", role: "", rank: "Level 1", status: "active" }
  );
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user && password !== confirmPassword) {
      alert("Credential Mismatch: Security keys do not match.");
      return;
    }
    if (!user && password.length < 8) {
      alert("Security Breach: Password must be at least 8 characters.");
      return;
    }
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white dark:bg-gray-950 w-full max-w-xl rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-8 duration-500">
        <div className="p-10 border-b border-gray-50 dark:border-gray-900 flex justify-between items-center">
          <div>
            <h4 className="text-2xl font-black text-gray-900 dark:text-white leading-none mb-1">{user ? "Modify Staff Entity" : "Provision New Staff"}</h4>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Administrative Control Point</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-10 space-y-6 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2 col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
              <input 
                required
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-blue-500 rounded-2xl text-sm font-bold transition-all outline-none" 
                placeholder="e.g. John Matrix"
              />
            </div>
            <div className="space-y-2 col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Enterprise Email</label>
              <input 
                required
                type="email"
                value={formData.email}
                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-blue-500 rounded-2xl text-sm font-bold transition-all outline-none" 
                placeholder="user@stackshop.io"
              />
            </div>
            {!user && (
              <>
                <div className="space-y-2 relative">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Master Password</label>
                  <div className="relative">
                    <input 
                      required
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-blue-500 rounded-2xl text-sm font-bold transition-all outline-none pr-14" 
                      placeholder="••••••••"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                      )}
                    </button>
                  </div>
                </div>
                <div className="space-y-2 relative">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Confirm Identity Key</label>
                  <div className="relative">
                    <input 
                      required
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-blue-500 rounded-2xl text-sm font-bold transition-all outline-none pr-14" 
                      placeholder="••••••••"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      {showConfirmPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" y1="2" x2="22" y2="22"/></svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                      )}
                    </button>
                  </div>
                </div>
              </>
            )}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Role Designation</label>
              <input 
                required
                value={formData.role}
                onChange={e => setFormData(prev => ({ ...prev, role: e.target.value }))}
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-blue-500 rounded-2xl text-sm font-bold transition-all outline-none" 
                placeholder="e.g. Security Lead"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Clearance Rank</label>
              <select 
                value={formData.rank}
                onChange={e => setFormData(prev => ({ ...prev, rank: e.target.value }))}
                className="w-full px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-transparent focus:border-blue-500 rounded-2xl text-sm font-bold transition-all outline-none appearance-none"
              >
                {[...Array(9)].map((_, i) => (
                  <option key={i} value={`Level ${i + 1}`}>Level {i + 1}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-6 flex gap-4 sticky bottom-0 bg-white dark:bg-gray-950 py-4 border-t border-gray-50 dark:border-gray-900">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 py-4 font-black text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="flex-[2] py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm"
            >
              {user ? "Commit Changes" : "Confirm Provisioning"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
