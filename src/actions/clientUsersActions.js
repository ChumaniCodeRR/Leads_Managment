import ClientUsersService from '../services/ClientUsersService';
import { GET_CLIENT_USERS_SUCCESS , GET_CLIENT_USERS_FAILURE , ADD_CLIENT_USERS_SUCCESS, ADD_CLIENT_USERS_FAILURE, EDIT_CLIENT_USERS_SUCCESS, EDIT_CLIENT_USERS_FAILURE, DELETE_CLIENT_USERS_SUCCESS
    , DELETE_CLIENT_USERS_FAILURE, Act_Deact_CLIENT_USERS_Success, Act_Deact_CLIENT_USERS_Failure } from '../actions/type';

    export const getAllClientUsers = (id) => (dispatch) => {
        return ClientUsersService.returnAllClientUsers(id).then((data) => {
            dispatch({
                type: GET_CLIENT_USERS_SUCCESS,
                payload: data,
            })
        }, (error) => {
            dispatch({
                type: GET_CLIENT_USERS_FAILURE,
                error
            })
        })
    }

    /*export const getAllClientUsers = (id) => () => {
        return ClientUsersService.returnAllClientUsers(id);
    }*/

    export const createNewClientUsers = (data) => (dispatch) => {
        return ClientUsersService.createClientUsers(data).then((data) => {
            dispatch({
                type: ADD_CLIENT_USERS_SUCCESS,
                payload: data,
            })
        },(error) => {
            dispatch({
                type: ADD_CLIENT_USERS_FAILURE,
                error
            })
        })
    }

    export const deleteClientUsers  = (id) => (dispatch) => {
        return ClientUsersService.removeClientUsers(id).then((data) => {
            dispatch({
                type :DELETE_CLIENT_USERS_SUCCESS,
                payload: data,
            })
        },(error) => {
            dispatch({
                type:DELETE_CLIENT_USERS_FAILURE,
                error
            })
        })
    }

    
    export const editClientUsers = (id,data) => (dispatch) => {
        return ClientUsersService.UpdateClientUsers(id,data).then((data) => {
            dispatch({
                type:EDIT_CLIENT_USERS_SUCCESS,
                payload: data,
            })
        },(error) => {
            dispatch({
                type:EDIT_CLIENT_USERS_FAILURE,
                error
            })
        })
    }

    export const getClientUsersById = (id) => () => {
        return ClientUsersService.returnClientUsersById(id)
    }

    export const ActOrDeactClientUsers = (id,data) => (dispatch) => {
        return ClientUsersService.actOrdectClientUsers(id,data).then((data) => {
            dispatch({
                type: Act_Deact_CLIENT_USERS_Success,
                payload: data,
            })
        },(error) => {
           dispatch({
               type: Act_Deact_CLIENT_USERS_Failure,
               error
           })
        })
    }