import React from "react";

const HomeScreen = () => {
    return(
        <h1>Welcome, {localStorage.getItem('Username')}!</h1>
        /*Add required Home Screen code*/
    )
}

export default HomeScreen;