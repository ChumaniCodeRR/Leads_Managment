import CampaignService from '../services/CampaignService';
import {
GET_CAMPAIGNS_SUCCESS,
ADD_CAMPAIGNS_SUCCESS,
EDIT_CAMPAIGNS_SUCCESS ,
DELETE_CAMPAIGNS_SUCCESS ,
Act_Deact_CAMPAIGNS_Success ,
RETRIVE_CAMPAIGN_BY_ID_SUCESSS
} from './type';


export const getAllCampaigns = () => async (dispatch) => {
    try {
       const res = await  CampaignService.returnAllCampaigns();
       dispatch({
           type: GET_CAMPAIGNS_SUCCESS,
           payload: res.data,
       })
    } catch (err){
        console.log(err);
    }
}


export const createNewCampaign = (data) => async (dispatch) => {
    
    try {
     const res = await CampaignService.createCampaigns(data);
      dispatch({
        type: ADD_CAMPAIGNS_SUCCESS,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      console.log(err);
    }
}


export const deleteCampagins = (id) => async (dispatch) => {
    try {
      const res = await CampaignService.removeCampaigns(id);
      dispatch({
        type :DELETE_CAMPAIGNS_SUCCESS,
        payload: res.data,
      });

    } catch (err) {
      console.log(err);
    }
}

export const editCampagins = (id,data) => async (dispatch) => {

    try {
       const res = await CampaignService.UpdateCampaigns(id,data);

       dispatch({
        type:EDIT_CAMPAIGNS_SUCCESS,
        payload: data,
       });

       return Promise.resolve(res.data);

    } catch (err) {
        return Promise.reject(err);
    }
}

export const getCampaignById = (id) => async (dispatch) => {
    try {
        const res = await CampaignService.returnCampaignById(id);

        dispatch({
            type: RETRIVE_CAMPAIGN_BY_ID_SUCESSS,
            payload: res.data,
        });
    }
    catch (err) {
      console.log(err);
    }
} 

export const ActOrDeactCampaign = (id,data) => async (dispatch) => {
    try {
        const res = await CampaignService.actOrdectCampaigns(id,data);
         dispatch({
            type: Act_Deact_CAMPAIGNS_Success,
            payload: data,
           });

           return Promise.resolve(res.data);

        } catch (err) {
            return Promise.reject(err);
        }
}



