import { Outlet } from "react-router";
import { FinanceSidebar } from "../../../components/finance/FinanceSidebar";
import { FinanceTopbar } from "../../../components/finance/FinanceTopbar";

export default function FinanceLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex">
      <FinanceSidebar />

      {/* Main Content Area */}
      <main className="flex-1">
        <FinanceTopbar 
          title="Financial Control Center" 
          nodeID="Fin.Node_402" 
          financeName="Sarah Chen" 
          financeInitial="SC" 
        />

        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
