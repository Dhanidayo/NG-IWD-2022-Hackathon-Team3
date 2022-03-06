import { createContext, useReducer } from "react";
import blogsData from "../Store/blog";

export const AppContext = createContext();

const initialState = {
    isLoggedIn: false,
    userId: null,
    userEmail: null,
    blogs: blogsData
};

function reducer(state, action) {
    let saveState = {...state};

    if (action.type === 'SIGNUP') {
        saveState.isLoggedIn = false;
        saveState.userEmail = action.payload.userEmail;
        saveState.userId = action.payload.userId;
    }

    if (action.type === 'LOGIN') {
        saveState.isLoggedIn = true;
        saveState.userEmail = action.payload.userEmail;
        saveState.userId = action.payload.userId;
    }
    if (action.type === 'ADD_BLOG') {
        saveState.isLoggedIn = true;
        saveState.blogs = [action.payload.blogposter, ...saveState.blogs];
    }
    if (action.type === 'LOGOUT') {
        saveState.isLoggedIn = false;
        saveState.userEmail = null;
        saveState.userId = null;
    }
    return saveState;
}

const AppStates = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const ContextObject = {
        state,
        dispatch,
    };
    
    return (
        <AppContext.Provider value={ContextObject}>
            { children }
        </AppContext.Provider>
    );
}
 
export default AppStates;