import React, { Component } from "react";
import Article from "../article";

class ArticleList extends Component {
    render() {
        return <ul>{this.articles}</ul>
    }

    get articles() {
        return this.props.articles.map(article => (
            <li key={article.id}>
                <Article article={article} />
            </li>
        ))
    }
}

export default ArticleList