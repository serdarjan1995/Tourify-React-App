import {USER_LOADING, USER_LOADED, AUTH_FAILED, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT} from "../actions/types"

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
}

export default function reduceAuth(state = initialState, action) {
    switch (action.type) {
        case USER_LOADING: return {
            ...state,
            isLoading: true,
        }
        case USER_LOADED: return {
            ...state,
            isAuthenticated: true,
            isLoading: false,
            user: action.payload.username,
        }
        case LOGOUT:
        case AUTH_FAILED:
        case LOGIN_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                isLoading: false,
                user: null,
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                isLoading: false,
            }
        default: return state;
    }
}