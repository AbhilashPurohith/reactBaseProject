import React, { useState } from "react";
// import axios from "axios";
import "./App.css"; // Import the CSS file for styling
import {connect} from "react-redux";
import {loginSuccess, logout, updateFirstName} from "./redux/Actions/loginAction";

function App({isLoggedIn, username, loginSuccess, logout}) {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const handleLogin = async () => {
  //   setIsLoading(true);

  //   try {
  //     // Simulate an API call
  //     await axios.post("https://example.com/login", {
  //       username,
  //       password
  //     });

  //     // Delay for 5 seconds (5000 milliseconds)
  //     await new Promise((resolve) => setTimeout(resolve, 5000));

  //     setIsLoggedIn(true);
  //   } catch (error) {
  //     alert("Invalid username or password");
  //   }

  //   setIsLoading(false);
  // };

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      loginSuccess(username);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleLogout = () => {
      logout();
  };

  return (
      <div className="App">
        {isLoading && <div className="loading-overlay"></div>}
        {isLoggedIn && (
            <nav className="navbar">
              <div className="navbar-left">
                <span className="navbar-item">Menu</span>
                <span className="navbar-item">List</span>
              </div>
              <div className="navbar-right">
                <span className="logged-in-user">{username}</span>
                <button className="logout-button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </nav>
        )}
        <div className="content">
          {isLoggedIn ? (
              <h1>Welcome, {username}!</h1>
          ) : (
              <div className="login-container">
                <h1>Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => updateFirstName(username)}
                />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button onClick={handleLogin}>Login</button>
              </div>
          )}
        </div>
      </div>
  );
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn,
        username: state.username
    };
};

const mapDispatchToProps = {
    loginSuccess,
    logout,
    updateFirstName
};

export default connect(mapStateToProps,mapDispatchToProps)(App);