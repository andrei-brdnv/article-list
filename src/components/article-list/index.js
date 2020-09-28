import React, {Component} from "react";
import accordion from "../../decorators/accordion";
import {connect} from "react-redux";
import {filteredArticlesSelector, loadedSelector, loadingSelector} from "../../selectors";
import {loadAllArticles} from "../../actions";
import Loader from "../common/loader";
import {NavLink} from "react-router-dom";
import moment from "moment";
import i18n from "../i18n";

class ArticleList extends Component {
    componentDidMount() {
        !this.props.loaded && this.props.fetchData && this.props.fetchData()
    }

    render() {
        const {
            articles,
            loading,
            t
        } = this.props

        const articleList = articles.map(article =>
            <div key={article.id}>
                <NavLink
                    to={`/articles/${article.id}`}
                    className="d-flex flex-column flex-sm-row justify-content-between list-group-item px-3 py-1"
                    activeClassName="list-group-item list-group-item-action active"
                >
                    {article.title}
                    <span>{moment(article.date).locale(t('lang')).format("D MMM, YYYY")}</span>
                </NavLink>
            </div>
        )

        return (
            loading ?
                <Loader/> :
                <div className="list-group mb-3">{articleList}</div>
        )
    }
}

export default connect(
    state => ({
        articles: filteredArticlesSelector(state),
        loading: loadingSelector(state),
        loaded: loadedSelector(state)
    }),
    {
        fetchData: loadAllArticles
    }
)(accordion(i18n(ArticleList)))