import { GET_CLIENT_USERS_SUCCESS ,
  GET_CLIENT_USERS_FAILURE,
 ADD_CLIENT_USERS_SUCCESS,
 ADD_CLIENT_USERS_FAILURE,
 EDIT_CLIENT_USERS_SUCCESS,
 EDIT_CLIENT_USERS_FAILURE,
 DELETE_CLIENT_USERS_SUCCESS, 
 DELETE_CLIENT_USERS_FAILURE,
 Act_Deact_CLIENT_USERS_Success,Act_Deact_CLIENT_USERS_Failure, RETRIVE_CLIENTUSER_BY_ID_SUCESSS } from '../actions/type';

    const INITIAL_STATE = [];

    export default function clientsusers(state = INITIAL_STATE, action ) {

      const {type, payload} = action;
    
        switch (type) {
          
          case ADD_CLIENT_USERS_SUCCESS:
            return {...state, clientsusers: payload, success: true, };
    
          case ADD_CLIENT_USERS_FAILURE:
            return { success: false };

          case GET_CLIENT_USERS_SUCCESS:
            return{...state, clientsusers: payload, success: true, };
          
          case GET_CLIENT_USERS_FAILURE:
            return { success: false };

          case EDIT_CLIENT_USERS_SUCCESS:
            return {...state, clientsusers: state.clientsusers.map((index) => index === payload.id ? payload : clientsusers), success: true };

          case EDIT_CLIENT_USERS_FAILURE:
            return { success: false };
          
          case DELETE_CLIENT_USERS_SUCCESS: 
          return { clientsusers: [...state.clientsusers.filter((clientuser) => clientuser !== payload)], success: true,}
    
          case DELETE_CLIENT_USERS_FAILURE:
            return { success: false };

          case RETRIVE_CLIENTUSER_BY_ID_SUCESSS:
            return{...state, clientsusers: payload, success: true, };
    
          case Act_Deact_CLIENT_USERS_Success:
            return {...state, clientsusers: state.clientsusers.map((index) => index === payload.id ? payload : clientsusers), success: true };

          case Act_Deact_CLIENT_USERS_Failure:
            return { success: false };

          default:
              return state;
          }
    }
    













