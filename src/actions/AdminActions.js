import AdministratorService from '../services/AdministratorService';
import { 
    GET_ADMIN_SUCCESS ,
    ADD_ADMIN_SUCCESS, 
    EDIT_ADMIN_SUCCESS, 
    DELETE_ADMIN_SUCCESS,
    RETRIVE_ADMIN_BY_ID_SUCESSS, 
    Act_Deact_Admin_Success } from './type';


export const getAllAdmins = () => async (dispatch) => {
    try {
       const res = await AdministratorService.returnAllAdmin();
       dispatch({
           type: GET_ADMIN_SUCCESS,
           payload: res.data,
       })
    } catch (err){
        console.log(err);
    }
}

export const createNewAdmin = (data) => async (dispatch) => {
    
    try {
     const res = await AdministratorService.createAdministrator(data);
      dispatch({
        type: ADD_ADMIN_SUCCESS,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      console.log(err);
    }
}

export const deleteAdmin = (id) => async (dispatch) => {
    try {
      const res = await AdministratorService.removeAdmin(id);
      dispatch({
        type :DELETE_ADMIN_SUCCESS,
        payload: res.data,
      });

    } catch (err) {
      console.log(err);
    }
}

export const editAdmin = (id,data) => async (dispatch) => {

    try {
       const res = await AdministratorService.UpdateAdmin(id,data);

       dispatch({
        type:EDIT_ADMIN_SUCCESS,
        payload: data,
       });

       return Promise.resolve(res.data);

    } catch (err) {
        return Promise.reject(err);
    }
}

export const getAdminById = (id) => async (dispatch) => {
    try {
        const res = await AdministratorService.returnAdminById(id);

        dispatch({
            type: RETRIVE_ADMIN_BY_ID_SUCESSS,
            payload: res.data,
        });
    }
    catch (err) {
      console.log(err);
    }
} 

export const ActOrDeactAdmin = (id,data) => async (dispatch) => {

    try {
        
        const res = await AdministratorService.actOrdectAdmin(id,data);

         dispatch({
            type: Act_Deact_Admin_Success,
            payload: data,
           });

           return Promise.resolve(res.data);

        } catch (err) {
            return Promise.reject(err);
        }
}


