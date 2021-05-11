import { GET_PROFILE_SUCCESS,GET_PROFILE_FAIL,EDIT_PROFILE_SUCCESS ,EDIT_PROFILE_FAIL} from "./type";
import UserProfileService from '../services/UserProfileService';

export const getProfile = () => (dispatch) => {
    return UserProfileService.getUserDetails().then((data) => {
        dispatch({
            type: GET_PROFILE_SUCCESS,
            payload:data
        })
        setTimeout(() => {
           localStorage.removeItem("user"); 
        }, 2880000);
    },(error) => {
        dispatch({
            type: GET_PROFILE_FAIL,
            error
        })
    })
}

export const updateProfile = (data) => (dispatch) => {
    return UserProfileService.updateUser(data).then(() => {
        dispatch({
            type: EDIT_PROFILE_SUCCESS,
            payload:{profile:data}
        })
    }, (error) => {
        dispatch({
            type: EDIT_PROFILE_FAIL,
            error 
        })
    })
}