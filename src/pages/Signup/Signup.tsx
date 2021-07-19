import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from "axios"



function Signup() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");


    const navigate = useNavigate();


    async function signupService() {
        console.log(username, email, password)
        try {
            const signupServiceResponse = await axios.post('https://quiz-me-backend.herokuapp.com/user/signup',
                {
                    user: {
                        username: username,
                        email: email,
                        password: password,
                    }
                });
            console.log(signupServiceResponse)
            return signupServiceResponse
        } catch (error) {
            console.log(error)
        }

    }

    async function handleUserSignup(e: any) {
        e.preventDefault();

        const response = await signupService()
        console.log(response)

        if (response?.status === 201) {
            navigate("/");

        }


    }


    return (
        <>
            <div className={`flex  mx-72 justify-center h-48`} >
                <form className={`flex flex-col w-1/2`} onSubmit={e => handleUserSignup(e)}  >
                    {/* onSubmit={e => handleLogin(e)} */}
                    <input className={`my-4 p-4 border-2 border-gray-200`} type="text" placeholder="Username" id="username" onChange={(e) => setUsername(e.target.value)} />
                    <input className={`my-4 p-4 border-2 border-gray-200`} type="text" placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} />

                    <input className={`my-4 p-4 border-2 border-gray-200`} type="password" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    <button className={`bg-green-400 p-2 rounded text-sm text-white`}>{"Signup"}</button>
                </form>
            </div>
        </>
    )
}
// 
// onChange={(e) => setPassword(e.target.value)}
export default Signup
