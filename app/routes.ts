import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/banca-en-linea/*", "routes/BancaEnLinea/layout.tsx"),
] satisfies RouteConfig;
