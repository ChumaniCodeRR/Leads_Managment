import { LEADS_EXPORT_SUCCESS,LEADS_EXPORT_FAILURE } from '../actions/type';

const INITIAL_STATE = {
    leadsexports : [],
};

export default function  leadsexports(state = INITIAL_STATE, action ) {

    const {type, payload} = action;

    switch (type) {

        case LEADS_EXPORT_SUCCESS:
            return {...state, leadsexports: payload, success: true, };

        case LEADS_EXPORT_FAILURE: 
            return { success: false,};

        default:
           return state;
    }
}