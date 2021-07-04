export const getToken = () => {
    return JSON.parse(localStorage.getItem('user')) || null;
}

export const getUser = () => {
    const userStr = sessionStorage.getItem('user');
    if (userStr) return JSON.parse(userStr);
    else return null;
  }

export const removeUserSession = () => {
  sessionStorage.removeItem('access_token');
  sessionStorage.removeItem('user');
}

export const setUserSession = (token, user) => {
    sessionStorage.setItem('access_token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
  }
  
export const getStore = () => {
  //if (!user) return
  return JSON.parse(localStorage.getItem('user')) || null;
}

export const getUsers = () => {
  const user = JSON.parse(localStorage.getItem("user"));
}