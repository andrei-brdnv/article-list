import {COUNTER_RESET, DECREMENT, INCREMENT} from '../types'

export default function (initialState = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return initialState + 1

        case DECREMENT:
            return initialState - 1

        case COUNTER_RESET:
            return initialState = 0

        default:
            return initialState
    }
}