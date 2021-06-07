import { GET_ADMIN_SUCCESS ,
  ADD_ADMIN_SUCCESS,
  EDIT_ADMIN_SUCCESS, 
  DELETE_ADMIN_SUCCESS , 
  Act_Deact_Admin_Success,
  RETRIVE_ADMIN_BY_ID_SUCESSS
} from '../actions/type';

const INITIAL_STATE = [];

function adminsReducer(admins = INITIAL_STATE, action ){
  
    const {type, payload} = action;

    switch (type) {
      
      case ADD_ADMIN_SUCCESS:
        return [...admins,payload];

      case GET_ADMIN_SUCCESS:
        return payload;
      
      case EDIT_ADMIN_SUCCESS:
        return admins.map((admin) => {
          if(admin.id === payload.id){
            return {
              ...admin,
              ...payload,
            };
          } else {
              return admin;
            }
        });
      
      case DELETE_ADMIN_SUCCESS: 
        return admins.filter(({ id }) => id !== payload.id);

      case RETRIVE_ADMIN_BY_ID_SUCESSS:
        return payload;

      case Act_Deact_Admin_Success:
        return admins.map((admin) => {
          if(admin.id === payload.id){
            return { ...admin, ...payload };
          } else {
            return admin;
          }
        });
        
        default:
          return admins;
      }
}
export default adminsReducer;