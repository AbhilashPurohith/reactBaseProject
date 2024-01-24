import React, {useState} from "react";
import "./App.css"; // Import the CSS file for styling
import {connect} from "react-redux";
import {loginSuccess, logout} from "./redux/Actions/loginAction";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
import {MyProvider} from "./components/MyContext";

function App({isLoggedIn, username, loginSuccess, logout}) {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = () => {
        logout();
        removeStorage();
    };

    const removeStorage = () => {
        localStorage.removeItem('Name');
        localStorage.removeItem('Password');
        localStorage.removeItem('isLoggedIn');
    };

    return (
        <MyProvider>
        <div className="App">
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
                {isLoggedIn ? <HomeScreen/> :
                    <LoginScreen isLoggedIn={isLoggedIn}/>}
            </div>
        </div>
        </MyProvider>);
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn, username: state.username
    };
};

const mapDispatchToProps = {
    loginSuccess, logout
};

export default connect(mapStateToProps, mapDispatchToProps)(App);