import { AnyAction } from "redux";
import { FETCH_REPORT_REQUESTED, FETCH_REPORT_SUCCEEDED, FETCH_REPORT_FAILED } from "../actions/Analyze";

export interface AnalyzeState {
    info: string,
    error: string,
    data: {
        dates: string[],
        emotions: {[name: string]: number[]},
        activities: {[name: string]: number[]}
    }|null
}

const defaultState: AnalyzeState = {
    info: "",
    error: "",
    data: null
}

export default (state: AnalyzeState = defaultState, action: AnyAction): AnalyzeState => {
    switch(action.type) {
        case FETCH_REPORT_REQUESTED:
            return {
                ...state,
                info: "Loading report...",
                error: "",
                data: null
            }

        case FETCH_REPORT_SUCCEEDED:
            return {
                ...state,
                info: "",
                error: "",
                data: {
                    dates: action.dates,
                    emotions: action.emotions,
                    activities: action.activities
                }
            }

        case FETCH_REPORT_FAILED:
            return {
                ...state,
                info: "",
                error: action.error.message
            }

        default:
            return state
    }
}
