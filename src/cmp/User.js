import React from 'react'
import { useSelector } from 'react-redux'
import Logout from './Logout';
import Nav from './Nav';
// import  Navbar from '../Components/Navbar/Navbar';

const User = () => { 
    const user = useSelector(state => state.users)
  return (
    <div>   
<Nav/> 

    {
        user && user.map((item) => {
            return( 
                <>  
                <h1> welcome  {item.name}</h1>  
                </>
            )
        })
    }
    
    </div>
  )
}

export default User