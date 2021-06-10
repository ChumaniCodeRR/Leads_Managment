import { GET_CLIENT_USERS_SUCCESS , ADD_CLIENT_USERS_SUCCESS, EDIT_CLIENT_USERS_SUCCESS, DELETE_CLIENT_USERS_SUCCESS
    , Act_Deact_CLIENT_USERS_Success,RETRIVE_CLIENTUSER_BY_ID_SUCESSS } from '../actions/type';

    const INITIAL_STATE = [];

    function clientsUserReducer(clientUsers = INITIAL_STATE, action ) {

      const {type, payload} = action;
    
        switch (type) {
          
          case ADD_CLIENT_USERS_SUCCESS:
            return [...clientUsers,payload];
    
          case GET_CLIENT_USERS_SUCCESS:
            return payload;
          
          case EDIT_CLIENT_USERS_SUCCESS:
            return clientUsers.map((clientUser) => {
              if(clientUser.id === payload.id){
                return {
                  ...clientUser,
                  ...payload,
                };
              } else {
                  return clientUser;
                }
            });
          
          case DELETE_CLIENT_USERS_SUCCESS: 
            return clientUsers.filter(({ id }) => id !== payload.id);
    
          case RETRIVE_CLIENTUSER_BY_ID_SUCESSS:
            return payload;
    
          case Act_Deact_CLIENT_USERS_Success:
            return clientUsers.map((clientUser) => {
              if(clientUser.id === payload.id){
                return { ...clientUser, ...payload };
              } else {
                return clientUser;
              }
            });
            default:
              return clientUsers;
          }
    }
    
export default clientsReducer;















    export default function clientUsers(state = initialState , action ) {
        const { type , payload } = action;

        switch (type) {
            case Act_Deact_CLIENT_USERS_Success:
                return{
                    ...state,
                    clientUsers: payload,
                    success: true,
                };
            case Act_Deact_CLIENT_USERS_Failure:
                return {
                    success: false,
                };
            case GET_CLIENT_USERS_SUCCESS:
              return {
                ...state,
                clientUsers: payload,
                success: true,
              };
            case GET_CLIENT_USERS_FAILURE:
              return {
                success: false,
              };
            case ADD_CLIENT_USERS_SUCCESS:
              return {
                ...state,
                clientUsers: [...state.clientUsers, payload],
                success: true,
              };
            case ADD_CLIENT_USERS_FAILURE:
              return {
                success: false,
              };
        
            case DELETE_CLIENT_USERS_SUCCESS:
              return {
                clientUsers: [...state.clientUsers.filter((clientusers) => clientusers !== payload)],
                success: true,
              };
            case DELETE_CLIENT_USERS_FAILURE:
              return {
                success: false,
              };
            case EDIT_CLIENT_USERS_SUCCESS:
              return {
                ...state,
                clientUsers: state.clientUsers.map((index) =>
                  index === payload.id ? payload : clientUsers
                ),
              };
            case EDIT_CLIENT_USERS_FAILURE:
              return {
                success: false,
              };
            default:
              return state;
          }

    }
