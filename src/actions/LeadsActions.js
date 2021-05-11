import LeadsService from '../services/LeadsService';
import { 
    GET_ALL_LEADS_SUCCESS,
    GET_ALL_LEADS_FAILURE,
    ADD_LEADS_SUCCESS ,
    ADD_LEADS_FAILURE ,
    EDIT_LEADS_SUCCESS ,
    EDIT_LEADS_FAILURE , 
    DELETE_LEADS_SUCCESS ,
    DELETE_LEADS_FAILURE ,
    IMPORT_LEADS_SUCCESS ,
    IMPORT_LEADS_FAILURE } from '../actions/type';

    export const getAllLeads = () => (dispatch) => {
        return LeadsService.returnAllCampaignLeads().then(
            (data) => {
            dispatch({
                type: GET_ALL_LEADS_SUCCESS,
                payload: data,
            });
        }, (error) => {
            dispatch({
                type: GET_ALL_LEADS_FAILURE,
                error
            });
        }
      );
    };

    export const createNewLead = (data) => (dispatch) => {
        return LeadsService.createLeads(data).then(
            (data) => {
            dispatch({
                type: ADD_LEADS_SUCCESS,
                payload: data,
            });
        },
        (error) => {
            dispatch({
                type: ADD_LEADS_FAILURE,
                error
            });
        }
      );
    };

    export const deleteLead  = (id) => (dispatch) => {
        return LeadsService.removeLeads(id).then(
            (data) => {
            dispatch({
                type :DELETE_LEADS_SUCCESS,
                payload: data,
            });
        },
        (error) => {
            dispatch({
                type:DELETE_LEADS_FAILURE,
                error
            });
        }
      );
    };

/*export const editLead = (id,data) => (dispatch) => {
    return LeadsService.UpdateLeads(id,data).then(
        (data) => {
        dispatch({
            type:EDIT_ADMIN_SUCCESS,
            payload: data,
        });
    },
    (error) => {
        dispatch({
            type:EDIT_ADMIN_FAILURE,
            error
        });
    }
  );
};*/