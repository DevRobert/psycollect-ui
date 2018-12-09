import { AnyAction } from "redux";
import { LOGIN_REQUESTED, LOGIN_SUCCEEDED, LOGIN_FAILED } from "../actions/Login";

export interface LoginState {
    info: string,
    error: string,
    token: string
}

const defaultState: LoginState = {
    info: "",
    error: "",
    // token: ""
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiIwNGNiMjY2NS1kYjVhLTQ1OTAtYjdlNS0yYmQ4ZGFkZTUxODciLCJlbWFpbCI6InJvYmVydEBibHV0bmVyLmRlIiwiYWRtaW4iOnRydWUsImlhdCI6MTU0NDM5MDk3MywiZXhwIjoxNTQ0NDc3MzczfQ.mY1ylG850CUgLqsBywaXo032vQLZlQ4GJ1e0eKGFhjw"
}

export default (state: LoginState = defaultState, action: AnyAction) => {
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
