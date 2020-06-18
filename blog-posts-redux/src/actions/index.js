import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'


export const fetchPosts = () => 
    async dispatch => {
        const response = await jsonPlaceholder.get('/posts')

        dispatch({
            type: 'FETCH_POSTS',
            payload: response.data
        }) 
    }


    export const fetchUser = id => async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${id}`)

        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        })
    }
    
    // REFACTORED USING CHAIN
    // export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    //     await dispatch(fetchPosts())
    //     // _.map(getState().posts, 'userId')  // lodash version of map: 
    //     //                                    // getting an array of all userId
    //     // Getting only unique Ids using lodash _.uniq and _.map functions
    //     const userIds = _.uniq(_.map(getState().posts, 'userId')) 
    //     userIds.forEach(id => dispatch(fetchUser(id)))                                   
    // }

    export const fetchPostsAndUsers = () => async (dispatch, getState) => {
        await dispatch(fetchPosts())
        const userIds = _.uniq(_.map(getState().posts, 'userId')) 
        userIds.forEach(id => dispatch(fetchUser(id)))
        _.chain(getState().posts)
            .map('userId')
            .uniq()
            .forEach(id => dispatch(fetchUser(id)))
            .value()                                                           
    }

    // ALTERNATIVE SOLUTION THAT USES MEMOIZATION via the 
    // memoize function from the lodash library.
    //
    // WE ARE MEMOIZING the fetch request in order to avoid
    // making multiple request for the same user. With memoization
    // the user is saved in an hash table. Before any request, the
    // function look in the hash table first, if the user is found
    // the corresponding value is used, if it's not found the request
    // is made and the user is saved as a new key in the hash table
    // with its corresponding value. 
    // PLEASE NOTE that this solution won't work in case there is a 
    // change in the users of the DB you are calling as the old values
    // will be kept. In that case you might need to run a non memoized
    // version of the function every time the DB goes through a major
    // change in its users.
    //
// export const fetchUser = (id) => 
// dispatch => {
//     _fetchUser(id, dispatch)
// }
//
// export const fetchUser = (id) => 
//     dispatch => {
//         _fetchUser(id, dispatch)
//     }

//     const _fetchUser = _.memoize(async (id, dispatch) => {
//         const response = await jsonPlaceholder.get(`/users/${id}`)

//         dispatch({
//             type: 'FETCH_USER',
//             payload: response.data
//         })
//     })
