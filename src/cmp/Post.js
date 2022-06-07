import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const validationSchema = yup.object({
  firstname: yup.string("Enter your  first name").min(3, 'name  should be of minimum 3 charecter')
    .max(30, "charecter should be maximum 30 charecter ")
    .required("Name is required ")
  // , idbook : yup
  //   .required('id book is required ') 
  ,
  lastname: yup
    .string('Enter your  last name')
    .min(4, 'Password should be of minimum 8 characters length')
    .required('last name  is required'),
});

const Post = () => { 
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname : '',
      idbook : '',
    },
    validationSchema: validationSchema,
    onSubmit:  async(values , onSubmitProps ) => { 
      const a= await axios.post('https://fakerestapi.azurewebsites.net/api/v1/Authors' , values);
      console.log("data is : ")
      console.log(a);
      Swal.fire(
        ' successfully',
        'successfully  new user added',
        'success'
      )
     onSubmitProps.resetForm();
     navigate('/user');
    },
  });

  return (
    <div style={{ position: "relative", top: "250px", left: "600px" }}> 
      <form onSubmit={formik.handleSubmit}> 
      <Typography variant="h4" component="h2"> Add a student  </Typography>
        <TextField sx={{ width: '50ch' }} id='name' name='firstname' label=' First Name' value={formik.values.firstname} onChange={formik.handleChange}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
           style={{ margin: "10px" }} variant="standard"
         helperText={formik.touched.firstname&& formik.errors.firstname} 
        /> <br /> 

{/* <Typography variant="h4" component="h2"> Add a student  </Typography> */}
        <TextField sx={{ width: '50ch' }} id='lastname' name='lastname' label=' Last Name' value={formik.values.lastname} onChange={formik.handleChange}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
           style={{ margin: "10px" }} variant="standard"
         helperText={formik.touched.lastname && formik.errors.lastname} 
        /> <br />


        <TextField sx={{ width: '50ch' }} style={{ margin: "10px" }}
          id="idbook" variant="standard"
          name="idbook"
          label="Enter idbook"
          value={formik.values.idbook}
          onChange={formik.handleChange}
          error={formik.touched.idbook && Boolean(formik.errors.idbook)}
        helperText={formik.touched.idbook && formik.errors.idbook}
        /><br />
        
        <Button  color="primary" variant="contained" type="submit" style={{ margin: "10px" , width: "540px" }} sx={{ width: '50ch' }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Post;


