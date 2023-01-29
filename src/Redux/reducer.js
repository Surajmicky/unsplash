
import { LOGIN, LOGOUT } from './action';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default  function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                isAuthenticated: true,
                user: action.credentials
            };
        case LOGOUT:
            return {
                isAuthenticated: false,
                user: {}
            };
        default:
            return state;
    }
}
