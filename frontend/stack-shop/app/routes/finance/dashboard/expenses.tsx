import { type MetaFunction } from "react-router";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Expense Management | StackShop Finance" },
    { name: "description", content: "Process operational costs, inventory procurement, and field agent reimbursements." },
  ];
};

interface Expense {
  id: string;
  category: string;
  merchant: string;
  amount: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

const INITIAL_EXPENSES: Expense[] = [
  { id: "EXP-201", category: "Infrastructure", merchant: "AWS Services", amount: "$1,204.50", date: "2026-02-04", status: "approved" },
  { id: "EXP-202", category: "Inventory", merchant: "Global Logistics Ltd", amount: "$4,500.00", date: "2026-02-03", status: "pending" },
  { id: "EXP-203", category: "Reimbursement", merchant: "Marcus Thorne", amount: "$120.00", date: "2026-02-05", status: "pending" },
  { id: "EXP-204", category: "Marketing", merchant: "Google Ads", amount: "$850.00", date: "2026-02-01", status: "approved" },
];

export default function Expenses() {
  const [expenses] = useState<Expense[]>(INITIAL_EXPENSES);

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Expense Management</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Process operational costs and field agent reimbursements.</p>
        </div>
        <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-sm flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          Record Expense
        </button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Merchant / ID</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Category</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Date</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Amount</th>
              <th className="px-8 py-6 text-[10px] font-black uppercase tracking-widest text-gray-400">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-gray-800/50">
            {expenses.map(exp => (
              <tr key={exp.id} className="group hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors">
                <td className="px-8 py-6">
                  <div className="text-sm font-black text-gray-900 dark:text-white leading-none mb-1">{exp.merchant}</div>
                  <div className="text-xs font-bold text-gray-400">{exp.id}</div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 dark:bg-emerald-900/10 inline-block px-1.5 py-0.5 rounded-md">{exp.category}</span>
                </td>
                <td className="px-8 py-6 text-sm font-bold text-gray-500">{exp.date}</td>
                <td className="px-8 py-6 text-sm font-black text-gray-900 dark:text-white">{exp.amount}</td>
                <td className="px-8 py-6">
                  <div className={`flex items-center gap-2 text-xs font-bold capitalize ${exp.status === 'approved' ? 'text-emerald-500' : 'text-amber-500'}`}>
                    <span className={`w-2 h-2 rounded-full ${exp.status === 'approved' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                    {exp.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
