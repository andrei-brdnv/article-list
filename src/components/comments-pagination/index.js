import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import Comment from "../comment";
import Loader from "../loader";
import { checkAndLoadCommentsForPage } from "../../ac";
import {
    totalCommentsSelector,
    commentsPageLoadingSelector,
    commentsPageIdsSelector
} from "../../selectors";
import { COMMENTS_PER_PAGE } from "../../constants"

class CommentsPagination extends Component {
    componentDidMount() {
        this.props.checkAndLoadCommentsForPage(this.props.page)
    }

    componentDidUpdate() {
        this.props.checkAndLoadCommentsForPage(this.props.page)
    }

    render() {
        const { total, page } = this.props
        if (!total) return <Loader />
        if (page > total / COMMENTS_PER_PAGE + 1) {
            return <Redirect to={`/comments/${Math.floor(total / COMMENTS_PER_PAGE) + 1}`} />
        }

        return (
            <div>
                {this.getCommentItems()}
                {this.getPaginator()}
            </div>
        )
    }

    getCommentItems() {
        const { comments, loading } = this.props
        if (loading || !comments) return <Loader />
        const commentItems = comments.map((id) => (
            <li key={id}>
                <Comment id={id} />
            </li>
        ))
        return <ul>{commentItems}</ul>
    }

    getPaginator() {
        const { total } = this.props
        const items = new Array(Math.floor((total - 1) / COMMENTS_PER_PAGE) + 1)
            .fill(null)
            .map((_, i) => (
                <li key={i}>
                    <NavLink to={`/comments/${i + 1}`} activeStyle={{ color: 'red' }}>
                        {i + 1}
                    </NavLink>
                </li>
            ))
        return <ul>{items}</ul>
    }
}

export default connect(
    (state, props) => {
        return {
            total: totalCommentsSelector(state),
            loading: commentsPageLoadingSelector(state, props),
            comments: commentsPageIdsSelector(state, props)
        }
    },
    { checkAndLoadCommentsForPage }
)(CommentsPagination)
