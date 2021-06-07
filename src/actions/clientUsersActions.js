import ClientUsersService from '../services/ClientUsersService';
import { GET_CLIENT_USERS_SUCCESS ,
        ADD_CLIENT_USERS_SUCCESS,
        EDIT_CLIENT_USERS_SUCCESS,
        DELETE_CLIENT_USERS_SUCCESS, 
        Act_Deact_CLIENT_USERS_Success, RETRIVE_CLIENTUSER_BY_ID_SUCESSS} from '../actions/type';

    export const getAllClientUsers = () => async (dispatch) => {
            try {
               const res = await ClientUsersService.returnAllClientUsers();
               dispatch({
                   type: GET_CLIENT_USERS_SUCCESS,
                   payload: res.data,
               })
            } catch (err){
                console.log(err);
            }
    }



    /*export const getAllClientUsers = (id) => () => {
        return ClientUsersService.returnAllClientUsers(id);
    }*/

    export const createNewClientUsers = (data) => async (dispatch) => {
    
        try {
         const res = await ClientUsersService.createClientUsers(data);
          dispatch({
            type: ADD_CLIENT_USERS_SUCCESS,
            payload: res.data,
          });
          return Promise.resolve(res.data);
        } catch (err) {
          console.log(err);
        }
    }

    export const deleteClientUsers = (id) => async (dispatch) => {
        try {
          const res = await ClientUsersService.removeClientUsers(id);
          dispatch({
            type :DELETE_CLIENT_USERS_SUCCESS,
            payload: res.data,
          });
    
        } catch (err) {
          console.log(err);
        }
    }

    export const editClientUsers = (id,data) => async (dispatch) => {
        try {
            const res = await ClientUsersService.UpdateClientUsers(id,data);
           dispatch({
            type:EDIT_CLIENT_USERS_SUCCESS,
            payload: data,
           });
    
           return Promise.resolve(res.data);
    
        } catch (err) {
            return Promise.reject(err);
        }
    }

    export const getClientUsersById = (id) => async (dispatch) => {
        try {
            const res = await ClientUsersService.returnClientUsersById(id);
    
            dispatch({
                type: RETRIVE_CLIENTUSER_BY_ID_SUCESSS,
                payload: res.data,
            });
        }
        catch (err) {
          console.log(err);
        }
    } 

    export const ActOrDeactClientUsers = (id,data) => async (dispatch) => {
        try {
            const res = await ClientUsersService.actOrdectClientUsers(id,data);
             dispatch({
                type: Act_Deact_CLIENT_USERS_Success,
                payload: data,
               });
    
               return Promise.resolve(res.data);
    
            } catch (err) {
                return Promise.reject(err);
            }
    }
