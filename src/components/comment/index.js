import React, {Component} from "react";
import {connect} from "react-redux";
import {createCommentSelector} from "../../selectors";

class Comment extends Component {
    render() {
        const {user, text} = this.props.comment

        return (
            <div className="my-3">
                <h6>{user}</h6>
                <p className="m-0 text-justify">{text}</p>
            </div>
        )
    }
}

const initMapStateToProps = () => {
    const commentSelector = createCommentSelector()
    return (store, ownProps) => {
        return {
            comment: commentSelector(store, ownProps)
        }
    }
}

export default connect(initMapStateToProps)(Comment)