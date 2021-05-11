import ClientsService from '../services/ClientsService';
import { GET_CLIENT_SUCCESS , GET_CLIENT_FAILURE , ADD_CLIENT_SUCCESS, ADD_CLIENT_FAILURE, EDIT_CLIENT_SUCCESS, EDIT_CLIENT_FAILURE, DELETE_CLIENT_SUCCESS
    , DELETE_CLIENT_FAILURE, Act_Deact_CLIENT_Success, Act_Deact_CLIENT_Failure } from './type';

    export const getAllClients = () => (dispatch) => {
        return ClientsService.returnAllClients().then((data) => {
            dispatch({
                type: GET_CLIENT_SUCCESS,
                payload: data,
            });
        }, (error) => {
            dispatch({
                type: GET_CLIENT_FAILURE,
                error,
            });
        }
       );
    };

    export const createNewClient = (data) => (dispatch) => {
        return ClientsService.createClients(data).then((data) => {
            dispatch({
                type: ADD_CLIENT_SUCCESS,
                payload: data,
            });
        },(error) => {
            dispatch({
                type: ADD_CLIENT_FAILURE,
                error,
            });
        }
      );
    };

    export const deleteClients  = (id) => (dispatch) => {
        return ClientsService.removeClients(id).then((data) => {
            dispatch({
                type :DELETE_CLIENT_SUCCESS,
                payload: data,
            });
        },(error) => {
            dispatch({
                type:DELETE_CLIENT_FAILURE,
                error
            });
        }
      );
    };
    
/*
    export const editClients = (id,data) => (dispatch) => {
        return ClientsService.UpdateClients(id,data).then((data) => {
            dispatch({
                type:EDIT_CLIENT_SUCCESS,
                payload: data,
            });
        },(error) => {
            dispatch({
                type:EDIT_CLIENT_FAILURE,
                error
            });
        }
      );
    };

   

    export const getClientById = (id) = () => {
        return ClientsService.returnClientById(id);
    };

    export const ActOrDeactClients = (id) = () => {
        return ClientsService.actOrdectClients(id);
    };*/