import React, { useState } from 'react'; // Import React and useState
import { Link } from 'react-router-dom'; // For linking to other pages
import './Home.css'; // Import custom CSS for styling

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false); // Track login state
  const [username, setUsername] = useState(''); // Track username

  const handleLogin = () => {
    if (username.trim() !== '') {
      setLoggedIn(true); // Change login state
    }
  };

  const handleLogout = () => {
    setLoggedIn(false); // Change login state to logged out
    setUsername(''); // Reset username
  };

  return (
    <div className="home-container"> {/* Main container for Home */}
      {loggedIn ? (
        <>
          <h1 className="welcome-message">Welcome, {username}!</h1> {/* Display welcome message */}
          <button onClick={handleLogout} className="logout-button">Logout</button> {/* Logout button */}
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username
            className="input-field" /* Apply styles for input field */
          />
          <button
            onClick={handleLogin} /* Call handleLogin on button click */
            className="login-button" /* Apply styles for the login button */
            disabled={!username.trim()} /* Disable if no username */
          >
            Login
          </button>
          <Link to="/login"> {/* Link to login page */}
            Go to Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Home; // Export the component
