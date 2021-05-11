import AdministratorService from '../services/AdministratorService';
import { GET_ADMIN_SUCCESS , GET_ADMIN_FAILURE , ADD_ADMIN_SUCCESS, ADD_ADMIN_FAILURE, EDIT_ADMIN_SUCCESS, EDIT_ADMIN_FAILURE, DELETE_ADMIN_SUCCESS
    , DELETE_ADMIN_FAILURE, Act_Deact_Admin_Success, Act_Deact_Admin_Failure } from './type';

export const getAllAdmins = () => (dispatch) => {
    return AdministratorService.returnAllAdmin().then(
        (data) => {
        dispatch({
            type: GET_ADMIN_SUCCESS,
            payload: data,
        });
    }, (error) => {
        dispatch({
            type: GET_ADMIN_FAILURE,
            error
        });
    }
  );
};

export const createNewAdmin = (data) => (dispatch) => {
    return AdministratorService.createAdministrator(data).then(
        (data) => {
        dispatch({
            type: ADD_ADMIN_SUCCESS,
            payload: data,
        });
    },
    (error) => {
        dispatch({
            type: ADD_ADMIN_FAILURE,
            error
        });
    }
  );
};

export const deleteAdmin  = (id) => (dispatch) => {
    return AdministratorService.removeAdmin(id).then((data) => {
        dispatch({
            type :DELETE_ADMIN_SUCCESS,
            payload: data,
        });
    },(error) => {
        dispatch({
            type:DELETE_ADMIN_FAILURE,
            error
        });
    }
  );
};

export const editAdmin = (id,data) => (dispatch) => {
    return AdministratorService.UpdateAdmin(id,data).then(
        (data) => {
        dispatch({
            type:EDIT_ADMIN_SUCCESS,
            payload: data,
        });
    },
    (error) => {
        dispatch({
            type:EDIT_ADMIN_FAILURE,
            error
        });
    }
  );
};

export const getAdminById = (id) => () => {
    return AdministratorService.returnAdminById(id);
};

export const ActOrDeactAdmin = (id,data) => (dispatch) => {
    return AdministratorService.actOrdectAdmin(id,data).then (
        (data) => {
            dispatch({
                type:Act_Deact_Admin_Success,
                payload: data,
            });
        },
        (error) => {
            dispatch({
                type:Act_Deact_Admin_Failure,
                error
            });
        }
    );
};