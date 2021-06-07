import ClientsService from '../services/ClientsService';
import { GET_CLIENT_SUCCESS 
    , ADD_CLIENT_SUCCESS, 
    EDIT_CLIENT_SUCCESS,
     DELETE_CLIENT_SUCCESS
    , Act_Deact_CLIENT_Success,RETRIVE_CLIENT_BY_ID_SUCESSS } from './type';


    export const getAllClients = () => async (dispatch) => {
        try {
           const res = await ClientsService.returnAllClients();
           dispatch({
               type: GET_CLIENT_SUCCESS,
               payload: res.data,
           })
        } catch (err){
            console.log(err);
        }
    }

    export const createNewClient = (data) => async (dispatch) => {
    
        try {
         const res = await ClientsService.createClients(data);
          dispatch({
            type: ADD_CLIENT_SUCCESS,
            payload: res.data,
          });
          return Promise.resolve(res.data);
        } catch (err) {
          console.log(err);
        }
    }

    export const deleteClients = (id) => async (dispatch) => {
        try {
          const res = await ClientsService.removeClients(id);
          dispatch({
            type :DELETE_CLIENT_SUCCESS,
            payload: res.data,
          });
    
        } catch (err) {
          console.log(err);
        }
    }

    export const editClients = (id,data) => async (dispatch) => {
        try {
            const res = await ClientsService.UpdateClients(id,data);
           dispatch({
            type:EDIT_CLIENT_SUCCESS,
            payload: data,
           });
    
           return Promise.resolve(res.data);
    
        } catch (err) {
            return Promise.reject(err);
        }
    }

    export const getClientById = (id) => async (dispatch) => {
        try {
            const res = await ClientsService.returnClientById(id);
    
            dispatch({
                type: RETRIVE_CLIENT_BY_ID_SUCESSS,
                payload: res.data,
            });
        }
        catch (err) {
          console.log(err);
        }
    } 

    export const ActOrDeactClients = (id,data) => async (dispatch) => {
        try {
            const res = await ClientsService.actOrdectClients(id,data);
             dispatch({
                type: Act_Deact_CLIENT_Success,
                payload: data,
               });
    
               return Promise.resolve(res.data);
    
            } catch (err) {
                return Promise.reject(err);
            }
    }