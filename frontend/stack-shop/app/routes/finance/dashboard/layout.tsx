import { Outlet } from "react-router";

export default function FinanceLayout() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-8">
      {/* Finance Shell */}
      <Outlet />
    </div>
  );
}
