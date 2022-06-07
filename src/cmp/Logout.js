import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { useNavigate } from 'react-router-dom';
import Form from './Form';
import Swal from 'sweetalert2';


const Logout = () => {   
  const navigate = useNavigate();

const user = useSelector(state => state.user);
const dispatch = useDispatch();
    const jok =() => {
        dispatch({
            type: 'LOGOUT'
        }) ;
        Swal.fire(
          'logout successfully',
          'successfully  you logout ',
          'success'
        )

navigate('/form');
            }
  return (
    <div> 
    
    {
				user ? <input type='button'  className='btn btn-primary'
				onClick={jok}
				 value='logout'/> : 
				<Form/> 
			} 
    </div>
  )
}

export default Logout;