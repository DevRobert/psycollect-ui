import { Dispatch, AnyAction } from "redux";
import * as TrackApi from '../model/TrackApi'
import { State } from "../reducers";

export const FETCH_DAILY_REPORT_REQUESTED = 'FETCH_DAILY_REPORT_REQUESTED'
export const FETCH_DAILY_REPORT_SUCCEEDED = 'FETCH_DAILY_REPORT_SUCCEEDED'
export const FETCH_DAILY_REPORT_FAILED = 'FETCH_DAILY_REPORT_FAILED'

export const PUSH_DAILY_REPORT_REQUESTED = 'PUSH_DAILY_REPORT_REQUESTED'
export const PUSH_DAILY_REPORT_SUCCEEDED = 'PUSH_DAILY_REPORT_SUCCEEDED'
export const PUSH_DAILY_REPORT_FAILED = 'PUSH_DAILY_REPORT_FAILED'

export const NAVIGATE_BACK = 'NAVIGATE_BACK'
export const NAVIGATE_FORWARD = 'NAVIGATE_FORWARD'

function fetchDailyReportRequested() {
    return {
        type: FETCH_DAILY_REPORT_REQUESTED
    }
}

function fetchDailyReportSuceeded(emotions: {[name: string]: number}, activities: {[name: string]: number}) {
    return {
        type: FETCH_DAILY_REPORT_SUCCEEDED,
        emotions,
        activities
    }
}

function fetchDailyReportFailed(error: Error) {
    return {
        type: FETCH_DAILY_REPORT_FAILED,
        error
    }
}

export function fetchDailyReport(token: string, date: string): any {
    return (dispatch: Dispatch) => {
        dispatch(fetchDailyReportRequested())

        TrackApi.getDayReport({
            token,
            date
        }).then(response => {
            dispatch(fetchDailyReportSuceeded(response.emotions, response.activities))
        }).catch(error => {
            dispatch(fetchDailyReportFailed(error))
        })
    }
}

function pushDailyReportRequested() {
    return {
        type: PUSH_DAILY_REPORT_REQUESTED
    }
}

function pushDailyReportSucceeded() {
    return {
        type: PUSH_DAILY_REPORT_SUCCEEDED
    }
}

function pushDailyReportFailed(error: Error) {
    return {
        type: PUSH_DAILY_REPORT_FAILED,
        error
    }
}

export function pushDailyReport(token: string, date: string, emotions: {[name: string]: number}, activities: {[name: string]: number}) {
    return (dispatch: Dispatch) => {
        dispatch(pushDailyReportRequested())

        TrackApi.setDayReport({
            token,
            date,
            emotions,
            activities
        }).then(response => {
            dispatch(pushDailyReportSucceeded())
        }).catch(error => {
            dispatch(pushDailyReportFailed(error))
        })
    }
}

function startNavigateBack() {
    return {
        type: NAVIGATE_BACK
    }
}

export function navigateBack(): any {
    return (dispatch: Dispatch, getState: () => State) => {
        dispatch(startNavigateBack())

        const state = getState()
        dispatch(fetchDailyReport(state.login.token, state.track.date))
    }
}

function startNavigateForward() {
    return {
        type: NAVIGATE_FORWARD
    }
}

export function navigateForward(): any {
    return (dispatch: Dispatch, getState: () => State) => {
        dispatch(startNavigateForward())

        const state = getState()
        dispatch(fetchDailyReport(state.login.token, state.track.date))
    }
}
