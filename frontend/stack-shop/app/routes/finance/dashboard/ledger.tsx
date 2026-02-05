import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "General Ledger | StackShop Finance" },
    { name: "description", content: "High-integrity immutable record of every transaction across the global network." },
  ];
};

export default function Ledger() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">General Ledger</h3>
          <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Immutable financial transparency across all operational nodes.</p>
        </div>
        <div className="flex gap-4">
           <button className="px-5 py-3 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-bold rounded-2xl text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">Export CSV</button>
           <button className="px-5 py-3 bg-emerald-600 text-white font-black rounded-2xl shadow-lg shadow-emerald-500/20 text-sm hover:bg-emerald-700 transition-all">Verify Blockchain Sync</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <LedgerEntry 
          timestamp="2026-02-05 17:42:01" 
          node="HUB_ALPHA_NYC" 
          type="CREDIT" 
          amount="+$4,200.00" 
          status="VERIFIED" 
          hash="0x4e2...f9a1" 
        />
        <LedgerEntry 
          timestamp="2026-02-05 17:38:12" 
          node="ADMIN_SVR_PROD" 
          type="DEBIT" 
          amount="-$150.00" 
          status="VERIFIED" 
          hash="0x9a1...3d42" 
        />
        <LedgerEntry 
          timestamp="2026-02-05 17:35:55" 
          node="HUB_BRAVO_LDN" 
          type="CREDIT" 
          amount="+$1,840.50" 
          status="VERIFIED" 
          hash="0x7b5...2c88" 
        />
      </div>
    </div>
  );
}

function LedgerEntry({ timestamp, node, type, amount, status, hash }: { timestamp: string; node: string; type: 'CREDIT' | 'DEBIT'; amount: string; status: string; hash: string }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-emerald-500/30 transition-all">
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <div>
          <div className="text-xs font-mono font-bold text-gray-400 mb-1">{timestamp}</div>
          <div className="text-sm font-black text-gray-900 dark:text-white leading-none mb-1">{node}</div>
          <div className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">HASH: {hash}</div>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="text-right">
          <div className={`text-xs font-black tracking-widest uppercase mb-1 ${type === 'CREDIT' ? 'text-emerald-500' : 'text-red-500'}`}>{type}</div>
          <div className="text-lg font-black dark:text-white leading-none">{amount}</div>
        </div>
        <div className="px-4 py-1 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-600 text-[10px] font-black tracking-widest uppercase rounded-full border border-emerald-100 dark:border-emerald-800/50">
          {status}
        </div>
      </div>
    </div>
  );
}
