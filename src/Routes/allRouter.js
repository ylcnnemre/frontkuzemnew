import { Navigate } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Register from "../pages/Register/Register";
import AddTeacherPage from "../pages/Teacher/AddTeacherPage";
import EditTeacherPage from "../pages/Teacher/EditTeacherPage";
import TeacherDashboard from "../pages/Teacher/TeacherDashboard";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdminPage from "../pages/Admin/CreateAdminPage";
import UpdateAdminPage from "../pages/Admin/UpdateAdminPage";
import BranchDashboard from "../pages/Branch/BranchDashboard";
import SemesterTable from "../Components/Semester/SemesterTable";
import SemesterDashboard from "../pages/Semester/SemesterDashboard";
import StudentTable from "../Components/Student/StudentTable";
import StudentDasboard from "../pages/Student/StudentDasboard";
import CreateStudenPage from "../pages/Student/CreateStudenPage";
import UpdateStudentPage from "../pages/Student/UpdateStudentPage";

const authProtectedRoutes = [
    {
        path: "/panel/anasayfa", component: <Dashboard />
    },
    {
        path: "/panel/egitmen", component: <TeacherDashboard />
    },
    {
        path: "/panel/egitmen/ekle", component: <AddTeacherPage />
    },
    {
        path: "/panel/egitmen/duzenle/:id", component: <EditTeacherPage />
    },
    {
        path: "/panel/admin", component: <AdminDashboard />
    },
    {
        path: "/panel/admin/ekle", component: <CreateAdminPage />
    },
    {
        path: "/panel/admin/duzenle/:id", component: <UpdateAdminPage />
    },
    {
        path: "/panel/branslar", component: <BranchDashboard />
    },
    {
        path: "/panel/donemler", component: <SemesterDashboard />
    },
    {
        path: "/panel/ogrenciler", component: <StudentDasboard />
    },
    {
        path: "/panel/ogrenci/ekle", component: <CreateStudenPage />
    },
    {
        path: "/panel/ogrenci/duzenle/:id", component: <UpdateStudentPage />
    },
    {
        path: "*", component: <Navigate to={"/panel/anasayfa"} />
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