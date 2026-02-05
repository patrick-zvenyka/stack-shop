import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  
  // Administrator
  route("administrator", "routes/administrator/layout.tsx", [
    index("routes/administrator/overview.tsx"),
    route("users", "routes/administrator/users.tsx"),
    route("security", "routes/administrator/security.tsx"),
    route("config", "routes/administrator/config.tsx"),
    route("infrastructure", "routes/administrator/infrastructure.tsx"),
  ]),
  route("administrator/login", "routes/administrator/login.tsx"),
  
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
