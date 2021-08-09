import React, { Component } from "react";
import toggleOpen from "../../decorators/toggleOpen";
import Comment from "../comment";
import PropTypes from "prop-types"
import CommentForm from "../comment-form";

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        //from decorator
        isOpen: PropTypes.bool,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        const { isOpen, toggleOpenItem } = this.props

        return (
            <div>
                <button onClick={toggleOpenItem}>
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                {isOpen ? this.getBody() : null}
            </div>
        )
    }

    getBody() {
        const {article: { comments = [], id }} = this.props

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

export default toggleOpen(CommentList);