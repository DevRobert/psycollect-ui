import { State } from "../reducers";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import AnalyzePage from "../components/AnalyzePage";
import { fetchReport } from "../actions/Analyze";

const mapStateToProps = (state: State) => {
    return {
        info: state.analyze.info,
        error: state.analyze.error,
        data: state.analyze.data
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchReport: () => {
            dispatch(fetchReport() as any)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnalyzePage)
