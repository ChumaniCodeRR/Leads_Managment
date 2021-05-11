import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import { GET_ADMIN_SUCCESS , GET_ADMIN_FAILURE , ADD_ADMIN_SUCCESS, ADD_ADMIN_FAILURE, EDIT_ADMIN_SUCCESS, EDIT_ADMIN_FAILURE, DELETE_ADMIN_SUCCESS
, DELETE_ADMIN_FAILURE, Act_Deact_Admin_Success, Act_Deact_Admin_Failure } from '../actions/type';
import data from '../data/admin';

const initialState = {
   admins: [],
   adminToEdit: [],
};

export default function admins(state = initialState, action ){
    const { type , payload } = action;

    switch (type) {
        case Act_Deact_Admin_Success:
            return {
                ...state,
                admins: payload,
                success: true,
            };
        case Act_Deact_Admin_Failure:
            return {
                success: false,
            };
        case GET_ADMIN_SUCCESS:
          return {
            ...state,
            admins: payload,
            success: true,
          };
        case GET_ADMIN_FAILURE:
          return {
            success: false,
          };
        case ADD_ADMIN_SUCCESS:
          return {
            ...state,
            admins: [...state.admins, payload],
            success: true,
          };
        case ADD_ADMIN_FAILURE:
          return {
            success: false,
          };
    
        case DELETE_ADMIN_SUCCESS:
          return {
            admins: [...state.admins.filter((data) => data !== payload)],
            success: true,
          };
        case DELETE_ADMIN_FAILURE:
          return {
            success: false,
          };
        case EDIT_ADMIN_SUCCESS:
          return {
            ...state,
            admins: state.admins.map((index) => index === payload.id ? payload : admins)
          }
        case EDIT_ADMIN_FAILURE:
          return {
            success: false,
          };
        default:
          return state;
      }
}