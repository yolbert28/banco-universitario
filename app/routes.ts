import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/login","routes/BancaEnLinea/LoginPage.tsx"),
  route("/register","routes/BancaEnLinea/RegistePage.tsx"),
  route("/banca-en-linea/*", "routes/BancaEnLinea/layout.tsx"),
] satisfies RouteConfig;
