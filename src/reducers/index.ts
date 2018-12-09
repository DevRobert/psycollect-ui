import { combineReducers } from "redux";
import DailyReportReducer from './DailyReport'
import AnalyzeReducer from './Analyze'
import AccountReducer from './Account'

export default combineReducers({
    dailyReport: DailyReportReducer,
    analyze: AnalyzeReducer,
    account: AccountReducer
})
