import axios from "axios";
import { getToken } from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;


 const userProfile = (data) => {
   const token = getToken();
   
   localStorage.setItem('user', data.email)
 }

 const login = (data) => {
     
    return axios.post(API_URL + `login`, data)
    .then((response) => {
        if(response.data.success === true){
            localStorage.setItem('user', JSON.stringify(response.data.data.access_token));
        } else {
            console.log("No user")
        }
        return response.data;
    })
    .catch((error) => {
        return error
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

const PasswordReset = (email) => {
    return axios.post(API_URL + "password/reset" , email)
    .then((response) => {   
          return response.data;       
    })
}

export default {
    login,
    logout,
    PasswordReset,
    userProfile
};