import { LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_REQUEST,LOGOUT,RESET_PASSWORD } from './type';
import userService  from "../services/authenticateService";



export const login = (data) => (dispatch) => {
  return userService.login(data).then(
      (data) => {
          dispatch({
              type: LOGIN_SUCCESS,
              payload: { user: data },
              
          });
          //setUserSession(data);
      },
      (error) => {
          dispatch({
              type: LOGIN_FAILURE,
              error,
             
          });
      }
  );
};

/*export const login = (data) => {
    return (dispatch) => {
        
        //dispatch(request({ data }));

        userService.login(data).then(
            (data) => {
                dispatch(success(data));
            },(error) => {
                dispatch(failure(error.toString()));
            }
        );
    };

    ////function request(data) {
        //return { type: LOGIN_REQUEST, data };
      //}
      function success(data) {
        return { type: LOGIN_SUCCESS, data };
      }
      function failure(error) {
        return { type: LOGIN_FAILURE, error };
      }
  };*/
  
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
  

/*export const login = (data) => {
    return (dispatch) => {
        dispatch(request({ data }));

        userService.login(data).then(
            (user) => {
                dispatch(success(user));
            },(error) => {
                dispatch(failure(error.toString()));
            }
        );
    };

    function request(user) {
        return { type: LOGIN_REQUEST, user };
      }
      function success(user) {
        return { type: LOGIN_SUCCESS, user };
      }
      function failure(error) {
        return { type: LOGIN_FAILURE, error };
      }
}


export const logout = () => {
    userService.logout();
    return { type: LOGOUT };
  };*/




/*export const login = (data) => (dispatch) => {
    return Authentication.login(data).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
                
            });
            //setUserSession(data);
        },
        (error) => {
            dispatch({
                type: LOGIN_FAIL,
                error,
               
            });
        }
    );
};

export const SignOut = () => (dispatch) => {
    Authentication.SignOut();
    dispatch({
        type: LOGOUT,
    });
};*/

