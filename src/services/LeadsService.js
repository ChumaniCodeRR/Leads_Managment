import axios from 'axios';
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

const returnAllCampaignLeads = () => {
    const token = getToken();
    return axios.get(API_URL + `leads?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const createLeads = (data) => {
    const token = getToken();
    return axios.post(API_URL + `leads?api_token=${token}`, data)
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        return err;
    })
}

const UpdateLeads = (id,data) => {
    const token = getToken();
    return axios.put(API_URL + `leads/${id}?api_token=${token}` , data)
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        return err;
    })
}

const removeLeads = (id) => {
    const token = getToken();
    return axios.delete(API_URL + `leads/${id}?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}


export default{
    returnAllCampaignLeads,
    createLeads,
    UpdateLeads,
    removeLeads
}