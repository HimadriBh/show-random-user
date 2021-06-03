import {GET_USERS_NAME, GET_SINGLE_USER, CLEAR_USER_DETAILS} from './types';
import axios from 'axios'

export const getUsersName = () => async dispatch => {
    try {
        const data = await axios.get('https://randomuser.me/api/?results=20');
        console.log(data);
        dispatch({
            type: GET_USERS_NAME,
            payload: data.data.results
        })
    } catch (error) {
        
    }
}

export const getSingleUser = (id) => async dispatch => {
    dispatch({
        type: GET_SINGLE_USER,
        payload: id
    })
}
export const clearUserDetails = () => async dispatch => {
    dispatch({
        type: CLEAR_USER_DETAILS,
    })
}