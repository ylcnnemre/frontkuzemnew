import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register/Register";

const authProtectedRoutes = [
    {
        path: "/main", component: <Dashboard />
    }
]


const publicRoutes = [
    // Authentication Page
    { path: "/login", component: <Login /> },

    { path: "/register", component: <Register /> },
];

export {
    publicRoutes,
    authProtectedRoutes
}