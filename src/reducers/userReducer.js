import { GET_USERS_NAME , GET_SINGLE_USER, CLEAR_USER_DETAILS} from '../actions/types';

const initialState = {
    users: null,
    user: {}
}
// let users = {};
// users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : null;
// if(users){
//     initialState.users = users;
// }

const userReducer = (state = {}, action) => {
    switch(action.type){
        case GET_USERS_NAME:
            return {...state, users: action.payload };
        case GET_SINGLE_USER:
            let clickedUser;
            if(state.users){
                [clickedUser] = state.users.filter(user => user.login.uuid === action.payload)
            }else clickedUser = null;
            // const [user] = state.users.filter(user => user.login.uuid === action.payload)
            return { ...state, user: clickedUser }
        case CLEAR_USER_DETAILS:
            return {...state, user: {}}
        default:
            return state;
    }
}

export default userReducer;