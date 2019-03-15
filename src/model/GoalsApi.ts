import { apiBaseUri } from "./ApiHelpers";

export interface GetGoalsRequest {
    token: string
}

export interface GetGoalsResponse {
    period: string,
    goalPlans: {[name: string]: GetGoalsResponse_GoalPlan}
}

export interface GetGoalsResponse_GoalPlan {
    description: string,
        currentState: string,
        desiredState: string,
        actions: string
}

export async function getGoals(request: GetGoalsRequest): Promise<GetGoalsResponse> {
    const requestUri = apiBaseUri + "goals"

    const response = await fetch(requestUri, {
        method: "GET",
        headers: new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + request.token
        })
    })

    const responseData = await response.json()

    if(!response.ok) {
        throw new Error(responseData.error)
    }

    const result =  {
        period: responseData.period,
        goalPlans: responseData.goalPlans
    }

    for(let goalName of Object.getOwnPropertyNames(result.goalPlans)) {
        const goalPlan = result.goalPlans[goalName]

        goalPlan.currentState = goalPlan.currentState || ""
        goalPlan.desiredState = goalPlan.desiredState || ""
        goalPlan.actions = goalPlan.actions || ""
    }

    return result
}

export interface SetGoalsRequest {
    token: string,
    goalPlans: {[name: string]: {
        description: string,
        currentState: string|undefined,
        desiredState: string|undefined,
        actions: string|undefined
    }}
}

export interface SetGoalsResponse {

}

export async function setGoals(request: SetGoalsRequest): Promise<SetGoalsResponse> {
    const requestUri = apiBaseUri + "goals"

    for(let goalName of Object.getOwnPropertyNames(request.goalPlans)) {
        const goalPlan = request.goalPlans[goalName]

        goalPlan.currentState = goalPlan.currentState || undefined
        goalPlan.desiredState = goalPlan.desiredState || undefined
        goalPlan.actions = goalPlan.actions || undefined
    }

    console.log(JSON.stringify(request))

    const response = await fetch(requestUri, {
        method: "PUT",
        headers: new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": "Bearer " + request.token
        }),
        body: JSON.stringify(request)
    })

    const responseData = await response.json()

    if(!response.ok) {
        throw new Error(responseData.error)
    }
    return {}
}
