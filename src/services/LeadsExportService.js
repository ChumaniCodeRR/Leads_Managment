import axios from 'axios';
import {getToken} from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;

const createLeadsExport = async (data) => {
    const token = getToken();

    return await axios.post(API_URL + `leads/exports?api_token=${token}`, data).then((response) => {
        return response.data;
      })
      .catch((err) =>{
          return err;
    });
}

export default {
 createLeadsExport
}