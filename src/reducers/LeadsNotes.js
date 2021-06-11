import {LEADS_NOTES_GET_SUCCESS,LEADS_NOTES_UPDATE_SUCCESS,LEADS_NOTES_DELETE_SUCCESS, EDIT_LEADS_SUCCESS} from '../actions/type';

const INITIAL_STATE = [];

function leadsnoteReducer(leadsnotes = INITIAL_STATE, action ) {

    const {type, payload} = action;

    switch (type) {

        case LEADS_NOTES_GET_SUCCESS:
            return payload;
        
        case EDIT_LEADS_SUCCESS:
            return leadsnotes.map((leadnote) => {
               if(leadnote.id === payload.id){
                 return {
                    ...leadnote,
                    ...payload,
                    };
               } else {
                 return leadnote;
            }
        });
        
        case LEADS_NOTES_DELETE_SUCCESS: 
        return leadsnotes.filter(({ id }) => id !== payload.id);

        default:
            return leadsnotes;
    }
}

export default leadsnoteReducer;
