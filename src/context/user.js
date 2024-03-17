import React, { createContext, useReducer, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

const initialSteps = localStorage.getItem('steps')
    ? JSON.parse(localStorage.getItem('steps'))
    : { stepComplete1: false, stepComplete2: false, stepComplete3: false, stepComplete4: false };

const initialState = localStorage.getItem('authToken')
    ? { isLoggedIn: true, ...jwt_decode(localStorage.getItem('authToken')) }
    : { isLoggedIn: false };

export const UserContext = createContext(initialState);

export function UserStore({ children }) {
    const [state, dispatch] = useReducer((state, action) => {
        console.log("action =>",action.payload)
        switch (action.type) {
            case 'LOGIN':
                const {
                    accessToken,
                    ...rest
                } = action.payload;

                localStorage.setItem('authToken', accessToken.token);
                //localStorage.setItem('steps', JSON.stringify({ stepComplete1, stepComplete2, stepComplete3, stepComplete4 }));

                return {
                    isLoggedIn: true,
                    ...jwt_decode(localStorage.getItem('authToken')),
                    ...rest,
                };

            case 'LOGOUT':
                localStorage.removeItem('authToken');
                return { isLoggedIn: false, name: '' };
            default:
                return state;
        }
    }, initialState);


    return (
        <UserContext.Provider value={[state, dispatch]}>
            {children}
        </UserContext.Provider>
    );
}