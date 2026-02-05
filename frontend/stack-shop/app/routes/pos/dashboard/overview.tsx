import { type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Sales Terminal | StackShop POS" },
    { name: "description", content: "Active sales processing and terminal management." },
  ];
};

export default function POSOverview() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Main Sales Unit */}
          <div className="bg-white dark:bg-gray-900 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-sm space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-black text-gray-900 dark:text-white leading-none mb-1">Active Sales Terminal</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Awaiting Scan or Input</p>
              </div>
              <div className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 text-[10px] font-black uppercase tracking-widest rounded-xl border border-indigo-100 dark:border-indigo-800/50">
                Register #1 - Online
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-focus-within:text-indigo-600 transition-colors"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              </div>
              <input 
                type="text" 
                placeholder="Scan Barcode or Search Product..."
                className="w-full bg-gray-50 dark:bg-gray-800/50 border-2 border-transparent focus:border-indigo-500 rounded-[2rem] pl-16 pr-8 py-6 text-lg font-bold outline-none transition-all placeholder:text-gray-400"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
               <CategoryButton label="Electronics" icon="📱" />
               <CategoryButton label="Apparel" icon="👕" />
               <CategoryButton label="Home" icon="🏠" />
               <CategoryButton label="Health" icon="💊" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-10 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-sm min-h-[400px]">
             <h4 className="text-lg font-black dark:text-white mb-6">Recent Inventory Pushes</h4>
             <div className="space-y-4">
                <InventoryItem name="Premium Leather Jacket" sku="SS-921" stock="12 Units Left" />
                <InventoryItem name="Mechanical Keyboard V4" sku="SS-841" stock="4 Units Left" alert />
                <InventoryItem name="Wireless Hub Pro" sku="SS-012" stock="45 Units Left" />
             </div>
          </div>
        </div>

        {/* Right - Order Cart */}
        <div className="bg-white dark:bg-gray-900 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-2xl flex flex-col overflow-hidden sticky top-28 h-[calc(100vh-160px)]">
           <div className="p-8 border-b border-gray-50 dark:border-gray-800">
             <h4 className="text-xl font-black dark:text-white mb-1">Current Order</h4>
             <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Transaction: #POS-22910</p>
           </div>
           
           <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-3xl flex items-center justify-center text-gray-300 mb-4 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              </div>
              <p className="text-sm font-bold text-gray-400">Order is Empty</p>
           </div>

           <div className="p-8 bg-gray-50 dark:bg-gray-800/50 space-y-6">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center decoration-gray-400 decoration-1 text-gray-500 font-bold">
                  <span>Subtotal</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between items-center text-gray-500 font-bold">
                  <span>Tax (Included)</span>
                  <span>$0.00</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-gray-200 dark:border-gray-700">
                 <span className="text-xl font-black dark:text-white">Total</span>
                 <span className="text-2xl font-black text-indigo-600">$0.00</span>
              </div>
              <button disabled className="w-full py-5 bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 font-black rounded-2xl cursor-not-allowed uppercase tracking-widest text-xs transition-all">
                Finalize Payment
              </button>
           </div>
        </div>
      </div>
    </div>
  );
}

function CategoryButton({ label, icon }: { label: string; icon: string }) {
  return (
    <button className="p-6 bg-gray-50 dark:bg-gray-800 border border-transparent hover:border-indigo-500/50 hover:bg-white dark:hover:bg-gray-900 rounded-3xl transition-all group">
      <div className="text-2xl mb-2 group-hover:scale-110 group-hover:rotate-6 transition-transform">{icon}</div>
      <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest group-hover:text-indigo-600 transition-colors">{label}</div>
    </button>
  );
}

function InventoryItem({ name, sku, stock, alert }: { name: string; sku: string; stock: string; alert?: boolean }) {
  return (
    <div className="flex justify-between items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-2xl transition-all group">
      <div className="flex gap-4 items-center">
        <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-black text-gray-400">IMG</div>
        <div>
          <div className="text-sm font-black text-gray-900 dark:text-white leading-none mb-1">{name}</div>
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">SKU: {sku}</div>
        </div>
      </div>
      <div className={`text-xs font-black ${alert ? 'text-red-600 animate-pulse' : 'text-emerald-600'}`}>
        {stock}
      </div>
    </div>
  );
}
