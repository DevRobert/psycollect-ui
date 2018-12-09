import { Dispatch, AnyAction } from "redux";
import * as AuthenticationApi from '../model/AuthenticationApi'

export const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED'
export const LOGIN_FAILED = 'LOGIN_FAILED'

function loginRequested() {
    return {
        type: LOGIN_REQUESTED
    }
}

function loginSuceeded(token: string) {
    return {
        type: LOGIN_SUCCEEDED,
        token
    }
}

function loginFailed(error: Error) {
    return {
        type: LOGIN_FAILED,
        error
    }
}

export function login(email: string, password: string): any {
    return async (dispatch: Dispatch) => {
        dispatch(loginRequested())

        try {
            const loginResponse = await AuthenticationApi.login(email, password)
            dispatch(loginSuceeded(loginResponse.token))
        }
        catch(e) {
            dispatch(loginFailed(e))
        }
    }
}
