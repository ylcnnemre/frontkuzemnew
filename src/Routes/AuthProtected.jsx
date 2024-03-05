import React, { useEffect, useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "../context/user";

const AuthProtected = (props) => {
    const [state, dispatch] = useContext(UserContext);

    if (!state?.isLoggedIn) {
        return <Navigate to={{ pathname: "/login", state: { from: props.location } }} />;
    }

    return <>{props.children}</>;
};

export {
    AuthProtected
}