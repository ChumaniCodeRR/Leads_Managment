import {LEADS_IMPORT_SUCCESS} from '../actions/type';

const INITIAL_STATE = [];

function leadsimportReducer(leadsimports = INITIAL_STATE, action ) {

    const {type, payload} = action;

    switch (type) {

        case LEADS_IMPORT_SUCCESS:
            return [...leadsimports,payload];

        default:
           return leadsimports;

    }

}

export default leadsimportReducer;
