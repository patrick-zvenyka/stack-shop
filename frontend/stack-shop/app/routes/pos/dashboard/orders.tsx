import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Order History | StackShop POS" },
    { name: "description", content: "Historical transaction logs and order tracking." },
  ];
};

export default function Orders() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Transaction Logs</h3>
        <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Review and manage historical sales data.</p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden text-left w-full">
         <table className="w-full">
           <thead>
             <tr className="border-b border-gray-100 dark:border-gray-800">
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Order ID</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Items</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Amount</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Operator</th>
               <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400 text-right">Status</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
             <OrderRow id="POS-22910" items="3 Units" amount="$240.50" operator="M. Thorne" status="completed" />
             <OrderRow id="POS-22909" items="1 Unit" amount="$89.00" operator="M. Thorne" status="completed" />
             <OrderRow id="POS-22908" items="5 Units" amount="$1,120.00" operator="S. Lopez" status="cancelled" />
           </tbody>
         </table>
      </div>
    </div>
  );
}

function OrderRow({ id, items, amount, operator, status }: { id: string; items: string; amount: string; operator: string; status: 'completed' | 'cancelled' | 'pending' }) {
  return (
    <tr className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
      <td className="px-8 py-6">
        <div className="text-sm font-black text-gray-900 dark:text-white leading-none mb-1">{id}</div>
        <div className="text-[10px] font-bold text-gray-400">Feb 05, 17:50</div>
      </td>
      <td className="px-8 py-6 text-sm font-bold text-gray-500">{items}</td>
      <td className="px-8 py-6 text-sm font-black dark:text-white">{amount}</td>
      <td className="px-8 py-6 text-sm font-bold text-gray-400">{operator}</td>
      <td className="px-8 py-6 text-right">
        <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full ${
          status === 'completed' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/10' : 
          status === 'cancelled' ? 'bg-red-50 text-red-600 dark:bg-red-900/10' :
          'bg-amber-50 text-amber-600 dark:bg-amber-900/10'
        }`}>
          {status}
        </span>
      </td>
    </tr>
  );
}
