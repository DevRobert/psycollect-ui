import { Dispatch } from "redux"
import * as GoalsApi from "../model/GoalsApi"
import { State } from "../reducers"

// Fetch goals

export const FETCH_GOALS_REQUESTED = "FETCH_GOALS_REQUESTED"
export const FETCH_GOALS_SUCCEEDED = "FETCH_GOALS_SUCCEEDED"
export const FETCH_GOALS_FAILED = "FETCH_GOALS_FAILED"

export const CHANGE_GOAL_CURRENT_STATE = "CHANGE_GOAL_CURRENT_STATE"
export const CHANGE_GOAL_DESIRED_STATE = "CHANGE_GOAL_DESIRED_STATE"
export const CHANGE_GOAL_ACTIONS = "CHANGE_GOAL_ACTIONS"

export const SAVE_GOALS_REQUESTED = "SAVE_GOALS_REQUESTED"
export const SAVE_GOALS_SUCCEEDED = "SAVE_GOALS_SUCCEEDED"
export const SAVE_GOALS_FAILED = "SAVE_GOALS_FAILED"

function fetchGoalsRequested() {
    return {
        type: FETCH_GOALS_REQUESTED
    }
}

function fetchGoalsSucceeded(period: string, goals: {name: string, description: string, currentState: string, desiredState: string, actions: string}[]) {
    return {
        type: FETCH_GOALS_SUCCEEDED,
        period,
        goals
    }
}

function fetchGoalsFailed(error: Error) {
    return {
        type: FETCH_GOALS_FAILED,
        error
    }
}

export function fetchGoals() {
    return (dispatch: Dispatch, getState: () => State) => {
        dispatch(fetchGoalsRequested())

        const state = getState()

        GoalsApi.getGoals({
            token: state.login.token
        }).then(response => {
            const goals = []

            for(let goalName of Object.getOwnPropertyNames(response.goalPlans)) {
                const goalPlan = response.goalPlans[goalName]

                goals.push({
                    name: goalName,
                    description: goalPlan.description,
                    currentState: goalPlan.currentState,
                    desiredState: goalPlan.desiredState,
                    actions: goalPlan.actions
                })
            }

            dispatch(fetchGoalsSucceeded(response.period, goals))
        }).catch(error => {
            dispatch(fetchGoalsFailed(error))
        })
    }
}

// Change goal

export function changeGoalCurrentState(goalName: string, currentState: string) {
    return {
        type: CHANGE_GOAL_CURRENT_STATE,
        goalName,
        currentState
    }
}

export function changeGoalDesiredState(goalName: string, desiredState: string) {
    return {
        type: CHANGE_GOAL_DESIRED_STATE,
        goalName,
        desiredState
    }
}

export function changeGoalActions(goalName: string, actions: string) {
    return {
        type: CHANGE_GOAL_ACTIONS,
        goalName,
        actions
    }
}

// Save goals

function saveGoalsRequested() {
    return {
        type: SAVE_GOALS_REQUESTED
    }
}

function saveGoalsSucceeded() {
    return {
        type: SAVE_GOALS_SUCCEEDED
    }
}

function saveGoalsFailed(error: Error) {
    return {
        type: SAVE_GOALS_FAILED,
        error
    }
}

export function saveGoals() {
    return (dispatch: Dispatch, getState: () => State) => {
        dispatch(saveGoalsRequested())

        const state = getState()

        const goalPlans: any = {}

        state.goals.goals.forEach(goal => {
            goalPlans[goal.name] = {
                currentState: goal.currentState,
                desiredState: goal.desiredState,
                actions: goal.actions
            }
        })

        const request: GoalsApi.SetGoalsRequest = {
            token: state.login.token,
            goalPlans
        }

        GoalsApi.setGoals(request).then(() => {
            dispatch(saveGoalsSucceeded())
        }).catch(error => {
            dispatch(saveGoalsFailed(error))
        })
    }
}
