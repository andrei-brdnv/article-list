import {
    ADD_COMMENT,
    LOAD_ARTICLE_COMMENTS,
    SUCCESS,
    START,
    LOAD_COMMENTS_FOR_PAGE
} from '../types'
import {arrToMap} from '../utils'
import {Map, OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerRecord = Record({
    entities: new OrderedMap({}),
    pagination: new Map({}),
    total: null
})

export default (state = new ReducerRecord(), action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return state.setIn(
                ['entities', randomId],
                new CommentRecord({...payload.comment, id: randomId})
            )

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

        case LOAD_COMMENTS_FOR_PAGE + START:
            return state.setIn(['pagination', payload.page, 'loading'], true)

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return state
                .set('total', response.total)
                .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
                .setIn(
                    ['pagination', payload.page, 'ids'],
                    response.records.map((comment) => comment.id)
                )
                .setIn(['pagination', payload.page, 'loading'], false)

        default:
            return state
    }
}