import React, { PureComponent } from "react";
import CommentList from "../comment-list";
import { connect } from "react-redux";
import { deleteArticle, loadArticle } from "../../ac";
import Loader from "../loader";

class Article extends PureComponent {
    state = {
        error: null
    }

    componentDidCatch(error) {
        this.setState({error})
    }

    componentDidUpdate(prevProps) {
        const { isOpen, loadArticle, article } = this.props

        if (!prevProps.isOpen && isOpen && !article.text) {
            loadArticle(article.id)
        }

    }

    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    handleDelete = () => {
        this.props.deleteArticle(this.props.article.id)
    }

    render() {
        const { article: {title, text, loading}, isOpen } = this.props

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
                        {loading ?
                        <Loader /> :
                        <>
                            <p>{text}</p>
                            <CommentList article={this.props.article} />
                        </>}
                    </section> : null
                }
            </div>
        )
    }
};

export default connect(
    null,
    (dispatch) => ({
        deleteArticle: (id) => dispatch(deleteArticle(id)),
        loadArticle: (id) => dispatch(loadArticle(id))
    })
)(Article)