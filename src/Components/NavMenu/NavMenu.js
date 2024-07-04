import React from 'react'; // Import React
import { Link } from 'react-router-dom'; // Import Link from React Router
import './NavMenu.css'; // Import custom CSS for styling
import logo from '../../Assets/logo.png'; // Store logo
import cart_icon from '../../Assets/cart_icon.png'; // Cart icon
import TotalPrice from '../TotalPrice/TotalPrice'; // Correct import for TotalPrice component

const NavMenu = ({ totalPrice, showTotalPrice }) => (
  <nav className='navbar'> {/* Main navigation container */}
    <div className="nav-logo"> {/* Logo section */}
      <img src={logo} alt="Store Logo" /> {/* Store logo */}
    </div>

    <ul className="nav-menu"> {/* Navigation links */}
      <li>
        <Link to='/'>Home</Link> {/* Link to Home */}
      </li>
      <li>
        <Link to='/products'>Products</Link> {/* Link to Products */}
      </li>
      <li>
        <Link to='/about'>About</Link> {/* Link to About */}
      </li>
      <li>
        <Link to='/signup'>Join</Link> {/* Link to Signup */}
      </li>
      <li>
        <Link to='/login'>Signin</Link> {/* Link to Login */}
      </li>
    </ul>

    <div className="nav-cart"> {/* Cart section */}
      <Link to='/cart'>
        <img src={cart_icon} alt="Cart Icon" /> {/* Cart icon */}
      </Link>
    </div>
      
      {showTotalPrice && ( /* Conditional rendering for TotalPrice */
        <TotalPrice totalPrice={totalPrice} /> /* Display TotalPrice when showTotalPrice is true */
      )}
    </nav>
  );

export default NavMenu; // Export the component
