import { Outlet } from "react-router";
import { AdminSidebar } from "../../../components/administrator/AdminSidebar";
import { AdminTopbar } from "../../../components/administrator/AdminTopbar";

export default function AdministratorLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex">
      <AdminSidebar />

      {/* Main Content Area */}
      <main className="flex-1">
        <AdminTopbar 
          title="Administrator Portal" 
          nodeID="Root.Node_892" 
          adminName="System Admin" 
          adminInitial="AD" 
        />

        <Outlet />
      </main>
    </div>
  );
}
