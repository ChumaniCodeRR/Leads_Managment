import  axios from 'axios';
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

const returnAllClients = async () => {
    const token = getToken();
    return await axios.get(API_URL + `clients?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const createClients = async (data) => {
    const token = getToken();
    return await axios.post(API_URL + `client?api_token=${token}`, data)
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        return err;
    })
}

const returnClientById = async (id) => {
    const token =  getToken();
    return await axios.get(API_URL + `client/${id}?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const UpdateClients = async (id,data) => {
    const token = getToken();
    return await axios.put(API_URL + `client/${id}?api_token=${token}` , data)
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        return err;
    })
}

const removeClients = (id) => {
    const token = getToken();
    return axios.delete(API_URL + `client/${id}?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const actOrdectClients = async (id) => {
    const token = getToken();
    return await axios.get(API_URL + `client-status/${id}?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

export default{
    returnAllClients,
    createClients,
    returnClientById,
    UpdateClients,
    removeClients,
    actOrdectClients
}