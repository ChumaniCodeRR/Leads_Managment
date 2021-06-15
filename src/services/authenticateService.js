import axios from "axios";
import { getToken } from '../helpers/utils';
const API_URL = process.env.REACT_APP_API_URL;


/*export const userService = {
  login,
  logout,
  resetPassword
};

function login (data) {
    const token = getToken();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({data})
    };
    return axios.post(API_URL + `/login/${token}`, requestOptions)
    .then(user => {
        localStorage.setItem('user', JSON.stringify(user));
        
        return user;
    });
}

 function resetPassword(email){
    const token = getToken();
     const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email})
     }

     return axios.post(API_URL + `/password/reset/${token}`, requestOptions)
       .then(user => {
           return user;
       });
 }

 function logout() {
    const token = getToken();
    localStorage.removeItem(API_URL + `/logout/${token}`);
    //localStorage.removeItem('user');
 }*/

 const login = (data) => {
     
    return axios.post(API_URL + `login`, data)
    .then((response) => {
        if(response.data.success === true){
            localStorage.setItem("user", JSON.stringify(response.data.data.access_token));
        }
        return response.data;
    })
    .catch((error) => {
        return error
    });
};

const logout = () => {
    const token = getToken();
    localStorage.removeItem(`user`);
};

const PasswordReset = (email) => {
    return axios.post(API_URL + `password/reset` , email)
    .then((response) => {
        return response.data;
    })
}

export default {
    login,
    logout,
    PasswordReset
};