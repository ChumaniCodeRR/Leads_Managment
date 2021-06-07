import axios from 'axios';
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;


const token = getToken();

class AdministrationService {

    returnAllAdmin = async () => {
        return await axios.get(API_URL + `admins?api_token=${token}`);
    }
    
    createAdministrator = async (data) => {
        return await axios.post(API_URL + `admin?api_token=${token}`, data);
    }
    
    returnAdminById = async (id) => {
        return await axios.get(API_URL + `admin/${id}?api_token=${token}`);       
    }
    
    UpdateAdmin = async (id,data) => {
        return await axios.put(API_URL + `admin/${id}?api_token=${token}` , data);
    }
    
    removeAdmin = async (id) => {    
        return await axios.delete(API_URL + `admin/${id}?api_token=${token}`);
    }
    
    actOrdectAdmin = async (id,data) => {
        return await axios.put(API_URL + `admin/status/${id}?api_token=${token}`, data);
    }
}

export default new AdministrationService();



