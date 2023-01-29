import React, { createContext, useReducer } from 'react'

export const UserContext = createContext();

const userReducer = (state = {}, action) => {
    const { type, payload } = action; //type of action, payload -> the info 

    switch (type) {
        case "LOG_IN":
            state = payload;
            break;
        case "LOG_OUT":
            state = {};
            break;

        default:
            break;
    }
    return state;
}

function UserProvider({ children }) {
    // const [user, setUser] = useState({ name: "kjbe,kbvfkjb" });
    const [user, dispatch] = useReducer(userReducer, { name: "kjbe,kbvfkjb" });

    const login = async (email, password) => {
        console.log({ email, password });
        // setUser({ name: "name changed by state", email: "ass@gg.com" });
        dispatch({
            type: "LOG_IN",
            payload: { name: "name after login by reducer", email: "ass@gg.com" }
        });
    }

    const signUp = (body) => {
        //post request top server
        // update the state
        // setUser({ name: "name changed by state", email: "ass@gg.com" });
        dispatch({
            type: "LOG_IN",
            payload: { name: "name after login by reducer", email: "ass@gg.com" }
        });
    }

    return (
        <UserContext.Provider value={{ user, login, signUp }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;