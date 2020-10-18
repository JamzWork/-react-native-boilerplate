import {  SPINNER_ON, SPINNER_OFF } from '../Utils/ReduxConstants'

// A basic action to show toggling of spinner
// we can perfrom async operations here like data fetching and then update the state of the app

export const SpinnerActions = () => {
    return async function (dispatch) {
        dispatch({ type: SPINNER_ON })
        setTimeout(()=>{
            dispatch({type: SPINNER_OFF});
        },2000)
    }
}
