import  axios from 'axios';
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

const returnAllClientUsers = async () => {
    const token = getToken();
    return await axios.get(API_URL + `clientsUsers?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const createClientUsers = async (data) => {
    const token = getToken();
    return await axios.post(API_URL + `clientsUsers?api_token=${token}`, data)
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        return err;
    })
}

const returnClientUsersById = async (id) => {
    const token =  getToken();
    return await axios.get(API_URL + `clientsUsers/${id}?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const UpdateClientUsers = async (id,data) => {
    const token = getToken();
    return await axios.put(API_URL + `clientsUsers/${id}?api_token=${token}` , data)
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        return err;
    })
}

const removeClientUsers = async (id) => {
    const token = getToken();
    return await axios.delete(API_URL + `clientsUsers/${id}?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const actOrdectClientUsers = async (id) => {
    const token = getToken();
    return await axios.get(API_URL + `clients/${id}?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

export default{
    returnAllClientUsers,
    createClientUsers,
    returnClientUsersById,
    UpdateClientUsers,
    removeClientUsers,
    actOrdectClientUsers
}