import { GET_CLIENT_SUCCESS , 
       ADD_CLIENT_SUCCESS,
        EDIT_CLIENT_SUCCESS, 
        DELETE_CLIENT_SUCCESS,
    Act_Deact_CLIENT_Success,
    RETRIVE_CLIENT_BY_ID_SUCESSS } from '../actions/type';

    const INITIAL_STATE = [];

    function clientsReducer(clients = INITIAL_STATE, action ) {

      const {type, payload} = action;
    
        switch (type) {
          
          case ADD_CLIENT_SUCCESS:
            return [...clients,payload];
    
          case GET_CLIENT_SUCCESS:
            return payload;
          
          case EDIT_CLIENT_SUCCESS:
            return clients.map((client) => {
              if(client.id === payload.id){
                return {
                  ...client,
                  ...payload,
                };
              } else {
                  return client;
                }
            });
          
          case DELETE_CLIENT_SUCCESS: 
            return clients.filter(({ id }) => id !== payload.id);
    
          case RETRIVE_CLIENT_BY_ID_SUCESSS:
            return payload;
    
          case Act_Deact_CLIENT_Success:
            return clients.map((client) => {
              if(client.id === payload.id){
                return { ...client, ...payload };
              } else {
                return client;
              }
            });
            default:
              return clients;
          }
    }
    
export default clientsReducer;
