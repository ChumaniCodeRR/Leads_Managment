import {
    GET_CAMPAIGNS_SUCCESS,
    ADD_CAMPAIGNS_SUCCESS,
    EDIT_CAMPAIGNS_SUCCESS,
    DELETE_CAMPAIGNS_SUCCESS ,
    Act_Deact_CAMPAIGNS_Success ,
    RETRIVE_CAMPAIGN_BY_ID_SUCESSS
} from '../actions/type';

const INITIAL_STATE = [];

function campaignsReducer(campaigns = INITIAL_STATE, action ) {

  const {type, payload} = action;

    switch (type) {
      
      case ADD_CAMPAIGNS_SUCCESS:
        return [...campaigns,payload];

      case GET_CAMPAIGNS_SUCCESS:
        return payload;
      
      case EDIT_CAMPAIGNS_SUCCESS:
        return campaigns.map((campaign) => {
          if(campaign.id === payload.id){
            return {
              ...campaign,
              ...payload,
            };
          } else {
              return campaign;
            }
        });
      
      case DELETE_CAMPAIGNS_SUCCESS: 
        return campaigns.filter(({ id }) => id !== payload.id);

      case RETRIVE_CAMPAIGN_BY_ID_SUCESSS:
        return payload;

      case Act_Deact_CAMPAIGNS_Success:
        return campaigns.map((campaign) => {
          if(campaign.id === payload.id){
            return { ...campaign, ...payload };
          } else {
            return campaign;
          }
        });
        
        default:
          return campaigns;
      }
}

export default campaignsReducer;
