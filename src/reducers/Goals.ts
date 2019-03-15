import { AnyAction } from "redux";
import { FETCH_GOALS_REQUESTED, FETCH_GOALS_FAILED, FETCH_GOALS_SUCCEEDED, CHANGE_GOAL_CURRENT_STATE, CHANGE_GOAL_DESIRED_STATE, CHANGE_GOAL_ACTIONS, SAVE_GOALS_REQUESTED, SAVE_GOALS_SUCCEEDED, SAVE_GOALS_FAILED } from "../actions/Goals";
import { stat } from "fs";

export interface GoalsState {
    period: string,
    info: string,
    error: string,
    goals: {
        name: string,
        description: string,
        currentState: string,
        desiredState: string,
        actions: string
    }[]
}

const defaultState: GoalsState = {
    period: "",
    info: "",
    error: "",
    goals: [
        {
            name: "Goal 1",
            description: "Description of goal 1",
            currentState: "Current state",
            desiredState: "Desired state",
            actions: "Actions"
        },
        {
            name: "Goal 2",
            description: "Description of goal 2",
            currentState: "Current state 222",
            desiredState: "Desired state 2",
            actions: "Actions 2"
        }
    ]
}

export default (state: GoalsState = defaultState, action: AnyAction): GoalsState => {
    switch(action.type) {
        case FETCH_GOALS_REQUESTED:
            return {
                ...state,
                info: "Loading goals...",
                error: "",
                period: "",
                goals: []
            }

        case FETCH_GOALS_SUCCEEDED:
            return {
                ...state,
                info: "Goals loaded.",
                error: "",
                period: action.period,
                goals: action.goals
            }

        case FETCH_GOALS_FAILED:
            return {
                ...state,
                info: "",
                error: action.error.message
            }

        case CHANGE_GOAL_CURRENT_STATE:
            return {
                ...state,
                goals: state.goals.map(goal => {
                    if(goal.name === action.goalName) {
                        return {
                            ...goal,
                            currentState: action.currentState
                        }
                    }

                    return goal
                })
            }

        case CHANGE_GOAL_DESIRED_STATE:
            return {
                ...state,
                goals: state.goals.map(goal => {
                    if(goal.name === action.goalName) {
                        return {
                            ...goal,
                            desiredState: action.desiredState
                        }
                    }

                    return goal
                })
            }

        case CHANGE_GOAL_ACTIONS:
            return {
                ...state,
                goals: state.goals.map(goal => {
                    if(goal.name === action.goalName) {
                        return {
                            ...goal,
                            actions: action.actions
                        }
                    }

                    return goal
                })
            }

        case SAVE_GOALS_REQUESTED:
            return {
                ...state,
                info: "Saving goals...",
                error: ""
            }

        case SAVE_GOALS_SUCCEEDED:
            return {
                ...state,
                info: "Goals saved.",
                error: ""
            }

        case SAVE_GOALS_FAILED:
            return {
                ...state,
                info: "",
                error: action.error.message
            }

        default:
            return state
    }
}
