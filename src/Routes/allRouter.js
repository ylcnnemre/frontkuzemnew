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
import TeacherCoursePage from "../pages/Course/TeacherCoursePage";
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
import StudentCourseDashboard from "../pages/Course/StudentCourseDashboard";
const authProtectedRoutes = [
    {
        path: "/panel/anasayfa", component: <Dashboard />, role: ["Öğretmen", "Öğrenci", "Admin", "SüperAdmin"]
    },
    {
        path: "/panel/egitmen", component: <TeacherDashboard />, role: ["Admin", "SüperAdmin"]
    },
    {
        path: "/panel/egitmen/ekle", component: <AddTeacherPage />, role: ["Admin", "SüperAdmin"]
    },
    {
        path: "/panel/egitmen/duzenle/:id", component: <EditTeacherPage />, role: ["Admin", "SüperAdmin"]
    },
    {
        path: "/panel/admin", component: <AdminDashboard />, role: ["SüperAdmin"]
    },
    {
        path: "/panel/admin/ekle", component: <CreateAdminPage />, role: ["SüperAdmin"]
    },
    {
        path: "/panel/admin/duzenle/:id", component: <UpdateAdminPage />, role: ["SüperAdmin"]
    },
    {
        path: "/panel/branslar", component: <BranchDashboard />, role: ["Admin", "SüperAdmin"]
    },
    {
        path: "/panel/donemler", component: <SemesterDashboard />, role: ["Admin", "SüperAdmin"]
    },
    {
        path: "/panel/ogrenciler", component: <StudentDasboard />, role: ["Admin", "SüperAdmin"]
    },
    {
        path: "/panel/ogrenci/ekle", component: <CreateStudenPage />, role: ["Admin", "SüperAdmin"]
    },
    {
        path: "/panel/ogrenci/duzenle/:id", component: <UpdateStudentPage />, role: ["Admin", "SüperAdmin"]
    },
    {
        path: "/panel/kurslar", component: <ActiveCourseDashboard />, role: ["Admin", "SüperAdmin", "Öğrenci"]
    },
    {
        path: "/panel/kurs/:id", component: <CourseDetailPage />, role: ["Admin", "SüperAdmin", "Öğrenci"]
    },
    {
        path: "/panel/kurs/ekle", component: <CreateCoursePage />, role: ["Admin", "SüperAdmin"]
    },
    {
        path: "/panel/kurs/duzenle/:id", component: <CourseUpdatePage />, role: ["Admin", "SüperAdmin"]
    },
    {
        path: "/panel/sorumlukurslar", component: <TeacherCoursePage />, role: ["Öğretmen"]
    },
    {
        path: "/panel/kurslarim", component: <StudentCourseDashboard />, role: ["Öğrenci"]
    },
    {
        path: "/panel/profil", component: <ProfilePage />, role: ["Öğretmen", "Öğrenci", "Admin", "SüperAdmin"]
    },
    {
        path: "*", component: <Navigate to={"/"} />, role: ["Öğretmen", "Öğrenci", "Admin", "SüperAdmin"]
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