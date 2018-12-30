import { Dispatch } from "redux";
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

export const SET_EMOTION_VALUE = 'SET_EMOTION_VALUE'
export const SET_ACTIVITY_VALUE = 'SET_ACTIVITY_VALUE'

// FetchDailyReport

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

export function fetchDailyReport() {
    return (dispatch: Dispatch, getState: () => State) => {
        dispatch(fetchDailyReportRequested())

        const state = getState()

        TrackApi.getDayReport({
            token: state.login.token,
            date: state.track.date
        }).then(response => {
            dispatch(fetchDailyReportSuceeded(response.emotions, response.activities))
        }).catch(error => {
            dispatch(fetchDailyReportFailed(error))
        })
    }
}

// PushDailyReport

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

function pushDailyReport() {
    return (dispatch: Dispatch, getState: () => State) => {
        dispatch(pushDailyReportRequested())

        const state = getState()

        let emotions: {[name: string]: number} = {}

        state.track.emotions.forEach(emotion => {
            emotions[emotion.name] = emotion.value
        })

        let activities: {[name: string]: number} = {}

        state.track.activities.forEach(activity => {
            activities[activity.name] = activity.value
        })

        TrackApi.setDayReport({
            token: state.login.token,
            date: state.track.date,
            emotions,
            activities
        }).then(response => {
            dispatch(pushDailyReportSucceeded())
        }).catch(error => {
            dispatch(pushDailyReportFailed(error))
        })
    }
}

// SetEmotionValue

export function setEmotionValue(name: string, value: number) {
    return (dispatch: Dispatch, getState: () => State) => {
        dispatch({
            type: SET_EMOTION_VALUE,
            name,
            value
        })

        dispatch(pushDailyReport() as any)
    }
}

// SetActivityValue

export function setActivityValue(name: string, value: number) {
    return (dispatch: Dispatch, getState: () => State) => {
        dispatch({
            type: SET_ACTIVITY_VALUE,
            name,
            value
        })

        dispatch(pushDailyReport() as any)
    }
}

// NavigateBack

export function navigateBack() {
    return (dispatch: Dispatch) => {
        dispatch({
            type: NAVIGATE_BACK
        })

        dispatch(fetchDailyReport() as any)
    }
}

// NavigateForward

export function navigateForward() {
    return (dispatch: Dispatch) => {
        dispatch({
            type: NAVIGATE_FORWARD
        })

        dispatch(fetchDailyReport() as any)
    }
}
