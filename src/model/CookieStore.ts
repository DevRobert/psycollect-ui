import * as BrowserCookies from 'browser-cookies'

const TokenCookieKey = 'PsycollectAuthenticationToken'
const EmailCookieKey = 'PsycollectEmail'

// Token

export function readTokenFromCookie() {
    return BrowserCookies.get(TokenCookieKey) || ""
}

export function writeTokenToCookie(token: string) {
    BrowserCookies.set(TokenCookieKey, token, { expires: 0, path: "/"})
}

export function deleteTokenFromCookie() {
    BrowserCookies.erase(TokenCookieKey)
}

// Email

export function readEmailFromCookie() {
    return BrowserCookies.get(EmailCookieKey) || ""
}

export function writeEmailToCookie(email: string) {
    BrowserCookies.set(EmailCookieKey, email, { expires: 30, path: "/"}) // expires after 30 days
}

export function deleteEmailFromCookie() {
    BrowserCookies.erase(EmailCookieKey)
}
