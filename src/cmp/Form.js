import React from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
// import axios from 'axios';

const validationSchema = yup.object({
 
   email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Form = () => {   
  
    const dispatch = useDispatch();
    const users = useSelector(state => state.users);
    // const log = (e) => {
    //     e.preventDefault();
    //     const payload = users.find(user => user.email === contactInfo.email && user.password === contactInfo.password)
    //     if (payload) {
    //         dispatch({
    //             type: 'LOGIN',
    //             payload
    //         });
    //         toast("login successfully")
    //         navigate('/user');
    //     } else {
    //         alert('rong');
    //     }
  
    // }

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit:  async(values , onSubmitProps ) => { 
    //   const a= await axios.post('https://react-project-821db-default-rtdb.firebaseio.com/reactproject.json' , values);
    //   console.log("data is : ")
    //   console.log(a); 
    // e.preventDefault();
    console.log(values);
    const payload = users.find(user => user.email === values.email && user.password === values.password)
    if (payload) {
        dispatch({
            type: 'LOGIN',
            payload
        });
        // toast("login successfully")
        Swal.fire(
          'login successfully',
          'successfully  you login',
          'success'
        )
        navigate('/user');
    } else {
        alert('user not exist please signup ');
        navigate('/');
    }
    
     onSubmitProps.resetForm();
    //  navigate('/user');
    },
  });

  return (
    <div style={{ position: "relative", top: "250px", left: "600px" }}> 
      <form onSubmit={formik.handleSubmit}> 
      <Typography variant="h4" component="h2"> Login form </Typography>
        {/* <TextField sx={{ width: '50ch' }} id='name' name='name' label='Name' value={formik.values.name} onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
           style={{ margin: "10px" }} variant="standard"
         helperText={formik.touched.name&& formik.errors.name} 
        /> <br /> */}
        <TextField sx={{ width: '50ch' }} style={{ margin: "10px" }}
          id="email" variant="standard"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        /><br />
        <TextField sx={{ width: '50ch' }}
          style={{ margin: "10px" }}
          id="password"
          name="password" variant="standard"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        /><br />
        <Button  color="primary" variant="contained" type="submit" style={{ margin: "10px" , width: "540px" }} sx={{ width: '50ch' }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;


