import React, { useState } from 'react';

function Checkout({ cart }) {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    payment: ''
  });

  const handleInputChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', bookingDetails);
    console.log('Cart:', cart);
    // Handle booking submission logic here
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={bookingDetails.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={bookingDetails.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="payment"
          placeholder="Payment Details"
          value={bookingDetails.payment}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Checkout;