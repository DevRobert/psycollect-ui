import { State } from "../reducers";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import GoalsPage from "../components/GoalsPage";
import { fetchGoals, saveGoals, changeGoalCurrentState, changeGoalDesiredState, changeGoalActions } from "../actions/Goals";

const mapStateToProps = (state: State) => {
    return {
        info: state.goals.info,
        error: state.goals.error,
        period: state.goals.period,
        goals: state.goals.goals
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        fetchGoals: () => {
            dispatch(fetchGoals() as any)
        },
        changeGoalCurrentState: (goalName: string, currentState: string) => {
            dispatch(changeGoalCurrentState(goalName, currentState))
        },
        changeGoalDesiredState: (goalName: string, desiredState: string) => {
            dispatch(changeGoalDesiredState(goalName, desiredState))
        },
        changeGoalActions: (goalName: string, actions: string) => {
            dispatch(changeGoalActions(goalName, actions))
        },
        saveGoals: () => {
            dispatch(saveGoals() as any)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GoalsPage)
