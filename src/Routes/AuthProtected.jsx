import React, { useEffect, useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "../context/user";

const AuthProtected = (props) => {
    const { role } = props
    const [state, dispatch] = useContext(UserContext);
    let formatRole = ""
    if (state.role) {
        formatRole = state.role.replace(/\s+/g, '');
    }

    if (!state.isLoggedIn) {
        return <Navigate to={"/"} />;
    }
    else if (!role.includes(formatRole)) {
        return <Navigate to={"/panel/anasayfa"} />
    }

    return <>{props.children}</>;
};

export {
    AuthProtected
}