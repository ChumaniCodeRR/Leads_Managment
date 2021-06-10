import AdministratorService from '../services/AdministratorService';
import { 
    GET_ADMIN_SUCCESS ,
    ADD_ADMIN_SUCCESS, 
    ADD_ADMIN_FAILURE,
    EDIT_ADMIN_SUCCESS,
    DELETE_ADMIN_FAILURE, 
    DELETE_ADMIN_SUCCESS,
    EDIT_ADMIN_FAILURE,
    RETRIVE_BY_ID_FAILURE,
    RETRIVE_ADMIN_BY_ID_SUCESSS, 
    Act_Deact_Admin_Success,Act_Deact_Admin_Failure, GET_ADMIN_FAILURE} from './type';


export const getAllAdmins = () => async (dispatch) => {
  
   return await AdministratorService.returnAllAdmin().then((data) => {
    dispatch(success(data))
  },(error) => {
     dispatch(failure(error).toString());
  })

  function success(data) {
      return { type:GET_ADMIN_SUCCESS, payload: data}
  }

  function failure(error){
      return {  type:GET_ADMIN_FAILURE, error }
  }
}


export const createNewAdmin = (data) => async (dispatch) => {
    
   return await AdministratorService.createAdministrator(data).then((data) => {
       dispatch(success(data))
   }, (error) => {
       dispatch(failure(error).toString());
   })

   function success(data){
     return { type: ADD_ADMIN_SUCCESS, payload:data}
   }

   function failure(error){
       return { type: ADD_ADMIN_FAILURE, error}
   }
}

export const deleteAdmin = (id) => async (dispatch) => {
   
    return await AdministratorService.removeAdmin(id).then((data) => {
        dispatch(success(data))
    },(error) => {
        dispatch(failure(error).toString());
    })

    function success(data){
        return { type:DELETE_ADMIN_SUCCESS, payload:data}
    }
    function failure(error) {
        return { type:DELETE_ADMIN_FAILURE, error}
    }
}

export const editAdmin = (id,data) => async (dispatch) => {

    return await AdministratorService.UpdateAdmin(id,data).then((data) => {
        dispatch({
            type:EDIT_ADMIN_SUCCESS,
            payload: data,
        })
    },(error) => {
        dispatch({
            type:EDIT_ADMIN_FAILURE,
            error
        })
    })
}

export const getAdminById = (id) => async () => {
    return await AdministratorService.returnAdminById(id);
} 

export const ActOrDeactAdmin = (id,data) => async (dispatch) => {

    return await AdministratorService.actOrdectAdmin(id,data).then((data) => {
        dispatch(success(data));
    },(error) => {
        dispatch(failure(error).toString());
    })

    function success(data){
        return { type: Act_Deact_Admin_Success, payload: data }
    }

    function failure(error){
        return { type: Act_Deact_Admin_Failure, error }
    }
}


