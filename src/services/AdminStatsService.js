import axios from "axios";
import { getToken } from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

const getclientstats = () => {
    const token = getToken();
    return axios.get(API_URL + `admin/clients/report?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) =>{
        return err;
    })
}

const getusersstats = () => {
    const token = getToken();
    return axios.get(API_URL + `admin/users/report?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) =>{
        return err;
    })
}

const getleadsstats = () => {
    const token = getToken();
    return axios.get(API_URL + `admin/leads/report?api_token=${token}`).then((response) => {
        return response.data.data;
    })
    .catch((err) =>{
        return err;
    })
}

export default {
    getclientstats,
    getusersstats,
    getleadsstats
}