import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

const Navdata = () => {
    const history = useNavigate();
    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isApps, setIsApps] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isBaseUi, setIsBaseUi] = useState(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isAppointments, setIsAppointments] = useState(false);
    const [isCategories, setIsCategories] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    const [iscurrentState, setIscurrentState] = useState("Dashboard");

    const [state, dispatch] = useContext(UserContext);
    const role = state?.groups[0];

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    const menuItems = [
        {
            label: "Sayfalar",
            isHeader: true,
        },

        {
            id: "Dashboard",
            label: "Panel",
            icon: "ri-dashboard-line",
            link: "/dashboard",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Dashboard");
            },
        },
        {
            id: "kurumlar",
            label: "Kurumlar",
            icon: "ri-building-line",
            link: "/kurumlar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Kurumlar");
            },
        },

        {
            id: "branslar",
            label: "Branslar",
            icon: "ri-honour-line",
            link: "/branslar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Branslar");
            },
        },
        {
            id: "categories",
            label: "Kategoriler",
            icon: "ri-menu-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsCategories(!isCategories);
                setIscurrentState("Categories");
                updateIconSidebar(e);
            },
            stateVariables: isCategories,
            subItems: [
                {
                    id: "injury-category",
                    label: "Sakatlık Kategorileri",
                    icon: "ri-menu-line",
                    link: "/sakatlik-kategorileri",
                    parentId: "categories",
                },
                {
                    id: "test-category",
                    label: "Test Kategorileri",
                    icon: "ri-menu-line",
                    link: "/test-kategorileri",
                    parentId: "categories",
                },
            ],
        },
        {
            id: "performances",
            label: "Performanslar",
            icon: "ri-line-chart-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsApps(!isApps);
                setIscurrentState("Apps");
                updateIconSidebar(e);
            },
            stateVariables: isApps,
            subItems: [
                {
                    id: "performance-category",
                    label: "Performans Kategorileri",
                    icon: "ri-menu-line",
                    link: "/performans-kategorileri",
                    parentId: "performances",
                },
                {
                    id: "performance",
                    label: "Performanslar",
                    icon: "ri-line-chart-line",
                    link: "/performanslar",
                    parentId: "performances",
                },
            ],
        },
        {
            id: "appointments",
            label: "Randevu",
            icon: "ri-health-book-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsAppointments(!isAppointments);
                setIscurrentState("Appointments");
                updateIconSidebar(e);
            },
            stateVariables: isAppointments,
            subItems: [
                {
                    id: "appointments",
                    label: "Randevular",
                    icon: "ri-menu-line",
                    link: "/randevular",
                    parentId: "appointments",
                },
                {
                    id: "appointmentWorkHour",
                    label: "Randevu Çalışma Saatleri",
                    icon: "ri-line-chart-line",
                    link: "/randevu-saatleri",
                    parentId: "appointments",
                },
            ],
        },
        {
            id: "petitions",
            label: "Dilekçeler",
            icon: "ri-draft-line",
            link: "/dilekceler",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("petitions");
            },
        },
        {
            id: "files",
            label: "Dosyalar",
            icon: "ri-folder-2-line",
            link: "/dosyalar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("files");
            },
        },

        {
            id: "takimlar",
            label: "Takımlar",
            icon: "ri-team-line",
            link: "/takimlar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Takımlar");
            },
        },
        {
            id: "pozisyonlar",
            label: "Pozisyonlar",
            icon: "ri-list-unordered",
            link: "/pozisyonlar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Pozisyonlar");
            },
        },
        {
            id: "ligler",
            label: "Ligler",
            icon: "ri-layout-grid-fill",
            link: "/ligler",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Ligler");
            },
        },
        {
            id: "maclar",
            label: "Maçlar",
            icon: "ri-football-fill",
            link: "/maclar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Maclar");
            },
        },
        {
            id: "turnuvalar",
            label: "Turnuvalar",
            icon: "ri-ping-pong-line",
            link: "/turnuvalar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Turnuvalar");
            },
        },

        {
            id: "sporcular",
            label: "Sporcular",
            icon: "ri-user-line",
            link: "/kullanicilar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Sporcular");
            },
        },
        {
            id: "kullanicilar",
            label: "Tüm Kullanıcılar",
            icon: "ri-group-line",
            link: "/tum-kullanicilar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Kullanicilar");
            },
        },
        {
            id: "takvim",
            label: "Etkinlik Takvimi",
            icon: "ri-calendar-event-line",
            link: "/takvim",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Etkinlik Takvimi");
            },
        },
    ];

    const sporcuMenuItems = [
        {
            id: "Dashboard",
            label: "Panel",
            icon: "ri-dashboard-line",
            link: "/dashboard",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Dashboard");
            },
        },
        {
            id: "profil",
            label: "Profil",
            icon: "ri-user-3-line",
            link: `/pages-profile/${state?.user_id}`,
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Profil");
            },
        },
        {
            id: "maclar",
            label: "Maçlar",
            icon: "ri-football-fill",
            link: "/maclar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Maclar");
            },
        },
        {
            id: "takvim",
            label: "Etkinlik Takvimi",
            icon: "ri-calendar-event-line",
            link: "/takvim",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Etkinlik Takvimi");
            },
        },
        {
            id: "appointments",
            label: "Randevu",
            icon: "ri-health-book-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsAppointments(!isAppointments);
                setIscurrentState("Appointments");
                updateIconSidebar(e);
            },
            stateVariables: isAppointments,
            subItems: [
                {
                    id: "appointments",
                    label: "Randevular",
                    icon: "ri-menu-line",
                    link: "/randevular",
                    parentId: "appointments",
                },
                {
                    id: "appointmentWorkHour",
                    label: "Randevu Çalışma Saatleri",
                    icon: "ri-line-chart-line",
                    link: "/randevu-saatleri",
                    parentId: "appointments",
                },
            ],
        },
        {
            id: "petitions",
            label: "Dilekçeler",
            icon: "ri-draft-line",
            link: "/dilekceler",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("petitions");
            },
        },
        {
            id: "files",
            label: "Dosyalar",
            icon: "ri-folder-2-line",
            link: "/dosyalar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("files");
            },
        },
    ];

    const doctorItems = [
        {
            id: "Dashboard",
            label: "Panel",
            icon: "ri-dashboard-line",
            link: "/dashboard",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Dashboard");
            },
        },
        {
            id: "profil",
            label: "Profil",
            icon: "ri-user-3-line",
            link: `/pages-profile/${state?.user_id}`,
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Profil");
            },
        },
        {
            id: "appointments",
            label: "Randevu",
            icon: "ri-health-book-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsAppointments(!isAppointments);
                setIscurrentState("Appointments");
                updateIconSidebar(e);
            },
            stateVariables: isAppointments,
            subItems: [
                {
                    id: "appointments",
                    label: "Randevular",
                    icon: "ri-menu-line",
                    link: "/randevular",
                    parentId: "appointments",
                },
                {
                    id: "appointmentWorkHour",
                    label: "Randevu Çalışma Saatleri",
                    icon: "ri-line-chart-line",
                    link: "/randevu-saatleri",
                    parentId: "appointments",
                },
            ],
        },
        {
            id: "petitions",
            label: "Dilekçeler",
            icon: "ri-draft-line",
            link: "/dilekceler",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("petitions");
            },
        },
        {
            id: "files",
            label: "Dosyalar",
            icon: "ri-folder-2-line",
            link: "/dosyalar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("files");
            },
        },
    ];

    const antrenorItems = [
        {
            id: "Dashboard",
            label: "Panel",
            icon: "ri-dashboard-line",
            link: "/dashboard",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Dashboard");
            },
        },
        {
            id: "profil",
            label: "Profil",
            icon: "ri-user-3-line",
            link: `/pages-profile/${state?.user_id}`,
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Profil");
            },
        },
        {
            id: "maclar",
            label: "Maçlar",
            icon: "ri-football-fill",
            link: "/maclar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Maclar");
            },
        },
        {
            id: "takvim",
            label: "Etkinlik Takvimi",
            icon: "ri-calendar-event-line",
            link: "/takvim",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Etkinlik Takvimi");
            },
        },
        {
            id: "appointments",
            label: "Randevu",
            icon: "ri-health-book-line",
            link: "/#",
            click: function (e) {
                e.preventDefault();
                setIsAppointments(!isAppointments);
                setIscurrentState("Appointments");
                updateIconSidebar(e);
            },
            stateVariables: isAppointments,
            subItems: [
                {
                    id: "appointments",
                    label: "Randevular",
                    icon: "ri-menu-line",
                    link: "/randevular",
                    parentId: "appointments",
                },
                {
                    id: "appointmentWorkHour",
                    label: "Randevu Çalışma Saatleri",
                    icon: "ri-line-chart-line",
                    link: "/randevu-saatleri",
                    parentId: "appointments",
                },
            ],
        },
        {
            id: "petitions",
            label: "Dilekçeler",
            icon: "ri-draft-line",
            link: "/dilekceler",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("petitions");
            },
        },
        {
            id: "files",
            label: "Dosyalar",
            icon: "ri-folder-2-line",
            link: "/dosyalar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("files");
            },
        },
    ];

    const selectItems = (role) => {
        switch (role) {
            case "superadmin":
                return menuItems;
            case "sporcu":
                return sporcuMenuItems;
            case "hekim":
                return doctorItems;
            case "antrenor":
                return antrenorItems;
            default:
                return menuItems;
        }
    };

    return <React.Fragment>{selectItems(role)}</React.Fragment>;
};
export default Navdata;
