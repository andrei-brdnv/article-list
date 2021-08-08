import React, { Component } from "react";
import { connect } from "react-redux";
import { createCommentsSelector } from "../../selectors";

class Comment extends Component {
    render() {
        const { user, text } = this.props.comment
        console.log('render comments')
        return (
            <div>
                <h4>{user}</h4>
                <p>{text}</p>
            </div>
        );
    }
}



const initMapStateToProps = () => {
    const commentsSelector = createCommentsSelector()

    return (state, ownProps) => ({
        comment: commentsSelector(state, ownProps)
    })
}

export default connect(
    initMapStateToProps
)(Comment);