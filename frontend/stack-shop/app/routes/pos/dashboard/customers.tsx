import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Customer CRM | StackShop POS" },
    { name: "description", content: "Customer relationship management and loyalty tracking." },
  ];
};

export default function Customers() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Customer CRM</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Manage loyalty programs and customer profiles.</p>
        </div>
        <button className="px-6 py-3 bg-indigo-600 text-white font-black rounded-2xl shadow-lg shadow-indigo-500/20 text-sm hover:scale-[1.02] transition-all">
          Register New Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "Julian Pierce", email: "julian@example.com", points: "4,250 PTS", tier: "Platinum" },
          { name: "Elena Rossi", email: "elena.r@example.com", points: "1,120 PTS", tier: "Gold" },
          { name: "David Chen", email: "dchen@ux.io", points: "450 PTS", tier: "Silver" },
        ].map(customer => (
          <div key={customer.email} className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm group hover:border-indigo-500/50 transition-all">
             <div className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-xl font-black text-gray-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 dark:group-hover:bg-indigo-900/30 dark:group-hover:text-indigo-400 transition-all mb-6">
                {customer.name[0]}
             </div>
             <h4 className="text-lg font-black dark:text-white mb-1 leading-none">{customer.name}</h4>
             <p className="text-xs font-bold text-gray-400 mb-6">{customer.email}</p>
             <div className="flex justify-between items-center pt-6 border-t border-gray-50 dark:border-gray-800">
                <div className="space-y-1">
                   <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Points Balance</div>
                   <div className="text-sm font-black text-indigo-600">{customer.points}</div>
                </div>
                <div className="px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500">{customer.tier}</div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
