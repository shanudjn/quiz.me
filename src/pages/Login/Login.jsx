import React, { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../Context/auth-context';
import { Link } from 'react-router-dom';


function Login() {
    const [username, setUserName] = useState("test")
    const [password, setPassword] = useState("qwerty");
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
                !isUserLoggedIn && <div className={`flex  mx-72 justify-center h-48`} >
                    <form className={`flex flex-col w-1/2`} onSubmit={e => handleLogin(e)} >
                        <input className={`my-4 p-4 border-2 border-gray-200`} type="text" placeholder="Username" id="username" onChange={(e) => setUserName(e.target.value)} value={username} />
                        <input className={`my-4 p-4 border-2 border-gray-200`} type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <button className={`bg-green-400 p-2 rounded text-sm text-white`}>{"Login"}</button>
                        <p>New User ? <Link to="/signup" className={`text-green-400`}>SignUp</Link> here</p>



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
