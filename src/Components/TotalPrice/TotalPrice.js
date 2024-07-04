import React from 'react'; // Import React
import './TotalPrice.css'; // Import custom CSS for styling

const TotalPrice = ({ totalPrice, show }) => ( // Accept totalPrice and show props
  <div className={`total-price-container R{show ? 'show' : ''}`}> {/* Conditional class for visibility */}
    <h2>Total price: R{totalPrice}</h2> {/* Display the total price */}
  </div>
);

export default TotalPrice; // Export the component
