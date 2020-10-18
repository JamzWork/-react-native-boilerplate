import { SPINNER_ON, SPINNER_OFF } from "../Utils/ReduxConstants"
 
// Initial state of the application
const initialState = {
    Spinner_Visibility: false
}

// Reducer that changes the state based on the action
export const LoadingSpinner = (state = initialState, action) => {
    switch (action.type) {
        case SPINNER_ON: return {
            Spinner_Visibility: true
        };
        case SPINNER_OFF: return {
            Spinner_Visibility: false
        };
        default: return state;
    }
}