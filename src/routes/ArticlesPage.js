import React, {Component} from "react";
import ArticleList from "../components/article-list";
import Article from "../components/article";
import Filters from "../components/filters";
import i18n from "../components/i18n";
import {Route} from "react-router-dom";

class ArticlesPage extends Component {
    render() {
        return (
            <div>
                <Filters />
                <ArticleList />
                <Route path={'/articles/:id'} children={this.getArticle}/>
            </div>
        )
    }

    getArticle = ({match}) => {
        const { t } = this.props
        if (match === null) {
            return <p className="h5 text-center mb-3 p-3">{t('select an article')}</p>
        }

        return <Article key={match.params.id} id={match.params.id} />
    }
}

export default i18n(ArticlesPage)