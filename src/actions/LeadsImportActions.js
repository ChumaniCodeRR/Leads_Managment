import leadsimportservice from '../services/LeadsImportService';
import { LEADS_IMPORT_SUCCESS,LEADS_IMPORT_FAILURE } from '../actions/type';


export const createNewLeadsImports = (id,data) => async (dispatch) => {
  return await  leadsimportservice.createLeadsImport(id,data).then((data) => {
      dispatch(success(data))
  }, (error) => {
      dispatch(failure(error).toString());
  })
  
  function success(data){
    return { type: LEADS_IMPORT_SUCCESS, payload:data}
  }
  function failure(error){
      return { type: LEADS_IMPORT_FAILURE, error}
  }
}

