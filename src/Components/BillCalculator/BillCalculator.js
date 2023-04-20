import React, { useState } from "react";
import PetrolPrices from "../PetrolPrices/PetrolPrices";

const BillCalculator = () => {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleCalculate = () => {
    const price = 90.20;
    const total = quantity * price;
    setTotal(total);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Bill Calculator</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
          Quantity (Litres)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="quantity"
          type="number"
          min="0"
          step="0.01"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <PetrolPrices />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleCalculate}
      >
        Calculate Total
      </button>
      {total > 0 && (
        <p className="text-gray-700 text-sm mt-2">
          Total: ${total.toFixed(2)}
        </p>
      )}
    </div>
  );
};

export default BillCalculator;
