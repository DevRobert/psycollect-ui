import { combineReducers } from "redux";
import TrackReducer, { TrackState } from './Track'
import AnalyzeReducer, { AnalyzeState } from './Analyze'
import LoginReducer, { LoginState } from './Login'

export interface State {
    login: LoginState,
    track: TrackState,
    analyze: AnalyzeState
}

export default combineReducers({
    track: TrackReducer,
    analyze: AnalyzeReducer,
    login: LoginReducer
})
