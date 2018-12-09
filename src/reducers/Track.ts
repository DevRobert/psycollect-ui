import { AnyAction } from "redux";
import { NAVIGATE_BACK, NAVIGATE_FORWARD, FETCH_DAILY_REPORT_REQUESTED, FETCH_DAILY_REPORT_SUCCEEDED, FETCH_DAILY_REPORT_FAILED, PUSH_DAILY_REPORT_REQUESTED, PUSH_DAILY_REPORT_FAILED, PUSH_DAILY_REPORT_SUCCEEDED } from "../actions/Track";

export interface TrackState {
    date: string,
    info: string,
    error: string,
    emotions: {name: string, value: number}[],
    activities: {name: string, value: number}[]
}

const now = new Date()

// get 0000-00-00 format respective to local timezone
const nowString = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString().substr(0, "0000-00-00".length)

const defaultState: TrackState = {
    date: nowString,
    info: '',
    error: '',
    emotions: [],
    activities: []
}

export default (state: TrackState = defaultState, action: AnyAction): TrackState => {
    const date = new Date(state.date)

    switch(action.type) {
        case FETCH_DAILY_REPORT_REQUESTED:
            return {
                ...state,
                info: "Loading daily report...",
                error: ""
            }
        
        case FETCH_DAILY_REPORT_SUCCEEDED:
            return {
                ...state,
                info: "",
                error: "",
                emotions: Object.keys(action.emotions).map(name => {
                    return {
                        name,
                        value: action.emotions[name]
                    }
                }),
                activities: Object.keys(action.activities).map(name => {
                    return {
                        name,
                        value: action.activities[name]
                    }
                })
            }

        case FETCH_DAILY_REPORT_FAILED:
            return {
                ...state,
                info: "",
                error: action.error.message
            }

        case PUSH_DAILY_REPORT_REQUESTED:
            return {
                ...state,
                info: "Saving daily report...",
                error: ""
            }

        case PUSH_DAILY_REPORT_SUCCEEDED:
            return {
                ...state,
                info: "",
                error: ""
            }
        
        case PUSH_DAILY_REPORT_FAILED:
            return {
                ...state,
                info: "",
                error: action.error.message
            }

        case NAVIGATE_BACK:
            date.setDate(date.getDate() - 1)

            return {
                ...state,
                date: date.toISOString().substr(0, "0000-00-00".length)
            }

        case NAVIGATE_FORWARD:
            date.setDate(date.getDate() + 1)

            return {
                ...state,
                date: date.toISOString().substr(0, "0000-00-00".length)
            }

        default:
            return state
    }
}
