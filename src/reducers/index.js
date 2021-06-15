import { combineReducers } from 'redux'
import authentication from './authentication';
import admins from './Admin';
import clients from './Client';
import clientUsers from './ClientUsers';
import campaigns from './Campaign';
import leads  from './Lead';
import leadsnote from './LeadsNotes';
import leadsimport from './LeadsImport';
import userprofile from './UserProfile';

const rootReducer = combineReducers({
    authentication,
    admins,
    clients,
    clientUsers,
    campaigns,
    leads,
    leadsnote,
    leadsimport,
    userprofile
    
})

export default rootReducer