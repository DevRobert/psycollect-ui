import * as BrowserCookies from 'browser-cookies'

const TokenName = 'PsycollectAuthenticationToken'

export function readTokenFromCookie() {
    const token = BrowserCookies.get(TokenName)

    if(!token) {
        return ""
    }

    return token
}

export function writeTokenToCookie(token: string) {
    BrowserCookies.set(TokenName, token, { expires: 0, path: "/"})
}

export function deleteTokenFromCookie() {
    BrowserCookies.erase(TokenName)
}
