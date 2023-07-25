export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const UPDATE_FIRSTNAME = "UPDATE_FIRSTNAME";

export const loginSuccess = (username) => {
    return {
        type: LOGIN_SUCCESS,
        payload: username
    };
};


export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const updateFirstName = (username) => ({
    type: UPDATE_FIRSTNAME,
    ...username,
});