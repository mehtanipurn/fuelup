import React, { useState } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import auth from "../../firebaseConfig";
function App() {
  
  const [justifyActive, setJustifyActive] = useState('tab1');;
  
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
  
    setJustifyActive(value);
  };
  const[values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    username: ""
  })
  // const auth = getAuth();
  const navigate = useNavigate();
  const handleSignup = () => {
    if(!values.name || !values.email || !values.password || !values.username){
      alert("Please fill all the values");
    }
    else{
      createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async(res) => {
        const user = res.user;
        console.log(res);
        await updateProfile(user, {
          displayName: values.name,
        })
        navigate("/");
        

      })
      .catch((err) => {
        alert("Error - ", err);
      })
    }
  }
  



  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabsContent>
          <div className="text-center mb-3">
          <button className='landing-button'>Sign-up with Google</button>

           

            <p className="text-center mt-3">or:</p>
          </div>

          <MDBInput wrapperClass='mb-4' label='Name' onChange = {(event) => {
            setValues((prev) => ({...prev, name: event.target.value}))
          }} name = "name" id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Username' onChange = {(event) => {
            setValues((prev) => ({...prev, username: event.target.value}))
          }} name = "username" id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Email' onChange = {(event) => {
            setValues((prev) => ({...prev, email: event.target.value}))
          }} name = "email" id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' onChange = {(event) => {
            setValues((prev) => ({...prev, password: event.target.value}))
          }} name = "password" id='form1' type='password'/>

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={handleSignup}>Sign up</MDBBtn>
          <p>Already a user? <Link to = "/login"> Login </Link> </p>

        {/* </MDBTabsPane> */}

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default App;