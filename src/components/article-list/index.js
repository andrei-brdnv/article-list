import React, { Component } from "react";
import Article from "../article";
import accordion from "../../decorators/accordion";
import { connect } from "react-redux";
import {filteredArticlesSelector, loadedSelector, loadingSelector} from "../../selectors";
import { loadAllArticles } from "../../ac";
import Loader from "../loader";
import { NavLink } from "react-router-dom";

class ArticleList extends Component {
    get articles() {
        const {openItemId, toggleOpenArticle, articles} = this.props

        return articles.map(article => (
            <li key={article.id}>
                <NavLink to={`/articles/${article.id}`}>{article.title}</NavLink>
                {/*<Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleArticle={toggleOpenArticle}
                />*/}
            </li>
        ))
    }

    componentDidMount() {
        !this.props.loaded && this.props.fetchData && this.props.fetchData()
    }

    render() {
        const {loading} = this.props
        return (
            loading ?
                <Loader/> :
                <ul>{this.articles}</ul>
        )
    }
}

export default connect(
    state => {
        console.log('article-list connect')
        return {
            articles: filteredArticlesSelector(state),
            loading: loadingSelector(state),
            loaded: loadedSelector(state),
        }
    },
    {
        fetchData: loadAllArticles
    }
)(accordion(ArticleList))