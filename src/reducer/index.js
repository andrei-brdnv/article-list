import { combineReducers } from "redux";
import counterReducer from "./counter";
import articlesReducer from "./articles";
import filtersReducer from "./filters";
import commentsReducer from "./comments";
import { connectRouter } from "connected-react-router";

export default (history) => combineReducers({
    count: counterReducer,
    articles: articlesReducer,
    comments: commentsReducer,
    filters: filtersReducer,
    router: connectRouter(history)
})