import { combineReducers } from 'redux'
import authentication from './authentication';
import admins from './Admin';
import clients from './Client';
import clientUsers from './ClientUsers';
import campaigns from './Campaign';
import leads  from './Lead';
import userprofile from './UserProfile';
import resetpassword from './ResetPassword';

const rootReducer = combineReducers({
    authentication,
    admins,
    clients,
    clientUsers,
    campaigns,
    leads,
    userprofile,
    resetpassword
})

export default rootReducer