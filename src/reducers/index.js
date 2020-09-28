import {combineReducers} from 'redux'
import counterReducer from './counterReducer'
import articlesReducer from './articlesReducer'
import filtersReducer from './filtersReducer'
import commentsReducer from './commentsReducer'
import {connectRouter} from "connected-react-router";

export default (history) => combineReducers({
    count: counterReducer,
    articles: articlesReducer,
    comments: commentsReducer,
    filters: filtersReducer,
    router: connectRouter(history)
})

