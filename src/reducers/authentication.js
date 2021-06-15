import { LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_REQUEST,LOGOUT,RESET_PASSWORD } from "../actions/type";

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };


  export default function (state = initialState, action) {
      
    const { type, payload } = action;


    switch (type) {
      case LOGIN_REQUEST:
          return {
            isLoggedIn: true,
            user: payload.user,
          };
      case LOGIN_SUCCESS:
          return {
              ...state,
              isLoggedIn: true,
              user: payload.user,
          };
      case RESET_PASSWORD:
        return {
          ...state,
          status: action.payload,
        }
      case LOGIN_FAILURE:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
      case LOGOUT:
          return {
            ...state,
            isLoggedIn: false,
            user: null,
          };
      default:
          return state
  }
}