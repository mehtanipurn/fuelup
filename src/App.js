// import React from 'react';
// import Landing from './Components/Landing/Landing';
// import Navbar from './Components/Navbar/Navbar';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Landing />
//     </div>
//   );
// }

// export default App;
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import LoginPage from './Components/LoginPage/LoginPage';
import SignupPage from './Components/SignupPage/SignupPage';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import Location from './Components/Location/Location';
import Contact from './Components/Contact/Contact';
import Admin from './Components/Admin/Admin';

// onAuthStateChanged

// import ReactDOM from "react-dom/client";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/footer/Footer';
import auth from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import OrderSummary from './Components/OrderSummary/OrderSummary';
import BillCalculator from './Components/BillCalculator/BillCalculator';
import PetrolPrices from './Components/PetrolPrices/PetrolPrices';
import Firestoree from './Components/Firestore/Firestoree';
// import firefrom 'firebase/firestore';
// Firestoree
function App() {
  const [userName, setuserName] = useState("")
  const [navChange, setNavChange] = useState("Login")
  const [linkto, setLinkto] = useState("/login")
  const [email, setEmail] = useState("")
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setuserName(user.displayName);
        setEmail(user.email)
        setNavChange("Profile")
        setLinkto("/profile")
      }
      console.log(user);
    })
  }, [onAuthStateChanged]);
  return (
    <BrowserRouter>
    
      <Navbar linkto = {linkto} navchange = {navChange}/>
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/Profile" element={<Profile email = {email} username = {userName}/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/PetrolPrices" element={<PetrolPrices />} />
        <Route path="/orderSummary" element={<OrderSummary />} />
        <Route path="/BillCalculator" element={<BillCalculator />} />
        {/* <Route path="/firestore" element={<Firestoree />} /> */}



      </Routes>
      <Footer />
      
    </BrowserRouter>
  );
}

export default App;



