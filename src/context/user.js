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
        switch (action.type) {
            case 'LOGIN':
                const {
                    access,
                    ...rest
                } = action.payload;

                localStorage.setItem('authToken', access);
                //localStorage.setItem('steps', JSON.stringify({ stepComplete1, stepComplete2, stepComplete3, stepComplete4 }));

                return {
                    isLoggedIn: true,
                    ...jwt_decode(localStorage.getItem('authToken')),
                    ...rest,
                };


            case 'LOGOUT':
                localStorage.removeItem('authToken');
                //localStorage.removeItem('steps');
                return { isLoggedIn: false, name: '' };

            // case 'UPDATE_STEP':
            //     const { step, value } = action.payload;
            //     const steps = JSON.parse(localStorage.getItem('steps')) || {};
            //     steps[step] = value;
            //     localStorage.setItem('steps', JSON.stringify(steps));
            //     return { ...state, [step]: value };

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