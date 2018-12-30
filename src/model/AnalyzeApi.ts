import { apiBaseUri } from "./ApiHelpers";

export interface GetReportRequest {
    token: string
}

export interface GetReportResponse {
    data: {
        dates: string[],
        emotions: {[name: string]: number[]},
        activities: {[name: string]: number[]}
    }
}

export async function getReport(request: GetReportRequest): Promise<GetReportResponse> {
    const requestUri = apiBaseUri + 'analyze/'

    const response = await fetch(requestUri, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + request.token
        })
    })

    const responseData = await response.json()

    if(!response.ok) {
        throw new Error(responseData.error)
    }

    return responseData
}
