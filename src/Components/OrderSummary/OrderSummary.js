import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebaseConfig';

function OrderSummary(props) {
    const location = useLocation();
    const navigate = useNavigate();
  return (
    <div>
      <div className="profile">
      <h1>Order Summary</h1>
      {/* <p>Entity: {location.state.name}!</p> */}
      <p>Quantity: {location.state.quantity} lts.</p>
      {/* <p>Change Password: []</p> */}
      <p>Location: {location.state.locationn}</p>
      <p className = "btn btn-primary btn-block mt-3" onClick={() => {
        if(auth.currentUser == null){
            alert("Please Login First!")
            navigate("/login")
        }
        else{
            alert("Order Paced! THank You❤️")
            navigate("/")
        }
      }}>Confirm Order</p>
    </div>
    </div>
  );
}

export default OrderSummary;
