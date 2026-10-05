import React from 'react'
import { useContext } from 'react'
import UserContext from './UserContext';

const Profile = () => {
const {user}=useContext(UserContext)
  return (
    <div className='flex flex-col justify-center items-center gap-3 
    mt-5'> 
        {user ? (
            <div className='flex flex-col justify-center items-center gap-3 border-2 border-blue-500 rounded-2xl p-5'>
                <h2 className='text-2xl font-bold text-blue-500'>Profile</h2>
                <p className='text-lg font-bold text-blue-500'>Username: {user.username}</p>
                <p className='text-lg font-bold text-blue-500'>Password: {user.password}</p>
            </div>
        ):(
            <p className='text-lg font-bold text-blue-500'>Please login to see profile</p>
        )}
    </div>
  )
}

export default Profile