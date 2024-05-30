
import React, { children , createContext, useContext, useEffect, useState } from "react";
const URL = "http://localhost:5000/api/auth/user";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const authorizationToken = `Bearer ${token}`;
    
    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    let isloggedIn = !!token;
    console.log("isloggedin", isloggedIn);


    //tackling logout functionality
    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token"); 
    };

    //JWT AUTHETICATION - to get currently loggedin user data

    const userAuthetication = async() => { 
        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if(response.ok){
                const data = await response.json();
                setUser(data.userData);
                console.log("user data", data.userData);
                setIsLoading(false);
            } else{
                setIsLoading(false);
            }

        } catch (error) {
            console.error("Error fetching user data");
        }
    };

    useEffect(() => {
        userAuthetication();
    },[]);

    return (
        <AuthContext.Provider 
            value={{ 
                isloggedIn, 
                storeTokenInLS, 
                LogoutUser, 
                user, 
                authorizationToken,
                isLoading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

//custom hook
export const useAuth = () =>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
}