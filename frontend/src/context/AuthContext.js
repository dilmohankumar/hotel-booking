import { createContext, useEffect, useReducer } from "react";

const userFromLocalStorage = localStorage.getItem('user');

let parsedUser = null;
if (userFromLocalStorage && typeof userFromLocalStorage === 'string') {
    try {
        parsedUser = JSON.parse(userFromLocalStorage);
    } catch (error) {
        console.error('Error parsing user from localStorage:', error);
    }
}

const initial_state = {
    user: parsedUser,
    loading: false,
    error: null
};


export const AuthContext = createContext(initial_state);

const authReducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_START":
            return {
                user: null,
                loading: true,
                error: null
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                loading: false,
                error: action.payload
            };
        case "REGISTER_SUCCESS":
            return {
                user: null,
                loading: false,
                error: null
            };
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};

export const AuthcontextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initial_state);
    console.log(state.user)
    useEffect(() => {
        localStorage.setItem(`user`, JSON.stringify(state.user));
    }, [state.user]);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            loading: state.loading,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    );
};
