import React from 'react'
import UserContextProvider from './LoginContext/UserContextProvider';
import Login from './LoginContext/Login';
import Profile from './LoginContext/Profile';
// import App from './Toogle/App';
import TodoApp from './ToDo/TodoApp';

const AppContext = () => {
  return (
    // <UserContextProvider>
    //   <div className='flex flex-col justify-center items-center gap-3 mt-5'>
    //     <Login/>
    //     <Profile/>
    //   </div>
    // </UserContextProvider>
    <>
      <TodoApp/>
    </>
  )
}

export default AppContext