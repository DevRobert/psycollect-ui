import { AnyAction } from "redux";
import { LOGIN_REQUESTED, LOGIN_SUCCEEDED, LOGIN_FAILED, LOGOUT } from "../actions/Authentication";

export interface LoginState {
    info: string,
    error: string,
    token: string,
    loggedIn: boolean
}

const defaultState: LoginState = {
    info: "",
    error: "",
    token: "",
    loggedIn: false
}

export default (state: LoginState = defaultState, action: AnyAction) => {
    switch(action.type) {
        case LOGIN_REQUESTED:
            return {
                ...state,
                token: "",
                loggedIn: false,
                info: "Logging in...",
                error: ""
            }

        case LOGIN_SUCCEEDED:
            return {
                ...state,
                token: action.token,
                loggedIn: true,
                info: "Logged in",
                error: ""
            }

        case LOGIN_FAILED:
            return {
                ...state,
                info: "",
                error: action.error.message
            }
        case LOGOUT:
            return {
                ...state,
                token: "",
                loggedIn: false,
                info: "",
                error: ""
            }

        default:
            return state
    }
}
