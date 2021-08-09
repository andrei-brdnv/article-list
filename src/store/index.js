import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer"
import logger from "../middleware/logger";
import generateId from "../middleware/generate-id"
import api from "../middleware/api"
import thunk from "redux-thunk";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk,
        generateId,
        api,
        logger
    ),
);

const store = createStore(reducer, enhancer)

export default store