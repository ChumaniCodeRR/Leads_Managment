import axios from 'axios';
import { getToken } from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

const returnAllCampaigns = () => {
    const token = getToken();
    return axios.get(API_URL + `campaigns?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const createCampaigns = (data) => {
    const token = getToken();
    return axios.post(API_URL + `campaigns?api_token=${token}`, data)
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        return err;
    })
}

const returnCampaignById = (id) => {
    const token = getToken();
    return axios.get(API_URL + `campaigns/${id}?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const UpdateCampaigns = (id,data) => {
    const token = getToken();
    return axios.put(API_URL + `campaigns/${id}?api_token=${token}` , data)
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        return err;
    })
}

const removeCampaigns = (id) => {
    const token = getToken();
    return axios.delete(API_URL + `campaigns/${id}?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const actOrdectCampaigns = (id) => {
    const token = getToken();
    return axios.get(API_URL + `campaigns/${id}?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

export default {
    returnAllCampaigns,
    createCampaigns,
    returnCampaignById,
    UpdateCampaigns,
    removeCampaigns,
    actOrdectCampaigns
}