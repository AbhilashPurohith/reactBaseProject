import React, {useState} from "react";
// import axios from "axios";
import "./App.css"; // Import the CSS file for styling
import {connect} from "react-redux";
import {loginSuccess, logout, updateFirstName} from "./redux/Actions/loginAction";

function App({isLoggedIn, username, loginSuccess, logout}) {
    const [userId, setUserId] = useState("");
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

    const handleStorage = () => {
        localStorage.setItem('Username', userId);
        localStorage.setItem('Password', password);
        localStorage.setItem('isLoggedIn', isLoggedIn);
    };
    const removeStorage = () => {
        localStorage.removeItem('Name');
        localStorage.removeItem('Password');
        localStorage.removeItem('isLoggedIn');
    };

    const handleLogin = () => {
        if (userId === 'admin' && password === 'admin') {
            loginSuccess(userId);
            handleStorage();
        } else {
            alert("Invalid username or password");
        }
    };

    const handleLogout = () => {
        logout();
        removeStorage();
    };

    return (<div className="App">
            {isLoading && <div className="loading-overlay"></div>}
            {isLoggedIn && (<nav className="navbar">
                    <div className="navbar-left">
                        <span className="navbar-item">Menu</span>
                        <span className="navbar-item">List</span>
                    </div>
                    <div className="navbar-right">
                        <span className="logged-in-user">{localStorage.getItem('Username')}</span>
                        <button className="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </nav>)}
            <div className="content">
                {isLoggedIn ? (<h1>Welcome, {localStorage.getItem('Username')}!</h1>) : (<div className="login-container">
                        <h1>Login</h1>
                        <input
                            type="text"
                            placeholder="userId"
                            value={userId}
                            onChange={(e) => {
                                setUserId(e.target.value);
                                updateFirstName(e.target.value);
                            }}
                        />
                        <br/>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <br/>
                        <button onClick={handleLogin}>Login</button>
                    </div>)}
            </div>
        </div>);
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn, username: state.username
    };
};

const mapDispatchToProps = {
    loginSuccess, logout, updateFirstName
};

export default connect(mapStateToProps, mapDispatchToProps)(App);