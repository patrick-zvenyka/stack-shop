import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  
  // Administrator
  route("administrator", "routes/administrator/dashboard/layout.tsx", [
    index("routes/administrator/dashboard/overview.tsx"),
    route("users", "routes/administrator/dashboard/users.tsx"),
    route("security", "routes/administrator/dashboard/security.tsx"),
    route("config", "routes/administrator/dashboard/config.tsx"),
    route("infrastructure", "routes/administrator/dashboard/infrastructure.tsx"),
  ]),
  route("administrator/login", "routes/administrator/auth/login.tsx"),
  
  // Finance
  route("finance", "routes/finance/dashboard/layout.tsx", [
    index("routes/finance/dashboard/overview.tsx"),
    route("expenses", "routes/finance/dashboard/expenses.tsx"),
    route("ledger", "routes/finance/dashboard/ledger.tsx"),
    route("taxes", "routes/finance/dashboard/taxes.tsx"),
    route("reports", "routes/finance/dashboard/reports.tsx"),
  ]),
  route("finance/login", "routes/finance/auth/login.tsx"),
  
  // POS
  route("pos", "routes/pos/dashboard/layout.tsx", [
    index("routes/pos/dashboard/overview.tsx"),
    route("inventory", "routes/pos/dashboard/inventory.tsx"),
    route("orders", "routes/pos/dashboard/orders.tsx"),
    route("customers", "routes/pos/dashboard/customers.tsx"),
    route("returns", "routes/pos/dashboard/returns.tsx"),
  ]),
  route("pos/login", "routes/pos/auth/login.tsx"),
  
  // Management
  route("management", "routes/management/dashboard.tsx"),
  route("management/login", "routes/management/login.tsx"),
  
  // Stock Manager
  route("stock-manager", "routes/stock-manager/dashboard/layout.tsx", [
    index("routes/stock-manager/dashboard/overview.tsx"),
    route("inventory", "routes/stock-manager/dashboard/inventory.tsx"),
    route("shipments", "routes/stock-manager/dashboard/shipments.tsx"),
    route("suppliers", "routes/stock-manager/dashboard/suppliers.tsx"),
    route("audits", "routes/stock-manager/dashboard/audits.tsx"),
  ]),
  route("stock-manager/login", "routes/stock-manager/auth/login.tsx"),
] satisfies RouteConfig;
