import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Master Catalog | StackShop Stock Manager" },
    { name: "description", content: "Global SKU definitions and warehouse allocation rules." },
  ];
};

export default function Inventory() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Master Catalog</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Manage technical specifications and global SKU registration.</p>
        </div>
        <button className="px-6 py-3 bg-amber-600 text-white font-black rounded-2xl shadow-lg shadow-amber-500/20 text-sm hover:scale-[1.02] active:scale-[0.98] transition-all">
          Register New SKU
        </button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden text-left w-full">
         <table className="w-full">
           <thead>
             <tr className="border-b border-gray-100 dark:border-gray-800">
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Product Entry</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">SKU Code</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Category</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Stock (Global)</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Actions</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
             <InventoryRow name="Premium Leather Jacket" sku="SS-L-921" category="Apparel" stock="1,240 Units" />
             <InventoryRow name="Mechanical Keyboard V4" sku="SS-E-841" category="Electronics" stock="402 Units" low />
             <InventoryRow name="Ergo Mouse 3000" sku="SS-E-712" category="Electronics" stock="890 Units" />
             <InventoryRow name="Minimalist Desk Lamp" sku="SS-H-012" category="Home" stock="12 Units" low />
           </tbody>
         </table>
      </div>
    </div>
  );
}

function InventoryRow({ name, sku, category, stock, low }: { name: string; sku: string; category: string; stock: string; low?: boolean }) {
  return (
    <tr className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
      <td className="px-8 py-6">
        <div className="text-sm font-black text-gray-900 dark:text-white leading-none mb-1">{name}</div>
        <div className="text-[10px] font-bold text-gray-400">Verified Specification</div>
      </td>
      <td className="px-8 py-6 text-sm font-mono font-bold text-amber-600">{sku}</td>
      <td className="px-8 py-6 text-sm font-bold text-gray-500">{category}</td>
      <td className="px-8 py-6">
        <span className={`text-xs font-black ${low ? 'text-orange-500 bg-orange-50 dark:bg-orange-900/10 px-2 py-0.5 rounded-md' : 'text-emerald-500'}`}>{stock}</span>
      </td>
      <td className="px-8 py-6 text-right">
        <button className="text-[10px] font-black text-amber-600 hover:underline">ALLOCATE</button>
      </td>
    </tr>
  );
}
