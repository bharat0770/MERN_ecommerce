import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
const  Login = () => {
    const [gender, setGender] = useState(""); 
    const [birthDate, setBirthDate] = useState(""); 
    return (
        <div className="login">

        <div className="userLogin">
            <h1>Login</h1>
            <div className="userForm">
                <p>Gender</p>
                <select
                name="gender" 
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                >
                    <option value="">select</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
                    <p>Date Of Birth</p>
                <input 
                type="date"
                value = {birthDate}
                onChange={(e) => setBirthDate(e.target.value)} 
                />
            </div>

            <div>
                <p>already signed in?</p>
                <button>
                    <FcGoogle className='gicon'/> <span> sign in with Google </span>
                </button>
            </div>
        </div>
                </div>
    );
}

export default Login;