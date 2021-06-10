import LeadsNotesService from '../services/LeadsNotesService';
import {
    LEADS_NOTES_GET_SUCCESS,
    LEADS_NOTES_UPDATE_SUCCESS,
    LEADS_NOTES_DELETE_SUCCESS,
    LEADS_NOTES_GET_FAILURE,
    LEADS_NOTES_UPDATE_FAILURE,
    LEADS_NOTES_DELETE_FAILURE } from '../actions/type';

    export const getAllLeads = (id) => async (dispatch) => {
        return await LeadsNotesService.returnLeadsNotes(id).then((data) => {
         dispatch(success(data))
       },(error) => {
          dispatch(failure(error).toString());
       })
       function success(data) {
         return { type:LEADS_NOTES_GET_SUCCESS, payload: data}
       }
       function failure(error){
         return {  type:LEADS_NOTES_GET_FAILURE, error }
       }
     }

     export const deleteLeadNotes = (id) => async (dispatch) => {
        return await LeadsNotesService.removeLeadsNotes(id).then((data) => {
            dispatch(success(data))
        },(error) => {
            dispatch(failure(error).toString());
        })
        function success(data){
            return { type:LEADS_NOTES_DELETE_SUCCESS, payload:data}
        }
        function failure(error) {
            return { type:LEADS_NOTES_DELETE_FAILURE, error}
        }
      }

      export const editLeadNotes = (id,data) => async (dispatch) => {
        return await LeadsNotesService.updateLeadsNotes(id,data).then((data) => {
           dispatch(success(data));
        },(error) => {
            dispatch(failure(error).toString());
        }) 
        function success(data){
            return { type: LEADS_NOTES_UPDATE_SUCCESS, payload: data }
        }  
        function failure(error){
            return { type: LEADS_NOTES_UPDATE_FAILURE, error }
        }
      }