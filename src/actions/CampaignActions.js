import CampaignService from '../services/CampaignService';
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
} from './type';


export const getAllCampaigns = () => (dispatch) => {
  
  return CampaignService.returnAllCampaigns().then((data) => {
   dispatch(success(data))
 },(error) => {
    dispatch(failure(error).toString());
 })

 function success(data) {
     return { type:GET_CAMPAIGNS_SUCCESS, payload: data}
 }

 function failure(error){
     return {  type:GET_CAMPAIGNS_FAILURE, error }
 }
}

export const createNewCampaign = (data) => async (dispatch) => {
    
  return CampaignService.createCampaigns(data).then((data) => {
      dispatch(success(data))
  }, (error) => {
      dispatch(failure(error).toString());
  })

  function success(data){
    return { type: ADD_CAMPAIGNS_SUCCESS, payload:data}
  }

  function failure(error){
      return { type: ADD_CAMPAIGNS_FAILURE, error}
  }
}


export const deleteCampagins = (id) => async (dispatch) => {
   
  return CampaignService.removeCampaigns(id).then((data) => {
      dispatch(success(data))
  },(error) => {
      dispatch(failure(error).toString());
  })

  function success(data){
      return { type:DELETE_CAMPAIGNS_SUCCESS, payload:data}
  }
  function failure(error) {
      return { type:DELETE_CAMPAIGNS_FAILURE , error}
  }
}


export const editCampagins = (id,data) => async (dispatch) => {

  return CampaignService.UpdateCampaigns(id,data).then((data) => {
      dispatch({
          type:EDIT_CAMPAIGNS_SUCCESS,
          payload: data,
      })
  },(error) => {
      dispatch({
          type:EDIT_CAMPAIGNS_FAILURE,
          error
      })
  })
}

export const getCampaignById = (id) => async (dispatch) => {
    try {
        return await CampaignService.returnCampaignById(id);
    }
    catch (err) {
      console.log(err);
    }
} 

export const ActOrDeactCampaign = (id,data) => async (dispatch) => {

  return await CampaignService.actOrdectCampaigns(id,data).then((data) => {
      dispatch(success(data));
  },(error) => {
      dispatch(failure(error).toString());
  })

  function success(data){
      return { type: Act_Deact_CAMPAIGNS_Success, payload: data }
  }

  function failure(error){
      return { type: Act_Deact_CAMPAIGNS_Failure, error }
  }
}

