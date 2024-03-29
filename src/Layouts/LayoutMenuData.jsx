import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

const Navdata = () => {
    const history = useNavigate();
    const [isApps, setIsApps] = useState(false);
    const [isAppointments, setIsAppointments] = useState(false);
    const [iscurrentState, setIscurrentState] = useState("Dashboard");

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
            id: "Anasayfa",
            label: "Anasayfa",
            icon: "ri-home-4-line",
            link: "/panel/anasayfa",
            click: function (e) {
                e.preventDefault()
            },
            role: ["SüperAdmin", "Admin", "Öğrenci", "Öğretmen"]
        },
        {
            id: "Eğitmenler",
            label: "Eğitmenler",
            icon: "ri-user-4-line",
            link: "/panel/egitmen",
            click: function (e) {
                e.preventDefault();
            },
            role: ["SüperAdmin", "Admin"]
        },
        {
            id: "admin",
            label: "Admin",
            icon: "ri-admin-line",
            link: "/panel/admin",
            click: function (e) {
                e.preventDefault();
            },
            role: ["SüperAdmin", "Admin"]
        },

        {
            id: "branslar",
            label: "Branslar",
            icon: "ri-git-branch-fill",
            link: "/panel/branslar",
            click: function (e) {
                e.preventDefault();
                setIscurrentState("Branslar");
            },
            role: ["SüperAdmin", "Admin"]
        },
        {
            id: "dönemler",
            label: "Dönemler",
            icon: "ri-calendar-line",
            link: "/panel/donemler",
            click: function (e) {
                e.preventDefault();
            },
            role: ["SüperAdmin", "Admin"]
        },
        {
            id: "kurslar",
            label: "Kurslar",
            icon: "ri-git-repository-line",
            link: "/panel/kurslar",
            click: function (e) {
                e.preventDefault();
                setIsApps(!isApps);
                setIscurrentState("Apps");
                updateIconSidebar(e);
            },
            stateVariables: isApps,
            subItems: [
                {
                    id: "aktifkurslar",
                    label: "Aktif Kurslar",
                    icon: "ri-menu-line",
                    link: "/panel/kurslar",
                    parentId: "kurslar",
                    role: ["SüperAdmin", "Admin", "Öğrenci"]
                },
                {
                    id : "kurslarim",
                    label : "Kurslarım",
                    icon : "ri-menu-line",
                    link : "/panel/kurslarim",
                    parentId : "kurslar",
                    role : ["Öğrenci"]
                },
                {
                    id: "sorumlukurslar",
                    label: "Sorumlu Kurslarım",
                    icon: "ri-line-chart-line",
                    link: "/panel/sorumlukurslar",
                    parentId: "kurslar",
                    role: ["Öğretmen"]
                },
            ],
        },
        {
            id: "ogrenci",
            label: "Öğrenciler",
            icon: "ri-user-line",
            link: "/panel/ogrenciler",
            click: function (e) {
                e.preventDefault();
                setIsAppointments(!isAppointments);
                setIscurrentState("Appointments");
                updateIconSidebar(e);
            },
            role: ["SüperAdmin", "Admin"]
        }
    ];




    return <React.Fragment>
        {menuItems}
    </React.Fragment>;
};
export default Navdata;
