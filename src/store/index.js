import {createStore, applyMiddleware, compose} from "redux";
import reducer from "../reducers";
import logger from "../middleware/logger";
import generateId from "../middleware/generate-id";
import api from "../middleware/api";
import thunk from "redux-thunk";
import history from "../history";
import {routerMiddleware} from "connected-react-router";

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        routerMiddleware(history),
        thunk,
        generateId,
        api,
        logger
    ),
    // other store enhancers if any
);
const store = createStore(reducer(history), enhancer);

export default store