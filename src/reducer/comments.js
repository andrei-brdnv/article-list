import { normalizedComments } from "../fixtures";
import { arrToMap } from "./utils";
import { ADD_COMMENT } from "../constants";

export default (state = arrToMap(normalizedComments), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return state.set(randomId, { ...payload.comment, id: randomId })
        default:
            return state
    }
}

/*
export default (state = arrToMap(normalizedComments), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return {
                ...state,
                [randomId]: {
                    ...payload.comment,
                    id: randomId
                }
            }
        default:
            return state
    }
}*/
