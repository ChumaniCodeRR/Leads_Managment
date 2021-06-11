import axios from 'axios';
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;


    const returnLeadsNotes = async (id) => {
        const token = getToken();
        return await axios.get(API_URL + `/leads/notes/${id}?api_token=${token}`).then((response) => {
            return response.data.data;
        })
        .catch((err) =>{
            return err;
       });
    }
    
    const updateLeadsNotes = async (id,data) => {
        const token = getToken();
        return await axios.put(API_URL + `lead/notes/${id}?api_token=${token}`, data).then((response) => {
            return response.data;
           })
           .catch((err) =>{
              return err;
        });
    }

    const removeLeadsNotes = async (id) => {
        const token = getToken();
        return await axios.delete(API_URL + `lead/notes/${id}?api_token=${token}`).then((response) => {
            return response.data.data;
        }).catch((err) =>{
            return err;
        });
    }

export default {
    removeLeadsNotes,
    updateLeadsNotes,
    returnLeadsNotes
}