import React, { PureComponent } from "react";
import CommentList from "../comment-list";
import { connect } from "react-redux";
import { deleteArticle } from "../../ac";

class Article extends PureComponent {
    state = {
        error: null
    }

    componentDidCatch(error) {
        this.setState({error})
    }

    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    handleDelete = () => {
        this.props.deleteArticle(this.props.article.id)
    }

    render() {
        const { article: {title, text, comments}, isOpen } = this.props

        console.log("render Article")

        return (
            <div>
                <h3>
                    {title}
                    <button onClick={this.toggleOpen}>{ isOpen ? "close" : "open" }</button>
                    <button onClick={this.handleDelete}>Delete</button>
                </h3>
                {
                    isOpen ?
                    <section>
                        <p>{text}</p>
                        {this.state.error ? null : <CommentList comments={comments} />}
                    </section> : null
                }
            </div>
        )
    }
}

export default connect(
    null,
    (dispatch) => ({
        deleteArticle: (id) => dispatch(deleteArticle(id))
    })
)(Article)