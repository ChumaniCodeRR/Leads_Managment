import {
    LEADS_NOTES_GET_SUCCESS,
    LEADS_NOTES_UPDATE_SUCCESS,
    LEADS_NOTES_DELETE_SUCCESS,
    LEADS_NOTES_GET_FAILURE,
    LEADS_NOTES_UPDATE_FAILURE,
    LEADS_NOTES_DELETE_FAILURE} from '../actions/type';

const INITIAL_STATE = { 
    leadsnotes : []
};

export default function leadsnotes(state = INITIAL_STATE, action ) {

    const {type, payload} = action;

    switch (type) {

        case LEADS_NOTES_GET_SUCCESS:
            return {...state, leadsnotes: payload, success: true, };
        
        case LEADS_NOTES_GET_FAILURE:
            return { success: false,};
        
        case LEADS_NOTES_UPDATE_SUCCESS:
            return {...state, leadsnotes: state.leadsnotes.map((index) => index === payload.id ? payload : leadsnotes), success: true };

        case LEADS_NOTES_UPDATE_FAILURE:
            return { success: false,};
            
        case LEADS_NOTES_DELETE_SUCCESS: 
            return { leadsnotes: [...state.leadsnotes.filter((leadsnote) => leadsnote !== payload)], success: true,}

        case LEADS_NOTES_DELETE_FAILURE:
            return { success : false,};

        default:
            return state;
    }
}

