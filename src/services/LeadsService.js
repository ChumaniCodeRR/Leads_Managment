import axios from 'axios';
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

    const returnAllCampaignLeads = async (id) => {
        const token = getToken();
        return await axios.get(API_URL + `campaign/leads/${id}?api_token=${token}`).then((response) => {
            return response.data.data;
        })
        .catch((err) =>{
            return err;
       });
    }
    
    const createLeads = async (id,data) => {
        const token = getToken();
        return await axios.post(API_URL + `lead/${id}?api_token=${token}`, data).then((response) => {
            return response.data;
          })
          .catch((err) =>{
              return err;
        });
    }
    
    const UpdateLeads = async (id,data) => {
        const token = getToken();
        return await axios.put(API_URL + `lead/${id}?api_token=${token}` , data).then((response) => {
            return response.data;
           })
           .catch((err) =>{
              return err;
        });
    }
    
    const removeLeads = async (id) => {
        const token = getToken();
        return await axios.delete(API_URL + `lead/${id}?api_token=${token}`).then((response) => {
            return response.data.data;
        }).catch((err) =>{
            return err;
        });
    }

    const returnLeadsStatus = async () => {
       const token = getToken();
       return await axios.get(API_URL + `lead/status?api_token=${token}`).then((response) => {
        return response.data;
       })
       .catch((err) =>{
          return err;
       });
    }

export default {
    UpdateLeads,
    createLeads,
    removeLeads,
    returnLeadsStatus,
    returnAllCampaignLeads
}




