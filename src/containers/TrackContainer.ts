import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchDailyReport, navigateBack, navigateForward, setEmotionValue, setActivityValue } from "../actions/Track";
import { State } from "../reducers";
import TrackPage from "../components/TrackPage";

const mapStateToProps = (state: State) => {
    return {
        info: state.track.info,
        error: state.track.error,
        date: state.track.date,
        emotions: state.track.emotions,
        activities: state.track.activities
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchReport: () => {
            dispatch(fetchDailyReport())
        },
        navigateBack: () => {
            dispatch(navigateBack())
        },
        navigateForward: () => {
            dispatch(navigateForward())
        },
        setEmotionValue: (name: string, value: number): void => {
            dispatch(setEmotionValue(name, value))
        },
        setActivityValue: (name: string, value: number): void => {
            dispatch(setActivityValue(name, value))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackPage)
