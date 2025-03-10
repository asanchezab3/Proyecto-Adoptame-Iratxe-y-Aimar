import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/inicio.tsx"),
    route("/lista", "routes/lista.tsx"),
    route("/detalle/:id", "routes/detalle.tsx"),
    route("/contacto", "routes/contacto.tsx"),
    route("/Auth/Login", "routes/login.tsx"),
    route("/Auth/Register", "routes/register.tsx")
] satisfies RouteConfig;
