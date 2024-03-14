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
import ActiveCourseDashboard from "../pages/Course/ActiveCourseDashboard";
import CourseDetailPage from "../pages/Course/CourseDetailPage";
import CreateCoursePage from "../pages/Course/CreateCoursePage";
import UpdateCourseForm from "../Components/Course/UpdateCourse/UpdateCourseForm";
import CourseUpdatePage from "../pages/Course/CourseUpdatePage";
import MyCoursePage from "../pages/Course/MyCoursePage";
import ProfilePage from "../pages/Profile/ProfilePage";
import Home from "../Public/Home";
import Kurumsal from "../Public/pages/kurumsal/Kurumsal";
import Ekitap from "../Public/pages/e-kitap/EKitap";
import Egitimler from "../Public/pages/egitimler/Egitimler";
import Guncel from "../Public/pages/guncel/Guncel";
import Blog from "../Public/pages/blog/Blog";
import Iletisim from "../Public/pages/iletisim/İletisim"
import BlogDetay from "../Public/pages/blogDetay/BlogDetay";
import GuncelDetay from "../Public/pages/GuncelDetay/GuncelDetay";
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
        path: "/panel/kurslar", component: <ActiveCourseDashboard />
    },
    {
        path: "/panel/kurs/:id", component: <CourseDetailPage />
    },
    {
        path: "/panel/kurs/ekle", component: <CreateCoursePage />
    },
    {
        path: "/panel/kurs/duzenle/:id", component: <CourseUpdatePage />
    },
    {
        path: "/panel/kurslarim", component: <MyCoursePage />
    },
    {
        path: "/panel/profil", component: <ProfilePage />
    },
    {
        path: "*", component: <Navigate to={"/"} />
    }
]


const publicRoutes = [
    // Authentication Page
    { path: "/", component: <Home /> },
    { path: "/kurumsal", component: <Kurumsal /> },
    { path: "/ekitap", component: <Ekitap /> },
    { path: "/egitimler", component: <Egitimler /> },
    { path: "/login", component: <Login /> },
    { path: "/guncel", component: <Guncel /> },
    { path: "/guncel/:id", component: <GuncelDetay /> },
    { path: "/blog", component: <Blog /> },
    { path: "/blog/:id", component: <BlogDetay /> },
    { path: "/iletisim", component: <Iletisim /> },
    { path: "/register", component: <Register /> },
];

export {
    publicRoutes,
    authProtectedRoutes
}