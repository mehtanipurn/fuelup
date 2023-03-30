// import React from 'react';

// function Footer() {
//   return (
//   <>
//   <footer className="bg-dark text-white pt-5 pb-4">

// <div className="container text-center text-md-left">

// <div className="row text-center text-md-left">

// <div className="col-md-3 col-lg-3 col-x1-3 mx-auto mt-3"> <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Company Name</h5>

// <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, ital consectetur lorem ipsum dolor sit amet adipisicing elit.</p>

// </div>

// <div className="col-md-2 col-lg-2 col-x1-2 mx-auto mt-3">

// <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>

// <p>

// <a href="#" className="text-white"> TheProviders</a>

// </p> <p>

// <a href="#" className="text-white"> Creativity</a> </p>

// <p>

// <a href="#" className="text-white"> SourceFiles</a>

// </p>

// <p>

// <a href="#" className="text-white"> TheProviders</a>

// </p>

// </div>
// </div>
// </div>
// </footer>
//   </>
//   );
// }

// export default Footer;

import React from "react";
import "./footer.css"
const Footer = () => {
  return (
       <footer className="bg-dark text-white pt-5 pb-4 footer">

      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm sm:text-base">© 2023 Fuel Delivery, Inc. All rights reserved.</p>
        <div className="mt-2 sm:mt-0 flex items-center">
          <a href="#" className="text-gray-500 hover:text-gray-600 ml-4">
            Terms of Service
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-600 ml-4">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

