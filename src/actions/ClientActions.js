import ClientsService from '../services/ClientsService';
import 
{ GET_CLIENT_SUCCESS , 
  ADD_CLIENT_SUCCESS,
   EDIT_CLIENT_SUCCESS, 
   DELETE_CLIENT_SUCCESS,
   GET_CLIENT_FAILURE,
   ADD_CLIENT_FAILURE,
   EDIT_CLIENT_FAILURE,
   DELETE_CLIENT_FAILURE,
   Act_Deact_CLIENT_Failure,
   RETRIVE_CLIENT_BY_ID_FAILURE,
   Act_Deact_CLIENT_Success,
   RETRIVE_CLIENT_BY_ID_SUCESSS } from './type';


export const getAllClients = () => async (dispatch) => {
  
  return await ClientsService.returnAllClients().then((data) => {
   dispatch(success(data))
 },(error) => {
    dispatch(failure(error).toString());
 })

 function success(data) {
     return { type:GET_CLIENT_SUCCESS, payload: data}
 }

 function failure(error){
     return {  type:GET_CLIENT_FAILURE, error }
 }
}


export const createNewClient = (data) => async (dispatch) => {
    
  return await ClientsService.createClients(data).then((data) => {
      dispatch(success(data))
  }, (error) => {
      dispatch(failure(error).toString());
  })

  function success(data){
    return { type: ADD_CLIENT_SUCCESS, payload:data}
  }

  function failure(error){
      return { type: ADD_CLIENT_FAILURE, error}
  }
}

export const deleteClients = (id) => async (dispatch) => {
   
  return await ClientsService.removeClients(id).then((data) => {
      dispatch(success(data))
  },(error) => {
      dispatch(failure(error).toString());
  })

  function success(data){
      return { type:DELETE_CLIENT_SUCCESS, payload:data}
  }
  function failure(error) {
      return { type:DELETE_CLIENT_FAILURE, error}
  }
}

export const editClients = (id,data) => async (dispatch) => {

  return await ClientsService.UpdateClients(id,data).then((data) => {
     dispatch(success(data));
  },(error) => {
      dispatch(failure(error).toString());
  })

  function success(data){
      return { type: EDIT_CLIENT_SUCCESS, payload: data }
  }

  function failure(error){
      return { type: EDIT_CLIENT_FAILURE, error }
  }
}

export const getClientById = (id) => async () => {
  return await ClientsService.returnClientById(id);
} 
    
export const ActOrDeactClients = (id,data) => async (dispatch) => {

  return await ClientsService.actOrdectClients(id,data).then((data) => {
      dispatch(success(data));
  },(error) => {
      dispatch(failure(error).toString());
  })

  function success(data){
      return { type: Act_Deact_CLIENT_Success, payload: data }
  }

  function failure(error){
      return { type: Act_Deact_CLIENT_Failure, error }
  }
}