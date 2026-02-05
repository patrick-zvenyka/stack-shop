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
  route("finance", "routes/finance/dashboard.tsx"),
  route("finance/login", "routes/finance/login.tsx"),
  
  // POS
  route("pos", "routes/pos/dashboard.tsx"),
  route("pos/login", "routes/pos/login.tsx"),
  
  // Management
  route("management", "routes/management/dashboard.tsx"),
  route("management/login", "routes/management/login.tsx"),
  
  // Stock Manager
  route("stock-manager", "routes/stock-manager/dashboard.tsx"),
  route("stock-manager/login", "routes/stock-manager/login.tsx"),
] satisfies RouteConfig;
