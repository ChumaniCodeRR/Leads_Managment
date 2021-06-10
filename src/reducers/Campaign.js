import {
  GET_CAMPAIGNS_SUCCESS,
  ADD_CAMPAIGNS_SUCCESS,
  EDIT_CAMPAIGNS_SUCCESS ,
  DELETE_CAMPAIGNS_SUCCESS ,
  Act_Deact_CAMPAIGNS_Success ,
  Act_Deact_CAMPAIGNS_Failure,
  RETRIVE_CAMPAIGN_BY_ID_SUCESSS,
  DELETE_CAMPAIGNS_FAILURE,
  EDIT_CAMPAIGNS_FAILURE,
  ADD_CAMPAIGNS_FAILURE,
  GET_CAMPAIGNS_FAILURE
} from '../actions/type';

const INITIAL_STATE = {
  campaigns:[]
};

export default function campaigns (state = INITIAL_STATE, action ) {

  const {type, payload} = action;

    switch (type) {
      case ADD_CAMPAIGNS_SUCCESS:
            return {...state, campaigns: payload, success: true, };
    
          case ADD_CAMPAIGNS_FAILURE:
            return { success: false };

          case GET_CAMPAIGNS_SUCCESS:
            return{...state, campaigns: payload, success: true, };
          
          case GET_CAMPAIGNS_FAILURE:
            return { success: false };
          
          case EDIT_CAMPAIGNS_SUCCESS:
            return {...state, campaigns: state.campaigns.map((index) => index === payload.id ? payload : campaigns), success: true };
   
          case EDIT_CAMPAIGNS_FAILURE:
            return {success: false };
                     
          case DELETE_CAMPAIGNS_SUCCESS: 
          return { campaigns: [...state.campaigns.filter((campaign) => campaign !== payload)], success: true,}
    
          case DELETE_CAMPAIGNS_FAILURE:
            return {success: false};

          case RETRIVE_CAMPAIGN_BY_ID_SUCESSS:
            return{...state, campaigns: payload, success: true, };
            
          case Act_Deact_CAMPAIGNS_Success:
            return {...state, campaigns: state.campaigns.map((index) => index === payload.id ? payload : campaigns), success: true };

          case Act_Deact_CAMPAIGNS_Failure:
            return{ success: false};
          
            default:
              return state;
          }
    }


