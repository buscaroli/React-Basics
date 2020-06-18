export default (state = [], action) => {
    // IF ELSE STATEMENTS ARE NOT COMMON WITHIN REDUCERS
    // if (action.type === 'FETCH_POSTS') {
    //     return action.payload
    // }

    // return state

    // WITHIN REDUCERS IT'S COMMON TO USE SWITCH STATEMENTS
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload
        default:
            return state
    }
}