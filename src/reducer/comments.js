import { normalizedComments } from "../fixtures";

const defaultComments = normalizedComments.reduce((acc, comment) => {
    return {
        ...acc,
        [comment.id]: comment
    }
}, {})

export default (comments = defaultComments, action) => {
    const { type } = action

    switch (type) {
        default:
            return comments
    }
}