import React, {Component} from "react";
import Comment from "../comment";
import CommentForm from "../comment-form";
import toggleOpen from "../../decorators/toggleOpen";
import {connect} from "react-redux";
import Loader from "../common/loader";
import {loadArticleComments} from "../../actions";
import i18n from "../i18n";

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {isOpen, article, loadArticleComments} = this.props
        if (
            isOpen &&
            !prevProps.isOpen &&
            !article.commentsLoading &&
            !article.commentsLoaded
        ) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {isOpen, toggleOpenItem, t} = this.props

        return (
            <div className="d-flex flex-column justify-content-center align-items-center">
                <button className="btn btn-primary" onClick={toggleOpenItem}>
                    {t(isOpen ? 'hide comments' : 'show comments')}
                </button>
                {this.body}
            </div>
        )
    }

    get body() {
        const {
            article: {
                comments = [],
                id: articleId,
                commentsLoading,
                commentsLoaded
            },
            isOpen,
            t
        } = this.props

        if (!isOpen) return null;
        if (commentsLoading) return <Loader />
        if (!commentsLoaded) return null

        const body = comments.length ? (
                comments.map(id => (
                    <div key={id}>
                        <Comment id={id} />
                    </div>
                ))
        ) : (
            <h5 className="mb-3 p-3 text-center">{t('no comments yet')}</h5>
        )
        return (
            <div className="d-flex flex-column w-100">
                <CommentForm articleId={articleId}/>
                {body}
            </div>
        )
    }
}

export default connect(
    null,
    {loadArticleComments}
)(toggleOpen(i18n(CommentList)))