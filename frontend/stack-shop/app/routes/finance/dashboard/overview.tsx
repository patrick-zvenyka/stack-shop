import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Financial Overview | StackShop Finance" },
    { name: "description", content: "Enterprise financial tracking and live ledger monitoring." },
  ];
};

export default function FinanceOverview() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Financial Pulse Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard label="Total Revenue" value="$428,204" color="text-emerald-600" description="+12.4% from last quarter" />
        <StatCard label="Net Profit" value="$84,120" color="text-teal-600" description="22% operational margin" />
        <StatCard label="Pending Payouts" value="12" color="text-amber-600" description="$4,200 awaiting approval" />
        <StatCard label="Tax Liability" value="$12,840" color="text-indigo-600" description="Accrued for Q1 2026" />
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white">Financial Core Modules</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FinanceToolCard 
            title="Revenue Tracking"
            description="Deep analytics into sales channels, regional hubs, and individual store performance."
            icon={<RevenueIcon className="w-6 h-6" />}
            trend="+8.2%"
          />
          <FinanceToolCard 
            title="Expense Management"
            description="Process operational costs, inventory procurement, and field agent reimbursements."
            icon={<ExpenseIcon className="w-6 h-6" />}
            alert="4 tasks pending"
          />
          <FinanceToolCard 
            title="General Ledger"
            description="High-integrity immutable record of every transaction across the global network."
            icon={<LedgerIcon className="w-6 h-6" />}
          />
          <FinanceToolCard 
            title="Tax compliance"
            description="Automated regional tax matrices, VAT calculation, and multi-currency compliance."
            icon={<TaxIcon className="w-6 h-6" />}
          />
          <FinanceToolCard 
            title="Payroll Engine"
            description="Manage administrative staff salaries, field agent commissions, and nested pay structures."
            icon={<UsersIcon className="w-6 h-6" />}
          />
          <FinanceToolCard 
            title="Auditable Reports"
            description="Generate P&L statements, balance sheets, and audit-ready financial snapshots."
            icon={<ReportIcon className="w-6 h-6" />}
          />
        </div>
      </div>

      {/* Transaction Stream and Payouts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
           <div className="flex justify-between items-center mb-6">
             <h4 className="text-lg font-black dark:text-white">Live Transaction Stream</h4>
             <button className="text-xs font-bold text-emerald-600 hover:underline hover:translate-x-1 transition-transform inline-flex items-center gap-1">Full Ledger <ArrowIcon className="w-3" /></button>
           </div>
           <div className="space-y-6">
             <TransactionRow id="TRX-9821" amount="+$1,204.00" source="Hub Alpha (New York)" type="revenue" />
             <TransactionRow id="TRX-9820" amount="-$420.00" source="Cloud Infrastructure" type="expense" />
             <TransactionRow id="TRX-9819" amount="+$840.50" source="Hub Bravo (London)" type="revenue" />
             <TransactionRow id="TRX-9818" amount="-$2,100.00" source="Inventory Restock" type="expense" />
           </div>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 p-8 rounded-[2.5rem] text-white shadow-xl shadow-emerald-500/20 relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-10 -mt-10"></div>
             <h4 className="text-lg font-black mb-2 relative z-10">End of Day Close</h4>
             <p className="text-emerald-100 text-sm mb-6 relative z-10 leading-relaxed">Current period is active. Finalize all pending transactions before 23:59 UTC.</p>
             <button className="w-full py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-2xl font-black text-sm transition-all group-hover:scale-[1.02]">
               Initiate Closing
             </button>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-sm">
            <h4 className="text-lg font-black dark:text-white mb-4">Payout Approvals</h4>
            <div className="space-y-3">
               <ApprovalButton label="Agent Commissions" count="8" />
               <ApprovalButton label="Vendor Invoices" count="3" />
               <ApprovalButton label="Tax Remittance" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinanceToolCard({ title, description, icon, trend, alert }: { title: string; description: string; icon: React.ReactNode; trend?: string; alert?: string }) {
  return (
    <div className="group bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 flex flex-col items-start cursor-pointer">
      <div className="w-14 h-14 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 dark:group-hover:bg-emerald-900/30 dark:group-hover:text-emerald-400 transition-all duration-500 mb-6 group-hover:scale-110 group-hover:rotate-3">
        {icon}
      </div>
      <div className="flex-1 w-full">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-lg font-black dark:text-white group-hover:text-emerald-600 transition-colors leading-snug">{title}</h4>
          {trend && <span className="px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/10 text-[10px] font-black tracking-widest uppercase rounded-full text-emerald-600">{trend}</span>}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">{description}</p>
        <div className="w-full flex justify-between items-center">
           <span className="text-xs font-black text-emerald-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all">MANAGE UNIT <ArrowIcon className="w-3" /></span>
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

function TransactionRow({ id, amount, source, type }: { id: string; amount: string; source: string; type: 'revenue' | 'expense' }) {
  return (
    <div className="flex justify-between items-center group">
      <div className="flex gap-4 items-center">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${type === 'revenue' ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20' : 'bg-red-50 text-red-600 dark:bg-red-900/20'}`}>
          {type === 'revenue' ? <ArrowInIcon /> : <ArrowOutIcon />}
        </div>
        <div>
          <div className="text-sm font-black text-gray-900 dark:text-white leading-none mb-1">{id}</div>
          <div className="text-xs font-bold text-gray-400">{source}</div>
        </div>
      </div>
      <div className={`text-sm font-black ${type === 'revenue' ? 'text-emerald-600' : 'text-red-600'}`}>
        {amount}
      </div>
    </div>
  );
}

function ApprovalButton({ label, count }: { label: string; count?: string }) {
  return (
    <button className="w-full text-left px-5 py-3 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-emerald-600 hover:text-white transition-all duration-300 font-bold text-sm flex justify-between items-center group">
      {label}
      {count ? <span className="px-2 py-0.5 bg-white/20 text-[10px] rounded-md">{count}</span> : <ArrowIcon className="w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />}
    </button>
  );
}

// Icons
const RevenueIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const ExpenseIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>;
const LedgerIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const TaxIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="m17 5-5 5-5-5"/><path d="m17 14-5 5-5-5"/></svg>;
const ReportIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
const UsersIcon = ({ className = "w-5 h-5" }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const ArrowIcon = ({ className }: { className?: string }) => <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>;
const ArrowInIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 7 7 17"/><polyline points="7 7 7 17 17 17"/></svg>;
const ArrowOutIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="7 7 17 17"/><polyline points="17 7 17 17 7 17"/></svg>;
