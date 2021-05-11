import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './type';
import Authentication from "../services/authenticateService";
import { setUserSession } from '../helpers/utils';

export const login = (data) => (dispatch) => {
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
};

