import { GET_CLIENT_USERS_SUCCESS , GET_CLIENT_USERS_FAILURE , ADD_CLIENT_USERS_SUCCESS, ADD_CLIENT_USERS_FAILURE, EDIT_CLIENT_USERS_SUCCESS, EDIT_CLIENT_USERS_FAILURE, DELETE_CLIENT_USERS_SUCCESS
    , DELETE_CLIENT_USERS_FAILURE, Act_Deact_CLIENT_USERS_Success, Act_Deact_CLIENT_USERS_Failure } from '../actions/type';
    import data from '../data/clientUsers';

    const initialState = {
        clientUsers: data,
    };

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
