import React, { PureComponent } from "react";
import CommentList from "../comment-list";
import { connect } from "react-redux";
import { deleteArticle, loadArticle } from "../../ac";
import Loader from "../loader";
import {articleSelector} from "../../selectors";

class Article extends PureComponent {
    state = {
        error: null
    }

    componentDidCatch(error) {
        this.setState({error})
    }

    componentDidMount() {
        const {loadArticle, article, id} = this.props
        if (!article || (!article.text && !article.loading)) {
            loadArticle(id)
        }
    }

    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    handleDelete = () => {
        this.props.deleteArticle(this.props.article.id)
    }

    render() {
        const { article } = this.props

        console.log("render Article")
        if (!article) return null
        return (
            <div>
                <h3>
                    {article.title}
                    {/*<button onClick={this.toggleOpen}>{ isOpen ? "close" : "open" }</button>*/}
                    <button onClick={this.handleDelete}>Delete</button>
                </h3>
                <section>
                    {article.loading ?
                        <Loader/> :
                        <>
                            <p>{article.text}</p>
                            <CommentList article={article}/>
                        </>}
                </section>
            </div>
        )
    }
};

export default connect(
    (state, ownProps) => ({
        article: articleSelector(state, ownProps)
    }),
    (dispatch) => ({
        deleteArticle: (id) => dispatch(deleteArticle(id)),
        loadArticle: (id) => dispatch(loadArticle(id))
    })
)(Article)