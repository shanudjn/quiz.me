import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../Context/auth-context';

function Login() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("");
    const { isUserLoggedIn, loginUserWithCredentials, logOutUser } = useAuth();
    const navigate = useNavigate();
    const { state } = useLocation();

    async function handleLogin(e) {
        e.preventDefault();
        console.log(username, password)
        await loginUserWithCredentials(username, password);
        navigate(-1);
        // (loginSuccessful) ? navigate(state.from) : navigate('/')
    }
    function handleLogOut() {
        logOutUser();
        console.log("LoggedOut user")
        navigate('/')
    }
    console.log(state?.from)
    return (
        <>
            {
                !isUserLoggedIn && <div className={`flex mx-72 justify-center h-48`} >
                    <form className={`flex flex-col w-1/2`} onSubmit={e => handleLogin(e)} >
                        <input className={`my-4 p-4`} type="text" placeholder="Username" id="username" onChange={(e) => setUserName(e.target.value)} />
                        <input className={`my-4 p-4`} type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} />
                        <button className={`bg-green-400 p-2 rounded text-sm text-white`}>{"Login"}</button>
                    </form>
                </div>
            }
            {
                isUserLoggedIn && <button onClick={handleLogOut} className={`bg-green-400 p-2 rounded text-sm text-white my-4`} >LogOut</button>
            }
        </>

    )

}

export default Login
