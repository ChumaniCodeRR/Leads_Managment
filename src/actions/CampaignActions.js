import CampaignService from '../services/CampaignService';
import {
GET_CAMPAIGNS_SUCCESS,
GET_CAMPAIGNS_FAILURE ,
ADD_CAMPAIGNS_SUCCESS,
ADD_CAMPAIGNS_FAILURE ,
EDIT_CAMPAIGNS_SUCCESS ,
EDIT_CAMPAIGNS_FAILURE,
DELETE_CAMPAIGNS_SUCCESS ,
DELETE_CAMPAIGNS_FAILURE ,
Act_Deact_CAMPAIGNS_Success ,
Act_Deact_CAMPAIGNS_Failure 
} from './type';

export const getAllCampaigns = () => (dispatch) => {
    return CampaignService.returnAllCampaigns().then(
        (data) => {
        dispatch({
            type: GET_CAMPAIGNS_SUCCESS,
            payload: data,
        });
    }, (error) => {
        dispatch({
            type: GET_CAMPAIGNS_FAILURE,
            error
        });
    }
  );
};

export const createNewCampaign = (data) => (dispatch) => {
    return CampaignService.createCampaigns(data).then(
        (data) => {
        dispatch({
            type: ADD_CAMPAIGNS_SUCCESS,
            payload: data,
        });
    },
    (error) => {
        dispatch({
            type: ADD_CAMPAIGNS_FAILURE,
            error
        });
    }
  );
};

export const deleteCampagins  = (id) => (dispatch) => {
    return CampaignService.removeCampaigns(id).then(
        (data) => {
        dispatch({
            type :DELETE_CAMPAIGNS_SUCCESS,
            payload: data,
        });
    },
    (error) => {
        dispatch({
            type:DELETE_CAMPAIGNS_FAILURE,
            error
        });
    }
  );
};

export const editCampagins = (id,data) => (dispatch) => {
    return CampaignService.UpdateCampaigns(id,data).then(
        (data) => {
        dispatch({
            type:EDIT_CAMPAIGNS_SUCCESS,
            payload: data,
        });
    }, (error) => {
        dispatch({
            type:EDIT_CAMPAIGNS_FAILURE,
            error
        });
    }
  );
};

export const getCampaignById = (id) => () => {
    return CampaignService.returnCampaignById(id);
};

export const ActOrDeactCampaign = (id,data) => (dispatch) => {
    return CampaignService.actOrdectCampaigns(id,data).then(
        (data) => {
            dispatch({
                type: Act_Deact_CAMPAIGNS_Success,
                payload: data,
            });
        }, (error) => {
            dispatch({
                type: Act_Deact_CAMPAIGNS_Failure,
                error
            });
        }
    );
};

