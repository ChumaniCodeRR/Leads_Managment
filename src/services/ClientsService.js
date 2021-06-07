import  axios from 'axios';
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

const token = getToken();

class ClientsService {

    returnAllClients = async () => { 
        return await axios.get(API_URL + `clients?api_token=${token}`);
    }
    
    createClients = async (data) => {
        return await axios.post(API_URL + `client?api_token=${token}`, data);      
    }
    
    returnClientById = async (id) => {      
        return await axios.get(API_URL + `client/${id}?api_token=${token}`);
    }
    
    UpdateClients = async (id,data) => {
        return await axios.put(API_URL + `client/${id}?api_token=${token}` , data);    
    }
    
    removeClients = (id) => {   
        return axios.delete(API_URL + `client/${id}?api_token=${token}`);
    }
    
    actOrdectClients = async (id) => {     
        return await axios.get(API_URL + `client-status/${id}?api_token=${token}`);
    }    
}

export default new ClientsService();
