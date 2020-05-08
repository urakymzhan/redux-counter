
// our inital state is count = 0
const initalState = {
    count: 0
}

// For this app we have only 1 reducer that checks for all types of actions
// Depending on action type, it will update the state (here count)
const myReducer = (state = initalState, action) => {
    switch(action.type) {
        case "INCREMENT":
            return { count: action.payload + 1 }
        case "DECREMENT":
            return { count: action.payload - 1 }
        default:
            return state
    }

}
export default myReducer;