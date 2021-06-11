import leadsexportservice from '../services/LeadsExportService';
import { LEADS_EXPORT_SUCCESS,LEADS_EXPORT_FAILURE } from '../actions/type';

export const createNewLeadsImports = (data) => async (dispatch) => {
    return await  leadsexportservice.createLeadsExport(data).then((data) => {
        dispatch(success(data))
    }, (error) => {
        dispatch(failure(error).toString());
    })
    
    function success(data){
      return { type: LEADS_EXPORT_SUCCESS, payload:data}
    }
    function failure(error){
        return { type: LEADS_EXPORT_FAILURE, error}
    }
}