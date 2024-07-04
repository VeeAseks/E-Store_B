import React from 'react'; // Import React
import { Figure } from 'react-bootstrap'; // Import Bootstrap's Figure component
import TotalPrice from '../TotalPrice/TotalPrice'; // Import TotalPrice component
import './About.css'; // Custom CSS for styling
import logo from '../../Assets/logo.png'; // Correct reference to the logo
import image1 from '../../Assets/about_image1.png'; // First store image
import image2 from '../../Assets/about_image2.png'; // Second store image
import contactImage from '../../Assets/contact_image.png'; // Contact image

function About({ totalPrice, showTotalPrice }) { // Include props for TotalPrice
  return (
    <div className="about-container"> {/* Main container for the About component */}
      {/* Display TotalPrice at the top-right corner if showTotalPrice is true */}
      {showTotalPrice && (
        <TotalPrice totalPrice={totalPrice} />
      )}

      {/* About Section */}
      <h1 className="about-heading">About Step 'N Shine Shop</h1>
      <p className="about-paragraph">
        Step into style and comfort at Step & Shine Shoe Shop! Discover a curated collection of fashionable footwear designed to make you shine with every step. From casual kicks to elegant heels, we've got your feet covered for every occasion.
      </p>

      {/* Figure for store logo */}
      <Figure className="figure">
        <Figure.Image
          className="figure-image"
          width={300}
          height={300}
          alt="Step & Shine Logo"
          src={logo}
        />
        <Figure.Caption className="figure-caption">
          Step & Shine Logo
        </Figure.Caption>
      </Figure>

      {/* Our Store Section */}
      <h2 className="about-heading">Our Store</h2>
      <p className="about-paragraph">
        We pride ourselves on offering a wide selection of shoes for all styles and occasions. Whether you're looking for something casual or formal, you'll find it here at Step & Shine Shoe Shop.
      </p>

      {/* Figures for store images */}
      <Figure className="figure">
        <Figure.Image
          className="figure-image"
          width={400}
          height={300}
          alt="Store Image 1"
          src={image1}
        />
        <Figure.Image
          className="figure-image"
          width={400}
          height={300}
          alt="Store Image 2"
          src={image2}
        />
        <Figure.Caption className="figure-caption">
          Images of our store
        </Figure.Caption>
      </Figure>

      {/* Contact Section */}
      <h2 className="about-heading">Contact Us</h2>
      <p className="about-paragraph">
        If you have any questions or inquiries, feel free to contact us:
      </p>

      <Figure className="figure">
        <Figure.Image
          className="figure-image"
          width={400}
          height={300}
          alt="Contact Image"
          src={contactImage}
        />
        <Figure.Caption className="figure-caption">
          Contact us at: info@stepnshine.com
        </Figure.Caption>
      </Figure>
    </div>
  );
}

export default About; // Export the component
