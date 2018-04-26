const LONGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

export function auth(state={isAuth:false,user:'admin'},action) {
    switch (action.type) {
        case LONGIN:
            return {...state,isAuth:true}
            break;
        case LOGOUT:
            return {...state,isAuth:false}
            break;
        default:
            return state
    }
}

export function login() {
    return {type:LONGIN}
}

export function logout() {
    return {type:LOGOUT}
}