import authenticateService from '../services/authenticateService';
import { RESET_PASSWORD_FAIL, RESET_PASSWORD_SUCCESS } from './type';

export const ResetPassword = (email) => (dispatch) => {
    return authenticateService.PasswordReset(email).then(() => {
        dispatch({
            type : RESET_PASSWORD_SUCCESS,
        });
    },(error) => {
        dispatch({
            type: RESET_PASSWORD_FAIL,
            error,
        });
    });
};