import React from 'react'
import { useState, useContext } from 'react'
import UserContext from './UserContext';

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { setUser } = useContext(UserContext)

    const handleSubmit = () => {
        if (!username || !password) {
            alert("Please fill all the fields")
            return
        }
        setUser({ username, password })
    }
    return (
        <div className='flex flex-col justify-center items-center gap-3 border-2 border-blue-500 rounded-2xl p-5'>
            <h2 className='text-2xl font-bold text-blue-500'>Login</h2>
            <input type="text"
                placeholder='Enter Name'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='border-2 border-blue-500 rounded-1xl p-1'
                required
            />
            {"  "}
            <input type="text" placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border-2 border-blue-500 rounded-1xl p-1'
                required

            />
            <button onClick={handleSubmit}
                className='border-2 border-blue-500 rounded-2xl p-1 hover:bg-blue-500 hover:text-white active:bg-blue-700 active:text-green-500'>
                    SUBMIT
            </button>

        </div>
    )
}

export default Login