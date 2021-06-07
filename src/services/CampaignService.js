import axios from 'axios';
import { getToken } from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

const token = getToken();


class CampaignService {

     returnAllCampaigns = async () => {
        return await axios.get(API_URL + `campaigns?api_token=${token}`);       
    }
    
     createCampaigns = async (data) => {
        return await axios.post(API_URL + `campaign?api_token=${token}`, data);
    }
    
     returnCampaignById = async (id) => {
        return await axios.get(API_URL + `campaign/${id}?api_token=${token}`);
    }
    
     removeCampaigns = async (id,data) => {
        return await axios.delete(API_URL + `campaign/${id}?api_token=${token}`);
    }
    
     UpdateCampaigns = async (id,data) => {
        return await axios.put(API_URL + `campaign/${id}?api_token=${token}` , data);
    }
    
     actOrdectCampaigns = async (id,data) => {
        return await axios.put(API_URL + `campaign/status/${id}?api_token=${token}`, data);
    }
}

export default new CampaignService();


