import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Location.css"
const Profile = () => {
    const [qty, setQty] = useState("");
    const [location, setLocation] = useState("");
    const locationn = useLocation();
    // const entity 
    const entitynm = locationn.state.entityName;
    const entityhr = locationn.state.entityPrice;
    


    const navigate = useNavigate();
    const redirectToSummary = () => {
      if(location === "" || qty === ""){
        alert("Please fill the required fields")
      }
      else{
        navigate("/orderSummary", {
        state: {
            quantity: qty,
            locationn: location,
            entityName: entitynm,
            entityPrice: entityhr,

        },
    });
  }
      
    };
    console.log(qty, " ", location);
  return (
    // <form action="/orderSummary" method="get">
    <div className="LQ">
      <p>Location: <input type="text" onChange = {(e) => {
        setLocation(e.target.value)
      }} name="location" id="location" placeholder="26, vikas nagar, near st. joseph college, New Delhi"/></p>
      <p>Quantity in Litre: <input type="number" onChange = {(e) => {
        setQty(e.target.value)
      }} name="qty" id="qty" /></p>

      <p>Entity: {locationn.state.entityName}</p>
      <p>Price: {locationn.state.entityPrice}</p>

      <span className="placeorder" onClick={redirectToSummary}>Place Order </span>
    </div>
    // </form>
  );
};

export default Profile;
