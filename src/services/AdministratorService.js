import axios from 'axios';
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

const returnAllAdmin = () => {
    const token = getToken();
    return axios.get(API_URL + `admins?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const createAdministrator = (data) => {
    const token = getToken();
    return axios.post(API_URL + `admin?api_token=${token}`, data)
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        return err;
    })
}

const returnAdminById = (id) => {
    const token = getToken();
    return axios.get(API_URL + `admin/${id}?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const UpdateAdmin = (id,data) => {
    const token = getToken();
    return axios.put(API_URL + `admin/${id}?api_token=${token}` , data)
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        return err;
    })
}

const removeAdmin = (id) => {
    const token = getToken();
    return axios.delete(API_URL + `admin/${id}?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) => {
        return err;
    })
}

const actOrdectAdmin = (id,data) => {
    const token = getToken();
    return axios.put(API_URL + `admin/status/${id}?api_token=${token}`, data)
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        return err;
    })
}

export default {
    returnAllAdmin,
    createAdministrator,
    returnAdminById,
    UpdateAdmin,
    removeAdmin,
    actOrdectAdmin
}