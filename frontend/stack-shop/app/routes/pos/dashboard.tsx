import { type MetaFunction, Link } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Point of Sale | StackShop" },
    { name: "description", content: "Point of Sale system view" },
  ];
};

export default function POS() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Point of Sale</h1>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
              <span>Register #1</span>
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">Online</span>
            </div>
            <Link 
              to="/pos/login"
              className="text-sm font-medium text-gray-500 hover:text-red-500 transition-colors"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Product Search</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Scan barcode or type product name..."
                className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
              />
              <SearchIcon className="absolute right-4 top-3.5 text-gray-400" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 min-h-[400px]">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Picks</h2>
            {/* Grid of quick select items would go here */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className="aspect-square bg-gray-50 dark:bg-gray-700 rounded-xl flex items-center justify-center border border-dashed border-gray-300 dark:border-gray-600 text-gray-400">
                    Category {i}
                 </div>
               ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex flex-col">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Current Order</h2>
          </div>
          <div className="flex-1 p-6 overflow-y-auto">
             <p className="text-gray-500 dark:text-gray-400 text-center mt-10 italic">No items in order</p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-b-2xl border-t border-gray-200 dark:border-gray-700 space-y-4">
            <div className="flex justify-between text-gray-600 dark:text-gray-400">
              <span>Subtotal</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-gray-600 dark:text-gray-400 font-bold text-xl border-t pt-4 border-gray-200 dark:border-gray-700">
              <span className="text-gray-900 dark:text-white">Total</span>
              <span className="text-blue-600 dark:text-blue-400">$0.00</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-transform active:scale-95">
              Confirm Payment
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
  );
}
