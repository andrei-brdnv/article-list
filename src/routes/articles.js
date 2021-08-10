import React, { Component } from "react";
import ArticleList from "../components/article-list";
import { Route, Switch } from "react-router-dom";
import Article from "../components/article";

class ArticlesPage extends Component {
    render() {
        return (
            <div>
                <ArticleList />
                <Switch>
                    <Route path={"/articles/:id"} render={this.getArticle} />
                    <Route path={"/articles"} render={() => <h4>Please select an article</h4>}/>
                </Switch>
            </div>
        );
    }

    getArticle = ({ match }) => {
        console.log(match.params)
        return <Article key={match.params.id} id={match.params.id} />
    }
}

export default ArticlesPage;