import React, { useState } from 'react';
import { Card, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import TotalPrice from '../TotalPrice/TotalPrice'; // Import TotalPrice component
import all_product from '../../Assets/all_products'; // Importing all_product
import './Products.css'; // Custom CSS for Products

const Products = () => {
  const [totalPrice, setTotalPrice] = useState(0); // State to track total price
  const [showTotalPrice, setShowTotalPrice] = useState(false); // State to show/hide TotalPrice

  // Function to handle buying a product
  const handleBuy = (price) => {
    setTotalPrice(totalPrice + price); // Update total price when buying
    setShowTotalPrice(true); // Show TotalPrice when a product is purchased
  };

  return (
    <div className="products-container"> {/* Main container for products */}
     {showTotalPrice && ( /* Conditional rendering for TotalPrice */
        <TotalPrice totalPrice={totalPrice} /> /* Display TotalPrice when showTotalPrice is true */
      )}

      {all_product.map((product) => ( /* Use all_product array to display products */
        <Card key={product.id} className="product-card"> {/* Unique key for each card */}
          <Card.Img variant="top" src={product.image} alt={product.name} /> {/* Product image */}
          <Card.Body>
            <Card.Title>{product.name}</Card.Title> {/* Product title */}
            <Card.Text>{product.description}</Card.Text> {/* Product description */}
            <Card.Text>Price: R{product.new_price}</Card.Text> {/* Display product price */}
            
            <DropdownButton title="Select Colour"> {/* Dropdown for colour */}
              <Dropdown.Item>Red</Dropdown.Item> {/* Colour options */}
              <Dropdown.Item>Blue</Dropdown.Item>
              <Dropdown.Item>Green</Dropdown.Item>
            </DropdownButton>

            <Button onClick={() => handleBuy(product.new_price)} className="buy-button"> {/* Buy button */}
              Buy
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Products; // Export the component
