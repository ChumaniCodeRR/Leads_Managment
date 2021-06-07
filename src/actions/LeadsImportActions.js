import leadsimportservice from '../services/LeadsImportService';
import { LEADS_IMPORT_SUCCESS } from '../actions/type';

export const createNewLeadsImports = (id,data) => async (dispatch) => {
    try {
      const res = await leadsimportservice.createLeadsImport(id,data);
      
      dispatch({
        type: LEADS_IMPORT_SUCCESS,
        payload: res.data,
      });
    
      return Promise.resolve(res.data);
    
    } catch (err) {
      console.log(err);
    }
}