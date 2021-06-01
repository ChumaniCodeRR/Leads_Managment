import axios from 'axios';
import { getToken } from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

const returnAllCampaigns = async () => {
    const token = getToken();
    return await axios.get(API_URL + `campaigns?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const createCampaigns = async (data) => {
    const token = getToken();
    return await axios.post(API_URL + `campaign?api_token=${token}`, data)
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        return err;
    })
}

const returnCampaignById = async (id) => {
    const token = getToken();
    return await axios.get(API_URL + `campaign/${id}?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const removeCampaigns = async (id,data) => {
    const token = getToken();
    return await axios.delete(API_URL + `campaign/${id}?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const UpdateCampaigns = async (id,data) => {
    const token = getToken();
    return await axios.put(API_URL + `campaign/${id}?api_token=${token}` , data)
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        return err;
    })
}

const actOrdectCampaigns = (id,data) => {
    const token = getToken();
    return axios.put(API_URL + `campaign/status/${id}?api_token=${token}`, data)
    .then((response) => {
        return response.data;
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