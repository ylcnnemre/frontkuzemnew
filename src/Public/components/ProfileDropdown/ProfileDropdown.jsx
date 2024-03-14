import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { CgLogOut, CgProfile } from "react-icons/cg";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import avatar1 from "../../../assets/images/profile.png"
import { UserContext } from '../../../context/user';
const ProfileDropdown = () => {
    const [isProfileDropdown, setIsProfileDropdown] = useState(false);
    const toggleProfileDropdown = () => {
        setIsProfileDropdown(!isProfileDropdown);
    };
    const [state,dispatch]=useContext(UserContext)

    

    return (
        <React.Fragment>
            <Dropdown isOpen={isProfileDropdown} toggle={toggleProfileDropdown} className="ms-sm-3 header-item topbar-user">
                <DropdownToggle tag="button" type="button" className="btn">
                    <span className="d-flex align-items-center">
                        <img className="rounded-circle header-profile-user" src={avatar1}
                            alt="Header Avatar" />
                        <span className="text-start ms-xl-2">
                            <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">{state?.name}</span>
                            {/*  <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text">Founder</span> */}
                        </span>
                    </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                    <h6 className="dropdown-header">Hoşgeldiniz {state?.name}!</h6>
                    <DropdownItem className='p-0'>
                        <Link to="/panel/anasayfa" className="dropdown-item">
                            <CgProfile size={"1.2rem"} style={{ marginRight: "10px" }} />
                            <span className="align-middle">
                                Panel
                            </span>
                        </Link>
                    </DropdownItem>
                    <DropdownItem className='p-0 mt-1'>
                        <p  className="dropdown-item" onClick={()=>{
                            dispatch({ type: "LOGOUT" }) 
                        }} >
                            <CgLogOut size={"1.2rem"} style={{marginRight:"10px"}} />
                            {/* <CgProfile size={"1.2rem"} style={{ marginRight: "10px" }} /> */}
                            <span className="align-middle">
                                Çıkış
                            </span>
                        </p>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    )
}

export default ProfileDropdown