import ClientUsersService from '../services/ClientUsersService';
import { GET_CLIENT_USERS_SUCCESS ,
         GET_CLIENT_USERS_FAILURE,
        ADD_CLIENT_USERS_SUCCESS,
        ADD_CLIENT_USERS_FAILURE,
        EDIT_CLIENT_USERS_SUCCESS,
        EDIT_CLIENT_USERS_FAILURE,
        DELETE_CLIENT_USERS_SUCCESS, 
        DELETE_CLIENT_USERS_FAILURE,
        Act_Deact_CLIENT_USERS_Success,Act_Deact_CLIENT_USERS_Failure, RETRIVE_CLIENTUSER_BY_ID_SUCESSS} from '../actions/type';

      export const getAllClientUsers = () => async (dispatch) => {
          return await ClientUsersService.returnAllClientUsers().then((data) => {
           dispatch(success(data))
         },(error) => {
            dispatch(failure(error).toString());
         })
         function success(data) {
             return { type:GET_CLIENT_USERS_SUCCESS, payload: data}
         }
         function failure(error){
             return {  type:GET_CLIENT_USERS_FAILURE, error }
         }
      }
    /*export const getAllClientUsers = (id) => () => {
        return ClientUsersService.returnAllClientUsers(id);
    }*/
    export const createNewClientUsers = (data) => async (dispatch) => {
      return await ClientUsersService.createClientUsers(data).then((data) => {
          dispatch(success(data))
      }, (error) => {
          dispatch(failure(error).toString());
      })
      function success(data){
        return { type: ADD_CLIENT_USERS_SUCCESS, payload:data}
      }
      function failure(error){
          return { type: ADD_CLIENT_USERS_FAILURE, error}
      }
    }

    export const deleteClientUsers = (id) => async (dispatch) => {
      return await ClientUsersService.removeClientUsers(id).then((data) => {
          dispatch(success(data))
      },(error) => {
          dispatch(failure(error).toString());
      })
      function success(data){
          return { type:DELETE_CLIENT_USERS_SUCCESS, payload:data}
      }
      function failure(error) {
          return { type:DELETE_CLIENT_USERS_FAILURE, error}
      }
    }

    export const editClientUsers = (id,data) => async (dispatch) => {
      return await ClientUsersService.UpdateClientUsers(id,data).then((data) => {
         dispatch(success(data));
      },(error) => {
          dispatch(failure(error).toString());
      }) 
      function success(data){
          return { type: EDIT_CLIENT_USERS_SUCCESS, payload: data }
      }
      function failure(error){
          return { type: EDIT_CLIENT_USERS_FAILURE, error }
      }
    }
   
    export const getClientUsersById = (id) => async (dispatch) => {
        try {
            return await ClientUsersService.returnClientUsersById(id);   
        }
        catch (err) {
          console.log(err);
        }
    }
    
    export const ActOrDeactClientUsers = (id,data) => async (dispatch) => {

      return await ClientUsersService.actOrdectClientUsers(id,data).then((data) => {
          dispatch(success(data));
      },(error) => {
          dispatch(failure(error).toString());
      })
    
      function success(data){
          return { type: Act_Deact_CLIENT_USERS_Success, payload: data }
      }
    
      function failure(error){
          return { type: Act_Deact_CLIENT_USERS_Failure, error }
      }
    }