const ADD_GUN = 'addGun'
const REDUCE_GUN = 'reduceGun'

export function counter(state = 0, action) {
    switch (action.type) {
        case ADD_GUN:
            return state + 1
        case REDUCE_GUN:
            return state - 1
        default:
            return 10
    }
}

export function addGun() { 
    return { type: ADD_GUN }
}

export function reduceGun() { 
    return { type: REDUCE_GUN}
}