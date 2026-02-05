import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Supplier Network | StackShop Stock Manager" },
    { name: "description", content: "Manage vendor relations and lead-time tracking." },
  ];
};

export default function Suppliers() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Supplier Network</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Directory of verified manufacturing partners and logistics providers.</p>
        </div>
        <button className="px-6 py-3 bg-amber-600 text-white font-black rounded-2xl shadow-lg shadow-amber-500/20 text-sm hover:scale-[1.02] transition-all">
          Register New Partner
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { name: "Global Electronics Ltd", location: "Shenzen, CN", rating: "4.9/5.0", category: "Core Hardware" },
          { name: "Tech Components Co", location: "Seoul, KR", rating: "4.7/5.0", category: "Microchips" },
          { name: "EU Logistics Hub", location: "Frankfurt, DE", rating: "4.8/5.0", category: "Freight" },
          { name: "US West Distribution", location: "California, US", rating: "4.5/5.0", category: "Warehousing" },
        ].map(supplier => (
          <div key={supplier.name} className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm group hover:border-amber-500/50 transition-all">
             <div className="w-14 h-14 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-xl font-black text-gray-300 group-hover:bg-amber-50 group-hover:text-amber-600 dark:group-hover:bg-amber-900/30 dark:group-hover:text-amber-400 transition-all mb-6">
                {supplier.name[0]}
             </div>
             <h4 className="text-lg font-black dark:text-white mb-1 leading-none">{supplier.name}</h4>
             <p className="text-xs font-bold text-gray-400 mb-6">{supplier.location}</p>
             <div className="flex justify-between items-center pt-6 border-t border-gray-50 dark:border-gray-800">
                <div className="space-y-1">
                   <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Quality Rating</div>
                   <div className="text-sm font-black text-amber-600">{supplier.rating}</div>
                </div>
                <div className="px-3 py-1 bg-gray-50 dark:bg-gray-800 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500">{supplier.category}</div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
