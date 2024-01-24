import {updateFirstName} from "../redux/Actions/loginAction";
import React, {useState} from "react";
import { useDispatch } from "react-redux";
import {loginSuccess} from "../redux/Actions/loginAction";

const LoginScreen = (isLoggedIn, username) => {
    const dispatch = useDispatch();
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const handleStorage = () => {
        localStorage.setItem('Username', userId);
        localStorage.setItem('Password', password);
        localStorage.setItem('isLoggedIn', isLoggedIn);
    };

    const handleLogin = () => {
        if (userId === 'admin' && password === 'admin') {
            dispatch(loginSuccess(userId));
            handleStorage();
        } else {
            alert("Invalid username or password");
        }
    };

    return (<div className="login-container">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="userId"
                value={userId}
                onChange={(e) => {
                    setUserId(e.target.value);
                    dispatch(updateFirstName(e.target.value));
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
        </div>)
}

export default LoginScreen;