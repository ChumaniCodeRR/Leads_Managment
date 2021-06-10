import axios from 'axios';
import { getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;


//const token = getToken();



    const returnAllAdmin = async () => {
        const token = getToken();
        
        return await axios.get(API_URL + `admins?api_token=${token}`).then((response) =>{
            return response.data.data;
        })
        .catch((err) =>{
            return err;
       })
    }
    
    const createAdministrator = async (data) => {

        const token = getToken();
    
        return await axios.post(API_URL + `admin?api_token=${token}`,data).then((response) => {
          return response.data;
        })
        .catch((err) =>{
            return err;
        })

    }
    
    const returnAdminById = async (id) => {

        const token = getToken();

        return axios.get(API_URL + `admin/${id}?api_token=${token}`).then((response) => { 
            return response.data.data;
        })
        .catch((err) =>{
            return err;
        })        

    }
    
    const UpdateAdmin = async (id,data) => {
    
     const token = getToken();

     return await axios.put(API_URL + `admin/${id}?api_token=${token}`, data).then((response) => {
      return response.data;
     })
     .catch((err) =>{
        return err;
     })

    }
    
    const removeAdmin = async (id) => {  
        const token = getToken();
  
        return await axios.delete(API_URL + `admin/${id}?api_token=${token}`).then((response) => {
            return response.data.data;
        }).catch((err) =>{
            return err;
        })

    }
    
    const actOrdectAdmin = async (id,data) => {
        const token = getToken();

        return await axios.put(API_URL + `admin/status/${id}?api_token=${token}`,data).then((response) => {
         return response.data;
        })
        .catch((err) =>{
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




