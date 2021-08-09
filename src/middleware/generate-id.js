import { v1 as uuidv1 } from "uuid";

export default (store) => (next) => (action) => {
    if (!action.generateId) return next(action)
    next({
        ...action,
        randomId: uuidv1()
    })
}