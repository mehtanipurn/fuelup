import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
// moment
import auth from '../../firebaseConfig';
import { db } from '../../firebaseConfig';
import { collection, addDoc, doc, setDoc } from "firebase/firestore"; 
import "../../firebaseConfig"
import moment from 'moment/moment';
function OrderSummary(props) {
  const [username, setUsername] = useState("")
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUsername(user.displayName)
      }
      console.log(user);
    })
  }, [onAuthStateChanged]);
    const user = auth.currentUser;
    const placeOrder = async() =>{
      if(auth.currentUser == null){
        alert("Please Login First!")
        navigate("/login")
    }
    else{
    const newCollectionRef = collection(db, 'orders', user.uid, 'newOrder')
    await addDoc(newCollectionRef, {
        location : location.state.locationn,
        quantity: location.state.quantity,
        entityName: location.state.entityName,
        bill: location.state.entityPrice*location.state.quantity,
        deliveryFee:50,
        billTotal: location.state.quantity*location.state.entityPrice+50,
        orderDateTime: moment().format('MMMM Do YYYY, h:mm:ss a')
    })
      .then(function() {
        console.log("Frank created");
        alert("Order Paced! THank You❤️")
        navigate("/")
      });
    }
  }
    const location = useLocation();
    const navigate = useNavigate();
    const delivery = location.state.entityPriced;
    const bill = location.state.quantity*location.state.entityPrice;
    const billamount = location.state.quantity*location.state.entityPrice+50;
  return (
    <div>
      <div className="profile">
      <h1>Order Summary</h1>
      {/* <p>Entity: {location.state.name}!</p> */}
      <p>Quantity: {location.state.quantity} lts.</p>
      {/* <p>Change Password: []</p> */}
      <p>Location: {location.state.locationn}</p>
      <p>Entity: {location.state.entityName}</p>
      <p>Bill Amount = {bill} INR</p>
      <p>Delivery Fee = {50} INR</p>
      <p>Total Bill Amount = {billamount} INR</p>

      <p className = "btn btn-primary btn-block mt-3" onClick = {placeOrder}>Confirm Order</p>
    </div>
    </div>
  );
  }

export default OrderSummary;
