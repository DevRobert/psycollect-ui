import { combineReducers } from "redux";
import TrackReducer from './Track'
import AnalyzeReducer from './Analyze'
import LoginReducer from './Login'
import { LoginState } from './Login'
import { TrackState } from './Track'

export interface State {
    login: LoginState,
    track: TrackState
}

export default combineReducers({
    track: TrackReducer,
    analyze: AnalyzeReducer,
    login: LoginReducer
})
