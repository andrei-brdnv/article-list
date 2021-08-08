import React, { Component } from "react";
import Article from "../article";
import accordion from "../../decorators/accordion";
import { connect } from "react-redux";
import { filteredArticlesSelector } from "../../selectors";

class ArticleList extends Component {
    get articles() {
        const {openItemId, toggleOpenArticle, articles} = this.props

        return articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleArticle={toggleOpenArticle}
                />
            </li>
        ))
    }

    render() {
        console.log('article-list render')
        return <ul>{this.articles}</ul>
    }
}

export default connect(
    state => {
        console.log('article-list connect')
        return {
            articles: filteredArticlesSelector(state)
        }

    }
)(accordion(ArticleList))