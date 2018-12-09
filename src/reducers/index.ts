import { combineReducers } from "redux";
import DailyReportReducer from './DailyReport'
import AnalyzeReducer from './Analyze'
import LoginReducer from './Login'

export default combineReducers({
    dailyReport: DailyReportReducer,
    analyze: AnalyzeReducer,
    login: LoginReducer
})
