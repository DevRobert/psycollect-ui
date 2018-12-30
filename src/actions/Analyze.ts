import { Dispatch } from "redux";
import * as AnalyzeApi from "../model/AnalyzeApi"
import { State } from "../reducers";

export const FETCH_REPORT_REQUESTED = "FETCH_REPORT_REQUESTED"
export const FETCH_REPORT_SUCCEEDED = "FETCH_REPORT_SUCCEEDED"
export const FETCH_REPORT_FAILED = "FETCH_REPORT_FAILED"

function fetchReportRequested() {
    return {
        type: FETCH_REPORT_REQUESTED
    }
}

function fetchReportSucceeded(dates: string[], emotions: {[name: string]: number[]}, activities: {[name: string]: number[]}) {
    return {
        type: FETCH_REPORT_SUCCEEDED,
        dates,
        emotions,
        activities
    }
}

function fetchReportFailed(error: Error) {
    return {
        type: FETCH_REPORT_FAILED,
        error
    }
}

export function fetchReport() {
    return (dispatch: Dispatch, getState: () => State) => {
        dispatch(fetchReportRequested())

        const state = getState()

        AnalyzeApi.getReport({
            token: state.login.token
        }).then(response => {
            dispatch(fetchReportSucceeded(response.data.dates, response.data.emotions, response.data.activities))
        }).catch(error => {
            dispatch(fetchReportFailed(error))
        })
    }
}
