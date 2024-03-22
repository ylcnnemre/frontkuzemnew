import React, { useContext } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import VerticalLayout from "../Layouts/index";
import NonAuthLayout from "../Layouts/NonAuthLayout";
import { authProtectedRoutes, publicRoutes } from './allRouter';
import { AuthProtected } from "./AuthProtected"
import { UserContext } from '../context/user';
const Index = () => {
    const [context, Dispatch] = useContext(UserContext)
    console.log("cx=> ", context)
    return (
        <Routes>
            <Route>
                {publicRoutes.map((route, idx) => (
                    <Route
                        path={route.path}
                        element={
                            <NonAuthLayout>
                                {route.component}
                            </NonAuthLayout>
                        }
                        key={idx}
                        exact={true}
                    />
                ))}
            </Route>

            <Route>
                {authProtectedRoutes.map((route, idx) => {

                    return (
                        <Route
                            path={route.path}
                            element={
                                <AuthProtected role={route.role} >
                                    <VerticalLayout>{route.component}</VerticalLayout>
                                </AuthProtected>}
                            key={idx}
                            exact={true}
                        />
                    )

                })}
            </Route>
        </Routes>
    )
}

export default Index