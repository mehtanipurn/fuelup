import React, { useState, useEffect } from "react";
import axios from "axios";
const PetrolPrices = () => {
  const [petrolPrice, setPetrolPrice] = useState("23");
  const [dieselPrice, setDieselPrice] = useState("33");
  // const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://daily-fuel-prices-india.p.rapidapi.com/api/hp/city/dehradun',
    headers: {
      'X-RapidAPI-Key': 'a034292acbmshca9558faa6987e9p10e248jsn9c50eefccc2a',
      'X-RapidAPI-Host': 'daily-fuel-prices-india.p.rapidapi.com'
    }
  };
  const fetchAPI = () =>{
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }
  fetchAPI();
  // fetchAPI();
  // useEffect(() => {
    
  // }, []);

  return (
    <div>
      {/* <h2 className="text-xl font-bold mb-2">Current Fuel Prices</h2>
      <div id='mypp_embd_AllFuelCityDD' city="Pune" data-url='https://www.mypetrolprice.com/Embed/AllFuelCityDD/AllFuelCityDD.aspx'></div>
<script type='text/javascript' src='https://www.mypetrolprice.com/BEmbed/AllFuelCityDD/AllFuelCityDD.js'></script>
      {petrolPrice && (
        <p className="text-gray-700 text-sm mb-2">Petrol: {petrolPrice}</p>
      )}
      {dieselPrice && (
        <p className="text-gray-700 text-sm mb-2">Diesel: {dieselPrice}</p>
      )} */}
      <div id='mypp_embd_SpecFuelCity' fuel="Diesel" city="Pune" data-url='https://www.mypetrolprice.com/Embed/SpecificFuelCity/SpecificFuelCity.aspx'></div>
<script type='text/javascript' src='https://www.mypetrolprice.com/Embed/SpecificFuelCity/SpecificFuelCity.js'></script>
    </div>
  );
};

export default PetrolPrices;
