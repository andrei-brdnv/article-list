import React, { Component } from "react";

class Comment extends Component {
    render() {
        const { user, text } = this.props.comment

        return (
            <div>
                <h4>{user}</h4>
                <p>{text}</p>
            </div>
        );
    }
}

export default Comment;