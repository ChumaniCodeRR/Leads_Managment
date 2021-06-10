import LeadsService from '../services/LeadsService';
import { 
    GET_ALL_LEADS_SUCCESS,
    RETRIVE_LEADS_BY_ID_SUCESSS,
    ADD_LEADS_SUCCESS ,
    EDIT_LEADS_SUCCESS ,
    DELETE_LEADS_SUCCESS ,
    GET_ALL_LEADS_FAILURE,
    LEADS_STATUS_SUCCESS,
    ADD_LEADS_FAILURE,
    EDIT_LEADS_FAILURE,
    DELETE_LEADS_FAILURE,
    LEADS_STATUS_FAILURE
    } from '../actions/type';

    export const getLeadsStatus = () => async (dispatch) => {
      return await LeadsService.returnLeadsStatus().then((data) => {
       dispatch(success(data))
     },(error) => {
        dispatch(failure(error).toString());
     })
     function success(data) {
         return { type:LEADS_STATUS_SUCCESS, payload: data}
     }
     function failure(error){
         return {  type:LEADS_STATUS_FAILURE, error }
     }
    }

    export const getAllLeads = (id) => async (dispatch) => {
       return await LeadsService.returnAllCampaignLeads(id).then((data) => {
        dispatch(success(data))
      },(error) => {
         dispatch(failure(error).toString());
      })
      function success(data) {
        return { type:GET_ALL_LEADS_SUCCESS, payload: data}
      }
      function failure(error){
        return {  type:GET_ALL_LEADS_FAILURE, error }
      }
    }

    export const createNewLead = (id,data) => async (dispatch) => {
      return await  LeadsService.createLeads(id,data).then((data) => {
          dispatch(success(data))
      }, (error) => {
          dispatch(failure(error).toString());
      })
      function success(data){
        return { type: ADD_LEADS_SUCCESS, payload:data}
      }
      function failure(error){
          return { type: ADD_LEADS_FAILURE, error}
      }
    }
  
    export const deleteLead = (id) => async (dispatch) => {
      return await LeadsService.removeLeads(id).then((data) => {
          dispatch(success(data))
      },(error) => {
          dispatch(failure(error).toString());
      })
      function success(data){
          return { type:DELETE_LEADS_SUCCESS, payload:data}
      }
      function failure(error) {
          return { type:DELETE_LEADS_FAILURE, error}
      }
    }

    export const editLead = (id,data) => async (dispatch) => {
      return await LeadsService.UpdateLeads(id,data).then((data) => {
         dispatch(success(data));
      },(error) => {
          dispatch(failure(error).toString());
      }) 
      function success(data){
          return { type: EDIT_LEADS_SUCCESS, payload: data }
      }  
      function failure(error){
          return { type: EDIT_LEADS_FAILURE, error }
      }
    }
