import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Returns & Swaps | StackShop POS" },
    { name: "description", content: "Active return processing and exchange management." },
  ];
};

export default function Returns() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div>
        <h3 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white">Returns Processing</h3>
        <p className="text-gray-500 dark:text-gray-400 font-medium mt-1">Manage product returns, exchanges, and store credit issues.</p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-sm text-center">
         <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-3xl mx-auto flex items-center justify-center text-gray-300 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
         </div>
         <h4 className="text-xl font-black dark:text-white mb-2">Initiate Return</h4>
         <p className="text-sm text-gray-500 max-w-sm mx-auto mb-8 leading-relaxed">Scan the original receipt or enter the Order ID to begin the return verification process.</p>
         
         <div className="max-w-md mx-auto relative group">
            <input 
              type="text" 
              placeholder="Scan Receipt or Enter Order ID..."
              className="w-full bg-gray-50 dark:bg-gray-800 border focus:border-indigo-500 rounded-2xl px-6 py-4 text-center text-sm font-bold outline-none transition-all"
            />
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800">
           <h4 className="text-lg font-black dark:text-white mb-6">Return Policy Flags</h4>
           <div className="space-y-4">
              <PolicyFlag label="Standard 30-Day Window" active />
              <PolicyFlag label="Promotional Final Sale" />
              <PolicyFlag label="Damaged Goods Protocol" active />
              <PolicyFlag label="Open-Box Restock Fee" active />
           </div>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center text-center">
           <div className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-4">Store Credit Issued (TDY)</div>
           <div className="text-4xl font-black text-indigo-600">$142.50</div>
           <p className="text-xs font-bold text-gray-500 mt-2">Processed across 2 transactions</p>
        </div>
      </div>
    </div>
  );
}

function PolicyFlag({ label, active }: { label: string; active?: boolean }) {
  return (
    <div className="flex justify-between items-center py-2">
       <span className="text-sm font-bold text-gray-500">{label}</span>
       <div className={`w-8 h-4 rounded-full relative transition-colors ${active ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-800'}`}>
          <div className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition-all ${active ? 'right-0.5' : 'left-0.5'}`}></div>
       </div>
    </div>
  );
}
