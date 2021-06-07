import axios from 'axios';
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

const token = getToken();

class LeadsService {

     returnAllCampaignLeads = async (id) => {
        return await axios.get(API_URL + `campaign/leads/${id}?api_token=${token}`);
    }
    
    createLeads = async (id,data) => {
        return await axios.post(API_URL + `lead/${id}?api_token=${token}`, data);
    }
    
    UpdateLeads = async (id,data) => {
        return await axios.put(API_URL + `lead/${id}?api_token=${token}` , data);
    }
    
    removeLeads = async (id) => {
        return await axios.delete(API_URL + `lead/${id}?api_token=${token}`);
    }

    returnLeadsStatus = async () => {
       return await axios.get(API_URL + `lead/status?api_token=${token}`);
    }
}

export default new LeadsService();




