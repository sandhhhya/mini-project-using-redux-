import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login'; 
import  { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {   
  const navigate = useNavigate();

const user = useSelector(state => state.user);
const dispatch = useDispatch();
    const jok =() => {
        dispatch({
            type: 'LOGOUT'
        }) ;
        toast("logout successfully")
navigate('/login');
            }
  return (
    <div> 
    
    {
				user ? <input type='button'  className='btn btn-primary'
				onClick={jok}
				 value='logout'/> : 
				<Login/> 
			} 
    </div>
  )
}

export default Logout;