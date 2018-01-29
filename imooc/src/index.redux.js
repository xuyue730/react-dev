const addGun = 'addGun'
const reduceGun = 'reduceGun'

function counter(state = 0, action) {
    switch (action.type) {
        case addGun:
            return state + 1
        case reduceGun:
            return state - 1
        default:
            return 10
    }
}

export function addGun() { 
    return { type: addGun }
}

export function reduceGun() { 
    return { type: reduceGun}
}