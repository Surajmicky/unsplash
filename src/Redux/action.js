

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function login(credentials) {
    return { type: LOGIN, credentials };
}

export function logout() {
    return { type: LOGOUT };
}
