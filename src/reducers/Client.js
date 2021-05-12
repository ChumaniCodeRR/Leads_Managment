import { GET_CLIENT_SUCCESS , GET_CLIENT_FAILURE , ADD_CLIENT_SUCCESS, ADD_CLIENT_FAILURE, EDIT_CLIENT_SUCCESS, EDIT_CLIENT_FAILURE, DELETE_CLIENT_SUCCESS
    , DELETE_CLIENT_FAILURE, Act_Deact_CLIENT_Success, Act_Deact_CLIENT_Failure } from '../actions/type';
    import data from '../data/clients';

    const initialState = {
        clients: [],
        clientToEdit: [],
    };

    export default function clients(state = initialState , action ) {
        const { type , payload } = action;

        switch (type) {
            case Act_Deact_CLIENT_Success:
                return {
                    ...state,
                    clients: payload,
                    success: true,
                };
            case Act_Deact_CLIENT_Failure:
                return {
                    success: false,
                };
            case GET_CLIENT_SUCCESS:
              return {
                ...state,
                clients: payload,
                success: true,
              };
            case GET_CLIENT_FAILURE:
              return {
                success: false,
              };
            case ADD_CLIENT_SUCCESS:
              return {
                ...state,
                clients: [...state.clients, payload],
                success: true,
              };
            case ADD_CLIENT_FAILURE:
              return {
                success: false,
              };
        
            case DELETE_CLIENT_SUCCESS:
              return {
                clients: [...state.clients.filter((data ) => data !== payload)],
                success: true,
              };
            case DELETE_CLIENT_FAILURE:
              return {
                success: false,
              };
            case EDIT_CLIENT_SUCCESS:
              return {
                ...state,
                clients: state.clients.map((index) =>
                  index === payload.id ? payload : clients
                ),
              };
            case EDIT_CLIENT_FAILURE:
              return {
                success: false,
              };
            default:
              return state;
          }
    }