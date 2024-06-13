import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-900 text-white p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold mb-4">THANK YOU FOR ORDERING YOUR FOOD</h1>
        <p className="text-lg mb-4">
          We appreciate your order and are excited to prepare your delicious meal. Our team is committed to using the freshest ingredients and the highest standards of cooking to ensure your complete satisfaction.
        </p>
        <p className="text-lg mb-4">
          Your order is being processed and will be delivered to you shortly. We hope you enjoy your meal as much as we enjoyed preparing it for you. If you have any questions or special requests, please feel free to contact us.
        </p>
        <p className="text-lg mb-4">
          Thank you for choosing our service. We look forward to serving you again soon!
        </p><br></br>
        <p className="text-md mb-4">
          Hussain Mehboob
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
