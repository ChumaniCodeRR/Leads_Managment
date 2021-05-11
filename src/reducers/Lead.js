import {
GET_ALL_LEADS_SUCCESS,
GET_ALL_LEADS_FAILURE,
ADD_LEADS_SUCCESS ,
ADD_LEADS_FAILURE ,
EDIT_LEADS_SUCCESS ,
EDIT_LEADS_FAILURE , 
DELETE_LEADS_SUCCESS ,
DELETE_LEADS_FAILURE ,
IMPORT_LEADS_SUCCESS ,
IMPORT_LEADS_FAILURE } from '../actions/type';
import data from '../data/leads';

const initialState = {
    leads: data
 };
 
 export default function leads(state = initialState, action ){
     const { type , payload } = action;
 
     switch (type) {
         
         case GET_ALL_LEADS_SUCCESS:
           return {
             ...state,
             leads: payload,
             success: true,
           };
         case GET_ALL_LEADS_FAILURE:
           return {
             success: false,
           };
         case ADD_LEADS_SUCCESS:
           return {
             ...state,
             leads: [...state.leads, payload],
             success: true,
           };
         case ADD_LEADS_FAILURE:
           return {
             success: false,
           };
     
         case DELETE_LEADS_SUCCESS:
           return {
             leads: [...state.leads.filter((data) => data !== payload)],
             success: true,
           };
         case DELETE_LEADS_FAILURE:
           return {
             success: false,
           };
         case EDIT_LEADS_SUCCESS:
           return {
             ...state,
             leads: state.leads.map((index) => index === payload.id ? payload : leads)
           }
         case EDIT_LEADS_FAILURE:
           return {
             success: false,
           };
         default:
           return state;
       }
 }