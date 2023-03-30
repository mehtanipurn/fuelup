import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <>
      <header className="landing-header">
        <h1 className="landing-h1">Online Fuel Delivery</h1>
        <p>Get your fuel delivered right to your doorstep</p>
      </header>
      <div>
        <div className="fuel-products">
          <div className="product">
            <h2 className="landing-h2">Diesel</h2>
            <p className = "landing-p">Price per liter: 90.20 Rs</p>
            <Link to ="/Location"> <button className='landing-button'>Order Now</button> </Link>
          </div>
          
          <div className="product">
            <h2 className = "landing-h2">Petrol</h2>
            <p className = "landing-p">Price per liter: 95.13 Rs</p>
            <Link to ="/Location"> <button className='landing-button'>Order Now</button> </Link>
          </div>
          </div>
      </div>
        <div className="why-choose-us">
          <h2 className = "landing-h2">Why Choose Us</h2>
          <ul className = "landing-ul">
            <li className='landing-li'>
              <img className = "landing-img"src="https://img.freepik.com/premium-vector/fast-delivery-icon-express-delivery-urgent-delivery-services-stopwatch-sign_349999-859.jpg?w=1060" alt="Fast delivery" />
              <div>
                <h3 className = "landing-h3">Fast Delivery</h3>
                <p className = "landing-p">Get your fuel delivered within finest time of placing your order</p>
              </div>
            </li>
            <li className='landing-li'>
              <img className = "landing-img" src="https://previews.123rf.com/images/arcady31/arcady311507/arcady31150700002/42231697-secure-protected-payments-icon.jpg" alt="Secure payment" />
              <div>
                <h3 className = "landing-h3">Secure Payment</h3>
                <p className = "landing-p">Pay securely online using your credit card/debit card or UPI account</p>
              </div>
            </li>
            <li className='landing-li'>
              <img className = "landing-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9xVU95XuV4Y16SY7FdKl6qCDaoz5U5Y96g&usqp=CAU" alt="24/7 support" />
              <div>
                <h3 className = "landing-h3">24/7 Support</h3>
                <p className = "landing-p">Contact us anytime if you have questions or concerns about your order</p>
              </div>
            </li>
          </ul>
        </div>
      {/* </main> */}
    
      </>
  );
}

export default Landing;
