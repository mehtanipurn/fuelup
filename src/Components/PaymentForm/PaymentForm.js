import React from "react";
import PaytmBlinkCheckout from "paytm-blink-checkout-react";

const PaymentForm = () => {
  const paymentConfig = {
    mode: "TEST", // Replace with "PROD" for production environment
    mid: "YOUR_MERCHANT_ID_HERE",
    orderId: "YOUR_ORDER_ID_HERE",
    txnAmount: {
      value: "100.00",
      currency: "INR",
    },
    userInfo: {
      custId: "YOUR_CUSTOMER_ID_HERE",
    },
    channel: "WEB",
    industryType: "Retail",
    callbackUrl: "YOUR_CALLBACK_URL_HERE",
  };

  const onPaymentSuccess = (response) => {
    console.log(response);
    alert("Payment successful!");
  };

  const onPaymentFailure = (error) => {
    console.error(error);
    alert("Payment failed!");
  };

  return (
    <PaytmBlinkCheckout
      paymentConfig={paymentConfig}
      onSuccess={onPaymentSuccess}
      onFailure={onPaymentFailure}
    >
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Pay with Paytm
      </button>
    </PaytmBlinkCheckout>
  );
};

export default PaymentForm;
