import { AnyAction } from "redux";
import { LOGIN_REQUESTED, LOGIN_SUCCEEDED, LOGIN_FAILED } from "../actions";

const defaultState = {
    info: "",
    error: "",
    token: ""
}

export default (state: any = defaultState, action: AnyAction) => {
    switch(action.type) {
        case LOGIN_REQUESTED:
            return {
                ...state,
                token: "",
                info: "Logging in...",
                error: ""
            }

        case LOGIN_SUCCEEDED:
            return {
                ...state,
                token: action.token,
                info: "Logged in",
                error: ""
            }

        case LOGIN_FAILED:
            return {
                ...state,
                info: "",
                error: action.error.message
            }

        default:
            return state
    }
}
