import React from 'react'
import { useSelector } from 'react-redux'
import Logout from './Logout';
import Nav from './Nav';
import Plus from './Plus';
// import  Navbar from '../Components/Navbar/Navbar';

const User = () => {
    const user = useSelector(state => state.users)
    return (
        <div>
            {/* <Nav />   */} 
            {
                user && user.map((item) => {
                    return (
                        <>
                            <h1 style={{ textAlign: "center" }}> welcome  {item.name}</h1>
                            <h3 style={{ textAlign: "center" }}> your email is  {item.email}</h3>
                            <h3 style={{ textAlign: "center" }}> your password is  {item.password}</h3>
                            <Plus />
                        </>
                    )
                })
            }

        </div>
    )
}



export default User;