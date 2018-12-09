import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchDailyReport, navigateBack, navigateForward } from "../actions/Track";
import { State } from "../reducers";
import TrackPage from "../components/TrackPage";

const mapStateToProps = (state: State) => {
    return {
        token: state.login.token,
        info: state.track.info,
        error: state.track.error,
        date: state.track.date,
        emotions: state.track.emotions,
        activities: state.track.activities
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchReport: (token: string, date: string) => {
            dispatch(fetchDailyReport(token, date))
        },
        navigateBack: () => {
            dispatch(navigateBack())
        },
        navigateForward: () => {
            dispatch(navigateForward())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackPage)
