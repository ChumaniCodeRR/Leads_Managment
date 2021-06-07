import LeadsService from '../services/LeadsService';
import { 
    GET_ALL_LEADS_SUCCESS,
    RETRIVE_LEADS_BY_ID_SUCESSS,
    ADD_LEADS_SUCCESS ,
    ADD_LEADS_FAILURE ,
    EDIT_LEADS_SUCCESS ,
    DELETE_LEADS_SUCCESS ,
    LEADS_STATUS_SUCCESS
    } from '../actions/type';


    export const getLeadsStatus = () => async (dispatch) => {
        try {
           const res = await LeadsService.returnLeadsStatus();
           dispatch({
               type: LEADS_STATUS_SUCCESS,
               payload: res.data,
           })
        } catch (err){
            console.log(err);
        }
     }


    export const getAllLeads = (id) => async (dispatch) => {
        try {
           const res = await LeadsService.returnAllCampaignLeads(id);
           dispatch({
               type: GET_ALL_LEADS_SUCCESS,
               payload: res.data,
           })
        } catch (err){
            console.log(err);
        }
    }

    export const createNewLead = (id,data) => async (dispatch) => {
    
        try {
         const res = await LeadsService.createLeads(id,data);
          dispatch({
            type: ADD_LEADS_SUCCESS,
            payload: res.data,
          });
          return Promise.resolve(res.data);
        } catch (err) {
          console.log(err);
        }
    }

    export const deleteLead = (id) => async (dispatch) => {
        try {
          const res = await LeadsService.removeLeads(id);
          dispatch({
            type :DELETE_LEADS_SUCCESS,
            payload: res.data,
          });
    
        } catch (err) {
          console.log(err);
        }
    }

    
    export const editLead = (id,data) => async (dispatch) => {
        try {
            const res = await LeadsService.UpdateLeads(id,data);
           dispatch({
            type:EDIT_LEADS_SUCCESS,
            payload: data,
           });
    
           return Promise.resolve(res.data);
    
        } catch (err) {
            return Promise.reject(err);
        }
    }
