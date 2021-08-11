import { createSelector } from "reselect";

export const filtersSelector = (state) => state.filters
export const loadingSelector = (state) => state.articles.loading
export const loadedSelector = (state) => state.articles.loaded
export const articlesMapSelector = (state) => state.articles.entities
export const articlesSelector = createSelector(
    articlesMapSelector,
    (articlesMap) => articlesMap.valueSeq().toArray()
)



export const filteredArticlesSelector = createSelector(
    filtersSelector,
    articlesSelector,
    (filters, articles) => {
        const {selected, dateRange: { from, to }} = filters
        console.log('filteredArticlesSelector')
        return articles.filter(article => {
            const publishedDate = Date.parse(article.date)
            return (
                    !selected.length ||
                    selected.find((selected) => selected.value === article.id)
                ) &&
                (
                    (!from || !to || (publishedDate > from && publishedDate < to))
                )
        })
    }
)

export const commentSelector = (state) => state.comments.entities
export const idSelector = (_, ownProps) => ownProps.id

export const createCommentsSelector = () => createSelector(
    commentSelector,
    idSelector,
    (comments, id) => comments.get(id)
)

export const articleSelector = createSelector(articlesMapSelector, idSelector, (articles, id) =>
    articles.get(id)
)

export const totalCommentsSelector = (state) => state.comments.total
export const commentsPaginationSelector = (state) => state.comments.pagination
export const pageSelector = (_, props) => props.page
export const commentsPageIdsSelector = createSelector(
    commentsPaginationSelector,
    pageSelector,
    (pagination, page) => pagination.getIn([page, 'ids'])
)
export const commentsPageLoadingSelector = createSelector(
    commentsPaginationSelector,
    pageSelector,
    (pagination, page) => pagination.getIn([page, 'loading'])
)