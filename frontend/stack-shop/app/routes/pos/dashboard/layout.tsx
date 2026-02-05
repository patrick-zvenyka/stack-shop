import { Outlet } from "react-router";
import { POSSidebar } from "../../../components/pos/POSSidebar";
import { POSTopbar } from "../../../components/pos/POSTopbar";

export default function POSLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex">
      <POSSidebar />

      {/* Main Content Area */}
      <main className="flex-1">
        <POSTopbar 
          title="Sales Terminal" 
          terminalID="TERM-08-NYC" 
          operatorName="Marcus Thorne" 
          operatorInitial="MT" 
        />

        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
