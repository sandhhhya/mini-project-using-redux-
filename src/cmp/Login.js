import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import { FormControl, Input, InputLabel, Paper, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
    // const {username , password} = contactInfo; 
    const [contactInfo, setContactInfo] = useState({
        email: "",
        password: "",

    });
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    const log = (e) => {
        e.preventDefault();

        const payload = users.find(user => user.email === contactInfo.email && user.password === contactInfo.password)
        if (payload) {
            dispatch({
                type: 'LOGIN',
                payload
            });
            toast("login successfully")
            navigate('/user');
        } else {
            alert('rong');
        }
    }


    const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    };
    return (
        <div> 
        <div style={{
            width : "500px" , height : " 500px" , position: "relative" , left: "500px" , top: " 200px "
        }}>  
            <h1> Login form </h1>
            <form>

                <FormControl style={{ margin: "10px", width: "400px" }}>
                    <InputLabel htmlFor="my-input" >Email  Email </InputLabel>
                    <Input name="email"

                        value={contactInfo.email}
                        onChange={handleChange} id="my-input" aria-describedby="my-helper-text" />  </FormControl>

                <FormControl style={{ margin: "10px", width: "400px" }}>
                    <InputLabel htmlFor="my-input" >Enter Password  </InputLabel>
                    <Input name="password"

                        value={contactInfo.password}
                        onChange={handleChange} id="my-input" aria-describedby="my-helper-text" />  </FormControl>



                <div>
                    <Button style={{ margin: "10px", width: "400px" }} size="large"  Color = "secondary" variant='contained' onClick={log}>Submit Contact</Button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Login;