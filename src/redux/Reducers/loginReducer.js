import {LOGIN_SUCCESS, LOGOUT, UPDATE_FIRSTNAME} from "../Actions/loginAction";

const initialState = {
    isLoggedIn : false,
    username : '',
};

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                username: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                username: ''
            };
        case UPDATE_FIRSTNAME:
            return {
                ...state,
                isLoggedIn: false,
                username: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;