
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from '@mui/material';
import { FormControl, Input, InputLabel,  Paper , Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const sub = (e) => {
    e.preventDefault();
    dispatch({
      type: "REGISTER",
      payload: {
        ...contactInfo

      }
    }); 
    toast("registration successfully")
    navigate('/login')
  }

  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  });
  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  return (
    <div className="form-container" style={
      {
        display: "flex", justifyContent: "center", alignItem: "center" ,  width: "400px" ,
        position :"relative" , left: "600px" , top: "150px"
      }
    }> 


      <form> 
        <div>
          <Typography variant="h4"> Registration </Typography>
        </div> 
      
        <div> 

          <FormControl  style={{ margin: "10px" , width: "400px"}}>
            <InputLabel htmlFor="my-input" >Email  Name </InputLabel>
            <Input name="name"

              value={contactInfo.name}
              onChange={handleChange} id="my-input" aria-describedby="my-helper-text" />  </FormControl>
          <FormControl style={{ margin: "10px" ,  width: "400px"}}>
            <InputLabel htmlFor="my-input" >Email  Email </InputLabel>
            <Input name="email"

              value={contactInfo.email}
              onChange={handleChange} id="my-input" aria-describedby="my-helper-text" />  </FormControl>

          <FormControl style={{ margin: "10px" ,  width: "400px"}}>
            <InputLabel htmlFor="my-input" >Enter Password  </InputLabel>
            <Input name="password"

              value={contactInfo.password}
              onChange={handleChange} id="my-input" aria-describedby="my-helper-text" />  </FormControl>


          <FormControl style={{ margin: "10px" ,  width: "400px"}}>
            <InputLabel htmlFor="my-input" > Confirm Password </InputLabel>
            <Input name="confirmpassword"
              value={contactInfo.confirmpassword}
              onChange={handleChange} id="my-input" aria-describedby="my-helper-text" />  </FormControl>
        </div>
        <div>
          <Button style={{ width: "400px" , marginTop: "20px"}} variant="contained" onClick={sub}>Submit </Button>
          <ToastContainer />
        </div>
       
      </form>
      
      
      
     
    






    </div>
  );
}
