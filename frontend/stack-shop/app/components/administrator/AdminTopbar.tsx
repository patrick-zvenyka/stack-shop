export function AdminTopbar({ title, nodeID, adminName, adminInitial }: { title: string; nodeID: string; adminName: string; adminInitial: string }) {
  return (
    <header className="h-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 flex items-center justify-between px-8 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <h2 className="text-sm font-black text-gray-400 uppercase tracking-widest">{title}</h2>
        <div className="h-4 w-px bg-gray-200 dark:border-gray-700"></div>
        <span className="text-sm font-bold text-gray-900 dark:text-white">{nodeID}</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end mr-2">
          <span className="text-xs font-bold text-gray-500">{adminName}</span>
          <span className="text-xs font-medium text-emerald-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Active Server
          </span>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gray-200 dark:bg-gray-800 overflow-hidden border-2 border-white dark:border-gray-700 shadow-sm">
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-black text-xs">{adminInitial}</div>
        </div>
      </div>
    </header>
  );
}
