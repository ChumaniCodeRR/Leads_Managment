
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
  LEADS_STATUS_FAILURE } from '../actions/type';

const INITIAL_STATE = { 
  leads : [] 
};


export default function leads(state = INITIAL_STATE, action ) {

  const {type, payload} = action;

    switch (type) {
      
      case ADD_LEADS_SUCCESS:
        return {...state, leads: payload, success: true, };

      case ADD_LEADS_FAILURE: 
        return { success: false };

      case GET_ALL_LEADS_SUCCESS:
        return {...state, leads: payload, success: true, };
      
      case GET_ALL_LEADS_FAILURE:
        return { success: false };
      
      case EDIT_LEADS_SUCCESS:
        return {...state, leads: state.leads.map((index) => index === payload.id ? payload : leads), success: true };

      case EDIT_LEADS_FAILURE:
        return{ success: false };

      case DELETE_LEADS_SUCCESS: 
      return { leads: [...state.leads.filter((lead) => lead !== payload)], success: true,}

      case DELETE_LEADS_FAILURE:
        return{ success: false };

      case RETRIVE_LEADS_BY_ID_SUCESSS:
        return payload;

      case LEADS_STATUS_SUCCESS:
        return {...state, leads: payload, success: true, };

      case LEADS_STATUS_FAILURE:
        return { success: false};
    
        default:
          return state;
      }
}



 