import {LEADS_IMPORT_SUCCESS,LEADS_IMPORT_FAILURE} from '../actions/type';

const INITIAL_STATE = {
    leadsimports : [],
};

export default function  leadsimports(state = INITIAL_STATE, action ) {

    const {type, payload} = action;

    switch (type) {

        case LEADS_IMPORT_SUCCESS:
            return {...state, leadsimports: payload, success: true, };

        case LEADS_IMPORT_FAILURE: 
            return { success: false,};

        default:
           return state;
    }
}