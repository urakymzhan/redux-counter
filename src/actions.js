
// We have 2 action creators in our app
// One increments and ohter decrements
export const increment = count => {
    return {
        type: 'INCREMENT',
        payload: count
    }
}

export const decrement = count => {
    return {
        type: 'DECREMENT',
        payload: count
    }
}