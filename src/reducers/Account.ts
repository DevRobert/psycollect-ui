import { AnyAction } from "redux";
import { LOGIN_SUCCEEDED, LOGIN_REQUESTED, LOGIN_FAILED, LOGOUT } from "../actions/Authentication";
import { parseToken } from "../model/TokenParser";

export interface AccountState {
    email: string,
    admin: boolean
}

const defaultState: AccountState = {
    email: "",
    admin: false
}

export default (state: AccountState = defaultState, action: AnyAction) => {
    switch(action.type) {
        case LOGIN_SUCCEEDED:
            const token = parseToken(action.token)

            return {
                ...state,
                email: token.email,
                admin: token.admin
            }

        case LOGIN_REQUESTED:
        case LOGOUT:
            return defaultState
    }
    return state
}
