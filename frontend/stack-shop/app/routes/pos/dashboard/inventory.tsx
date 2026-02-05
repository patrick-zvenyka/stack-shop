import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Real-time Inventory | StackShop POS" },
    { name: "description", content: "Active stock monitoring and SKU management." },
  ];
};

export default function Inventory() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Active Inventory</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Real-time stock synchronization across all retail channels.</p>
        </div>
        <button className="px-6 py-3 bg-indigo-600 text-white font-black rounded-2xl shadow-lg shadow-indigo-500/20 text-sm hover:scale-[1.02] active:scale-[0.98] transition-all">
          New Product Entry
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StockStat label="Total SKUs" value="1,248" color="text-indigo-600" />
        <StockStat label="Low Stock Alert" value="12" color="text-red-500" />
        <StockStat label="Out of Stock" value="3" color="text-gray-400" />
        <StockStat label="New Arrivals" value="48" color="text-emerald-500" />
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden text-left w-full">
         <table className="w-full">
           <thead>
             <tr className="border-b border-gray-100 dark:border-gray-800">
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Product</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">SKU</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Stock</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Price</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Action</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
             <ProductRow name="Mechanical Keyboard V4" sku="SS-841" stock="4 Units" price="$129.00" alert />
             <ProductRow name="Wireless Hub Pro" sku="SS-012" stock="45 Units" price="$89.00" />
             <ProductRow name="Ergo Mouse 3000" sku="SS-712" stock="18 Units" price="$59.00" />
           </tbody>
         </table>
      </div>
    </div>
  );
}

function StockStat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
      <div className={`text-2xl font-black ${color}`}>{value}</div>
    </div>
  );
}

function ProductRow({ name, sku, stock, price, alert }: { name: string; sku: string; stock: string; price: string; alert?: boolean }) {
  return (
    <tr className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
      <td className="px-8 py-6">
        <div className="text-sm font-black text-gray-900 dark:text-white">{name}</div>
      </td>
      <td className="px-8 py-6 text-sm font-mono font-bold text-gray-400">{sku}</td>
      <td className="px-8 py-6">
        <span className={`text-xs font-black ${alert ? 'text-red-500 bg-red-50 dark:bg-red-900/10 px-2 py-0.5 rounded-md' : 'text-emerald-500'}`}>{stock}</span>
      </td>
      <td className="px-8 py-6 text-sm font-black dark:text-white">{price}</td>
      <td className="px-8 py-6 text-right">
        <button className="text-[10px] font-black text-indigo-600 hover:underline">UPDATE</button>
      </td>
    </tr>
  );
}
