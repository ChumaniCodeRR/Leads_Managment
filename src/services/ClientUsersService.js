import  axios from 'axios';
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

const token = getToken();

class ClientUsersService {

     returnAllClientUsers = async (id) => {
        return await axios.get(API_URL + `client/users/${id}?api_token=${token}`);
    }
    
    createClientUsers = async (data) => {    
        return await axios.post(API_URL + `client/user?api_token=${token}`, data);      
    }
    
    returnClientUsersById = async (id) => { 
        return await axios.get(API_URL + `clientsUsers/${id}?api_token=${token}`);
    }
    
    UpdateClientUsers = async (id,data) => {
        return await axios.put(API_URL + `client/user/${id}?api_token=${token}` , data);
    }
    
    removeClientUsers = async (id) => {
        return await axios.delete(API_URL + `client/user/${id}?api_token=${token}`);
    }
    
    actOrdectClientUsers = async (id) => {
        return await axios.get(API_URL + `client/user/status/${id}?api_token=${token}`);
    }
}
export default new ClientUsersService();


