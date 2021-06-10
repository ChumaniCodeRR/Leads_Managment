import {
GET_ALL_LEADS_SUCCESS,
ADD_LEADS_SUCCESS ,
EDIT_LEADS_SUCCESS ,
DELETE_LEADS_SUCCESS ,
IMPORT_LEADS_SUCCESS ,
RETRIVE_LEADS_BY_ID_SUCESSS,LEADS_STATUS_SUCCESS } from '../actions/type';

const INITIAL_STATE = [];


function leadsReducer(leads = INITIAL_STATE, action ) {

  const {type, payload} = action;

    switch (type) {
      
      case ADD_LEADS_SUCCESS:
        return [...leads,payload];

      case GET_ALL_LEADS_SUCCESS:
        return payload;
      
      case EDIT_LEADS_SUCCESS:
        return leads.map((lead) => {
          if(lead.id === payload.id){
            return {
              ...lead,
              ...payload,
            };
          } else {
              return lead;
            }
        });

      case DELETE_LEADS_SUCCESS: 
        return leads.filter(({ id }) => id !== payload.id);

      case RETRIVE_LEADS_BY_ID_SUCESSS:
        return payload;

      case LEADS_STATUS_SUCCESS:
        return payload;
    
        default:
          return clients;
      }
}

export default leadsReducer;




 