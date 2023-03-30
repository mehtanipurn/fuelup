import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebaseConfig';
import './Navbar.css';

function Navbar(props) {
  // const htmlChange = document.getElementById("changing");
  // const changing = () => {
  //   if(auth.currentUser === !null){
      
  //     htmlChange.innerHTML = `<li className='navbar-li'><Link to = "/Profile" >Profile</Link></li>`;
  //   }
  //   else{
  //     htmlChange.innerHTML = `<li className='navbar-li'><Link to = "/login" >Login</Link></li>`;
  //   }
  // }
  // changing();
  // const someFunction = (props) => {
  //   if (auth.currentUser === !null) {
  //     return <li className='navbar-li'><Link to = "/Profile" >Profile</Link></li>;
  //   } else {
  //     return <li className='navbar-li'><Link to = "/login" >Login</Link></li>;
  //   }
  //   // return null;
  // };
  return (
    
    <nav className="navbar">
      <div className="logo">
        <img src="https://cdn.vectorstock.com/i/1000x1000/19/52/fuel-icon-vector-981952.webp" alt="Logo" />
        <span >FuelUp</span>
      </div>
      <ul className="nav-links">
        <li className='navbar-li'><Link to = "/" > Home</Link></li>
        {/* <li className='navbar-li'><Link to = "/Location" >Location</Link></li> */}
        <li className='navbar-li'><Link to = "/Contact" >Contact Us</Link></li>
        <li className='navbar-li'><Link to="/About">About Us</Link></li>
        <li className='navbar-li'><Link to={props.linkto}>{props.navchange}</Link></li>
        {/* <div className="changing" id = "changing"></div> */}
        {/* {someFunction()} */}

      </ul>
      <div className="logo">
       <Link to ="/Profile"> <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg" alt="Profile" /> </Link>
      </div>
  
    </nav>
  );
}

export default Navbar;
