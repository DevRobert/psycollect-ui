import { apiBaseUri } from "./ApiHelpers";

interface SetDayReportRequest {
    token: string,
    date: string,
    emotions: {[name: string]: number},
    activities: {[name: string]: number}
}

interface SetDayReportResponse {

}

export async function setDayReport(request: SetDayReportRequest): Promise<SetDayReportResponse> {
    const requestUri = apiBaseUri + 'tracking/' + request.date

    const response = await fetch(requestUri, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + request.token
        }),
        body: JSON.stringify({
            emotions: request.emotions,
            activities: request.activities
        })
    })

    const responseData = await response.json()

    if(!response.ok) {
        throw new Error(responseData.error)
    }

    return responseData
}

interface GetDayReportRequest {
    token: string,
    date: string
}

interface GetDayReportResponse {
    emotions: {[name: string]: number},
    activities: {[name: string]: number}
}

export async function getDayReport(request: GetDayReportRequest): Promise<GetDayReportResponse> {
    const requestUri = apiBaseUri + 'tracking/' + request.date

    const response = await fetch(requestUri, {
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + request.token
        })
    })
    
    const responseData = await response.json()

    if(!response.ok) {
        throw new Error(responseData.error)
    }

    return {
        emotions: responseData.emotions,
        activities: responseData.activities
    }
}
