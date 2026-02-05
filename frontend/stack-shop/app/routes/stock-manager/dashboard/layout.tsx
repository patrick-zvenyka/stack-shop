import { Outlet } from "react-router";
import { StockSidebar } from "../../../components/stock-manager/StockSidebar";
import { StockTopbar } from "../../../components/stock-manager/StockTopbar";

export default function StockLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex">
      <StockSidebar />

      {/* Main Content Area */}
      <main className="flex-1">
        <StockTopbar 
          title="Stock Management System" 
          warehouseID="WAR-ALPHA-MAIN" 
          managerName="Leo Fontaine" 
          managerInitial="LF" 
        />

        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
