import { createSelector } from "reselect";

export const filterSelector = (state) => state.filters
export const articleSelector = (state) => state.articles
export const commentSelector = (state) => state.comments
export const idSelector = (_, ownProps) => ownProps.id

export const filteredArticlesSelector = createSelector(
    filterSelector,
    articleSelector,
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

export const createCommentsSelector = () => createSelector(
    commentSelector,
    idSelector,
    (comments, id) => comments[id]
)