import { Dispatch } from "redux";
import * as AuthenticationApi from '../model/AuthenticationApi'
import { writeTokenToCookie } from "../model/CookieStore";

export const LOGIN_REQUESTED = 'LOGIN_REQUESTED'
export const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT'

// Login

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

export function login(email: string, password: string) {
    return async (dispatch: Dispatch) => {
        dispatch(loginRequested())

        try {
            const loginResponse = await AuthenticationApi.login(email, password)
            writeTokenToCookie(loginResponse.token)
            dispatch(loginSuceeded(loginResponse.token))
        }
        catch(e) {
            dispatch(loginFailed(e))
        }
    }
}

export function autoLogin(token: string) {
    return loginSuceeded(token)
}

// Logout

export function logout() {
    return {
        type: LOGOUT
    }
}
