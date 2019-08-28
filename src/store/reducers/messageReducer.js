import { SET_MESSAGE } from '../actions/actionTypes'

const INITIAL_STATE = {
    title: '',
    text: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                title: action.payload.title,
                text: action.payload.text
            } 
        default:
            return state
    }
}

export default reducer