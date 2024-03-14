import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Button } from "reactstrap";
import { CgProfile } from "react-icons/cg";
//import images
import avatar1 from "../../assets/images/users/user-dummy-img.jpg";
import { UserContext } from "../../context/user";

const ProfileDropdown = () => {
    const [state, dispatch] = useContext(UserContext);
    const [isProfileDropdown, setIsProfileDropdown] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const toggleProfileDropdown = () => {
        setIsProfileDropdown(!isProfileDropdown);
    };
    const navigate = useNavigate()
    return (
        <React.Fragment>
            <Dropdown
                isOpen={isProfileDropdown}
                toggle={toggleProfileDropdown}
                className="ms-sm-3 header-item topbar-user"
            >
                <DropdownToggle tag="button" type="button" className="btn">
                    <span className="d-flex align-items-center">
                        <img
                            className="rounded-circle header-profile-user"
                            src={profileImage || avatar1}
                            alt="Header Avatar"
                        />
                        <span className="text-start ms-xl-2">
                            <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text">
                                {state.name + " " + state.surname}
                            </span>
                        </span>
                    </span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-end">
                    <h6 className="dropdown-header">Hoş Geldiniz !</h6>
                    <DropdownItem className="p-0"  >
                        <Link className="dropdown-item" to={"/panel/profil"} style={{ display: "flex", alignItems: "center", fontSize: "14px" }}   >
                            <CgProfile style={{ marginRight: "10px" }} />
                            Profil
                        </Link>
                    </DropdownItem>


                    <DropdownItem className="p-0">

                        <div onClick={() => dispatch({ type: "LOGOUT" }) } className="dropdown-item">
                            <span className="align-middle" data-key="t-logout">
                                <i className="mdi mdi-logout text-muted fs-16 align-middle me-1"></i>
                                Çıkış Yap
                            </span>
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </React.Fragment>
    );
};

export default ProfileDropdown;
