
import React, { useState , useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import '../ForgotePassword/Forgote-possword.css'


const ForgotePossword = () => {
    const initialValues = {email:'', password:''};
const [formValues, setFormValues]= useState(initialValues);
const [formErrors, setFormErrors]= useState({});
const [isFormSumit, setIsFormSubmit]=useState();
const [user, setUser]=useState([])



  const handleChange =(e)=> {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]:value})
  }
  
  const handleSubmit =(e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsFormSubmit(true);
    postData();
    console.log(formValues)
  }
  const postData = () =>{

    //const data = {name:formValues.name, description:formValues.description, department_code:formValues.department_code}
    const requestOption ={
      method : "POST",
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(formValues)
    }
    {
    fetch('http://localhost:5000/login', requestOption)
    .then((response) => response.json())
    .then((data) => {
      if(data.status==="success"){
        localStorage.setItem('user', JSON.stringify(data))
      }
    }  )
  }
  //window.location.reload(false);
  }



useEffect(() => {
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isFormSumit) {
    console.log(formValues);
  }
}, [formErrors]);


const validate = (values) => {
  const errors = {};
  console.log("error data", values);
  //const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if(values.email===""){
    errors.email="Email is required";
  }
  if(!values.password){
    errors.password="Password is required";
  }
  return errors;
}

  return (
    <div>
    <div className="container">


      <div className="row justify-content-center h-100">

        <div className="col-xl-10 col-lg-12 col-md-9">

          <div className="card o-hidden border-0 my-5">
            <div className="card-body p-0">
              <div className="row d-flex align-items-center">
                <div className="col-lg-6 offset-md-3">
                  <div className="p-3">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Admin Login</h1>
                    <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
                    </div>
                    <form className="user" >
                      <div className="form-group">
                        <input type="email" name='email' className="form-control form-control-user" value={formValues.email} onChange={handleChange} placeholder="Enter Email Address..." />
                        <p style={{color: "#FF0000"}}>{formErrors.email}</p>
                      </div>
                      
                      
                      
                      <button type='submit' className="btn btn-primary btn-user btn-block" onClick={handleSubmit}>Submit</button>
                      
                      
                      
                    </form>
                    
                    <div className="text-center">
                      <Link to='/forgot-password' className="small"><i class="fa fa-wrench"></i> Back To Homepage</Link>
                    </div>
                    {/* <div className="text-center">
                      <Link to='/register' className="small" >Create an Account!</Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
  )
}

export default ForgotePossword