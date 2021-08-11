import React, { Component } from "react";
import toggleOpen from "../../decorators/toggleOpen";
import Comment from "../comment";
import PropTypes from "prop-types"
import CommentForm from "../comment-form";
import { connect } from "react-redux";
import { loadArticleComments } from "../../ac";
import Loader from "../loader";
import { Consumer as AuthConsumer } from "../../context/auth";

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        //from decorator
        isOpen: PropTypes.bool,
        toggleOpenItem: PropTypes.func.isRequired
    }

    componentDidUpdate(oldProps) {
        const { isOpen, article, loadArticleComments } = this.props
        if (
            isOpen &&
            !oldProps.isOpen &&
            !article.commentsLoading &&
            !article.commentsLoaded
        ) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const { isOpen, toggleOpenItem } = this.props

        return (
            <div>
                <button onClick={toggleOpenItem}>
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                <AuthConsumer>
                    {(contextValue) => <h3>{contextValue.contextUserName}</h3>}
                </AuthConsumer>
                {isOpen ? this.getBody() : null}
            </div>
        )
    }

    getBody() {
        const {
            article: {
                comments = [],
                id,
                commentsLoading,
                commentsLoaded
            },
            isOpen
        } = this.props

        if (!isOpen) return null;
        if (commentsLoading) return <Loader />
        if (!commentsLoaded) return null

        const body = comments.length ? (
            <ul>
                {comments.map((id) => (
                    <li key={id}>
                        <Comment id={id} />
                    </li>
                ))}
            </ul>
        ) : (
            <h3>No comments yet</h3>
        )
        return <div>
            <CommentForm articleId={id}/>
            {body}
        </div>
    }
}

export default connect(
    null,
    { loadArticleComments }
)(toggleOpen(CommentList));