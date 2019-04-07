import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import { REGISTER_USER } from './Actions'


function user(state = [], action) {
    switch (action.type) {
        case REGISTER_USER:
            return [
                ...state,
                {
                    login: action.text,
                    registered: true
                }
            ]
        default:
            return state
    }
}

const izberg = combineReducers({
    form: formReducer,
    user
})

export default izberg