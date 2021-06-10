import { GET_CLIENT_SUCCESS , 
       ADD_CLIENT_SUCCESS,
        EDIT_CLIENT_SUCCESS, 
        DELETE_CLIENT_SUCCESS,
        GET_CLIENT_FAILURE,
        ADD_CLIENT_FAILURE,
        EDIT_CLIENT_FAILURE,
        DELETE_CLIENT_FAILURE,
        Act_Deact_CLIENT_Failure,
        RETRIVE_CLIENT_BY_ID_FAILURE,
    Act_Deact_CLIENT_Success,
    RETRIVE_CLIENT_BY_ID_SUCESSS } from '../actions/type';

    const INITIAL_STATE = {
      clients:[]
    };

    export default function clients(state = INITIAL_STATE, action ) {

      const {type, payload} = action;
    
        switch (type) {
          
          case ADD_CLIENT_SUCCESS:
            return {...state, clients: payload, success: true, };
    
          case ADD_CLIENT_FAILURE:
            return { success: false };

          case GET_CLIENT_SUCCESS:
            return{...state, clients: payload, success: true, };
          
          case GET_CLIENT_FAILURE:
            return { success: false };
          
          case EDIT_CLIENT_SUCCESS:
            return {...state, clients: state.clients.map((index) => index === payload.id ? payload : clients), success: true };
   
          case EDIT_CLIENT_FAILURE:
            return {success: false };
                     
          case DELETE_CLIENT_SUCCESS: 
          return { clients: [...state.clients.filter((client) => client !== payload)], success: true,}
    
          case DELETE_CLIENT_FAILURE:
            return {success: false};

          case RETRIVE_CLIENT_BY_ID_SUCESSS:
            return{...state, clients: payload, success: true, };

          case RETRIVE_CLIENT_BY_ID_FAILURE:
            return { success: false };
    
          case Act_Deact_CLIENT_Success:
            return {...state, clients: state.clients.map((index) => index === payload.id ? payload : clients), success: true };

          case Act_Deact_CLIENT_Failure:
            return{ success: false};
          
            default:
              return state;
          }
    }