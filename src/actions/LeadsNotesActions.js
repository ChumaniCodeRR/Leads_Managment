import LeadsNotesService from '../services/LeadsNotesService';
import {
    LEADS_NOTES_GET_SUCCESS,
    LEADS_NOTES_UPDATE_SUCCESS,
    LEADS_NOTES_DELETE_SUCCESS } from '../actions/type';

    export const getAllLeadsNotes = (id) => async (dispatch) => {
        try {
           const res = await LeadsNotesService.returnLeadsNotes(id);
           dispatch({
               type: LEADS_NOTES_GET_SUCCESS,
               payload: res.data,
           })
        } catch (err){
            console.log(err);
        }
    }

    export const deleteLeadNotes = (id) => async (dispatch) => {
        try {
          const res = await LeadsNotesService.removeLeadsNotes(id);
          dispatch({
            type :LEADS_NOTES_DELETE_SUCCESS,
            payload: res.data,
          });
    
        } catch (err) {
          console.log(err);
        }
    }

    export const editLeadNotes = (id,data) => async (dispatch) => {
        try {
            const res = await LeadsNotesService.updateLeadsNotes(id,data);
           dispatch({
            type:LEADS_NOTES_UPDATE_SUCCESS,
            payload: data,
           });
    
           return Promise.resolve(res.data);
    
        } catch (err) {
            return Promise.reject(err);
        }
    }