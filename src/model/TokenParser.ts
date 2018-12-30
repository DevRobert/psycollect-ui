export interface Token {
    email: string,
    admin: boolean
}

export function parseToken(token: string): Token {
    const payloadBase64 = token.split(".")[1]
    const payloadJson = atob(payloadBase64)
    return JSON.parse(payloadJson)
}
