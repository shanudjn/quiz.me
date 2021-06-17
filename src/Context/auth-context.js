import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext();

export function AuthProvider({ children }) {


    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [token, setToken] = useState(null)



    useEffect(() => {
        const { isUserLogIn, token } = JSON.parse(localStorage?.getItem("login")) || {}

        isUserLogIn && setIsUserLoggedIn(true);
        token && setToken(token)
    }, [])

    function loginUser(token) {
        setIsUserLoggedIn(true);
        setToken(token);
        localStorage?.setItem("login", JSON.stringify({ isUserLogIn: true, token }))
    }
    async function loginService(username, password) {
        const loginServiceResponce = await axios.post("https://quiz-me-backend.herokuapp.com/user/login", { username: username, password: password });
        console.log(loginServiceResponce)
        return loginServiceResponce;
    }

    async function loginUserWithCredentials(username, password) {
        try {
            const response = await loginService(username, password);
            console.log(response)
            if (response.status === 200) {
                console.log("response 200")
                loginUser(response.data.token)
                return true;
            }
        } catch (error) {
            console.log("Invalid credentials")
        }
    }
    function logOutUser() {
        console.log("Loging out");
        localStorage?.removeItem("login")
        setIsUserLoggedIn(false);
        setToken(null);
        // return
    }

    return <AuthContext.Provider value={{ isUserLoggedIn, token, loginUserWithCredentials, logOutUser }}>
        {children}
    </AuthContext.Provider>
}

export function useAuth() {
    return useContext(AuthContext);
}