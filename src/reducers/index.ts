import { combineReducers } from "redux";
import TrackReducer, { TrackState } from './Track'
import AnalyzeReducer, { AnalyzeState } from './Analyze'
import AccountReducer, { AccountState } from './Account'
import LoginReducer, { LoginState } from './Login'
import GoalsReducer, { GoalsState } from "./Goals";

export interface State {
    login: LoginState,
    track: TrackState,
    account: AccountState,
    analyze: AnalyzeState,
    goals: GoalsState
}

export default combineReducers({
    track: TrackReducer,
    analyze: AnalyzeReducer,
    account: AccountReducer,
    login: LoginReducer,
    goals: GoalsReducer
})
