interface LoginResponse {
    token: string
}

export async function login(email: string, password: string): Promise<LoginResponse> {
    const requestUri = 'http://localhost:3001/login'

    const response = await fetch(requestUri, {
        method: 'POST',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
            email,
            password
        })
    })

    const responseData = await response.json()

    if(!response.ok) {
        throw new Error(responseData.error)
    }

    return responseData
}
