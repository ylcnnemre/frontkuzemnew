import React, { useContext } from 'react'
import "./MainNavbar.scss"
import Logo from "../../../assets/images/logo.png"
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'
import { Dropdown } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { TfiWorld } from 'react-icons/tfi'
import { Form } from "react-bootstrap"
import { FaLaugh } from 'react-icons/fa'
import LanguagePicker from '../LanguagePicker/LanguagePicker'
import { UserContext } from '../../../context/user'
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown'

const MainNavbar = () => {
    const { t, i18n } = useTranslation();
    const [state, dispatch] = useContext(UserContext)
    console.log("state =>", state)
    const navigate = useNavigate()
    const clickHandle = async lang => {
        await i18n.changeLanguage(lang)
    }

    return (
        <div className='navbar_container' >
            <img src={Logo} alt="" id='logo' />
            <div className='navbar_links' >
                <NavLink to={"/"} className={"navbar_link"}  >
                    Anasayfa
                </NavLink>
                <NavLink to={"/kurumsal"} className={"navbar_link"}  >
                    Kurumsal
                </NavLink>
                <NavLink to={"/ekitap"} className={"navbar_link"}  >
                    E-Kitap
                </NavLink>
                <NavLink to={"/egitimler"} className={"navbar_link"}  >
                    Eğitimler
                </NavLink>
                <NavLink to={"/guncel"} className={"navbar_link"}  >
                    Güncel
                </NavLink>
                <NavLink to={"/blog"} className={"navbar_link"} >
                    Blog
                </NavLink>
                <NavLink to={"/iletisim"} className={"navbar_link"} >
                    İletişim
                </NavLink>
            </div>

            <LanguagePicker />

            <div className='navbar_btn_container'>
                {
                    !state.isLoggedIn && (
                        <Button color='primary' style={{ color: "white" }} onClick={()=>{
                            navigate("/login")
                        }}  >
                            Oturum Aç
                        </Button>
                    )
                }
                {
                    state.isLoggedIn && (
                        <ProfileDropdown />
                    )
                }

            </div>

        </div>
    )
}

export default MainNavbar