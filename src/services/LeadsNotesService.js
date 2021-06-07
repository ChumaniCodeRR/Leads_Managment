import axios from 'axios';
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

const token = getToken();

class LeadsNotesService {

    returnLeadsNotes = async (id) => {
        return await axios.get(API_URL + `/leads/notes/${id}?api_token=${token}`);
    }

    updateLeadsNotes = async (id,data) => {
        return await axios.put(API_URL + `lead/notes/${id}?api_token=${token}`, data);
    }

    removeLeadsNotes = async (id) => {
        return await axios.delete(API_URL + `lead/notes/${id}?api_token=${token}`);
    }

}

export default new LeadsNotesService();