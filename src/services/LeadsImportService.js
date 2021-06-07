import axios from 'axios';
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

const token = getToken();

class LeadsImportService {

    createLeadsImport = async (id,data) => {
        return await axios.post(API_URL + `leads/import/${id}?api_token=${token}`, data);
    }

}

export default new LeadsImportService();