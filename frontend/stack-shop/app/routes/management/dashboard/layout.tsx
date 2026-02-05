import { Outlet } from "react-router";
import { ManagementSidebar } from "../../../components/management/ManagementSidebar";
import { ManagementTopbar } from "../../../components/management/ManagementTopbar";

export default function ManagementLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex">
      <ManagementSidebar />

      {/* Main Content Area */}
      <main className="flex-1">
        <ManagementTopbar 
          title="Executive Command Center" 
          orgUnit="Operational HQ" 
          executiveName="Elena Rossi" 
          executiveInitial="ER" 
        />

        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
