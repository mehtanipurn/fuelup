import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
function LoginPage() {
  const [valuess, setValuess] = useState({
    email: "",
    password: ""
  });
  // const Home = () =>{
  //   useNavigate("/");
  // }
  const navigate = useNavigate()
  const handleLogin = () =>{
    if(!valuess.email || !valuess.password){
      alert("Enter the values");
    }
    else{
      console.log("signing in");
      signInWithEmailAndPassword(auth, valuess.email, valuess.password)
      .then((res) => {
        console.log(res);
        alert("Logged In!");
        navigate("/");
      })
      .catch((err) => {
        alert("Error is", err);
      })
    }
  }
  return (
    <div className="container mt-5 ">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
            <div className="text-center mb-3">
          <button className='landing-button'>Sign-in with Google</button>

           

            <p className="text-center mt-3">or:</p>
          </div>
              <h2 className="card-title text-center mb-4">Log in</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" onChange = {(event) => {
            setValuess((prev) => ({...prev, email: event.target.value}))
          }} id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" onChange = {(event) => {
            setValuess((prev) => ({...prev, password: event.target.value}))
          }} className="form-control" id="password" required />
                </div>
                <p className="btn btn-primary btn-block mt-3" onClick={handleLogin}>Log in</p>
              </form>
              <p>Not a user? <Link to = "/signup"> SignUp </Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
