import { LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_REQUEST,LOGOUT,RESET_PASSWORD } from './type';
import userService  from "../services/authenticateService";

export const login = (data) => (dispatch) => {
 
  return userService.login(data).then( res => {
       if(res.status === 200){
         dispatch({type: LOGIN_SUCCESS,payload: { user: data },});
       }
       return res;
    },
    (error) => {
        dispatch({
            type: LOGIN_FAILURE,
            error,   
        });
     }
  )
};

export const logout = () => (dispatch) => {
    userService.logout();
    dispatch({
      type: LOGOUT,
    });
  };

  export const resetPassword = (email) => {
   
    return (dispatch) => {
        userService.resetPassword(email)
        .then((user) => {
        dispatch(success(user)); 
      })
    };

    function success(email){
      return { type: RESET_PASSWORD,email}
    }
};
  