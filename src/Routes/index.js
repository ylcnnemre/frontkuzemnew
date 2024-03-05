import React from 'react'
import { Routes, Route } from "react-router-dom";
import VerticalLayout from "../Layouts/index";
import NonAuthLayout from "../Layouts/NonAuthLayout";
import { authProtectedRoutes, publicRoutes } from './allRouter';
import { AuthProtected } from "./AuthProtected"
const Index = () => {
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
                {authProtectedRoutes.map((route, idx) => (
                    <Route
                        path={route.path}
                        element={
                            <AuthProtected>
                                <VerticalLayout>{route.component}</VerticalLayout>
                            </AuthProtected>}
                        key={idx}
                        exact={true}
                    />
                ))}
            </Route>
        </Routes>
    )
}

export default Index