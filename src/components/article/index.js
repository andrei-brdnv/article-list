import React, {PureComponent} from "react";
import CommentList from "../comment-list";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteArticle, loadArticle} from "../../actions";
import Loader from "../common/loader";
import {articleSelector} from "../../selectors";
import i18n from "../i18n";
import moment from "moment";

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

    render() {
        const {article, t} = this.props
        if (!article) return null
        return (
            <div className="card mx-auto m-3">
                <div className="card-header d-flex justify-content-between align-items-center p-3">
                    <h5 className="m-0">{article.title}</h5>
                    <div>
                        <button
                            onClick={this.handleDelete}
                            className="btn btn-danger ml-1"
                        >
                            {t('delete')}
                        </button>
                    </div>
                </div>
                <div className="card-body p-3">
                    <p className="card-subtitle text-muted">{t('creation date')}
                    : {moment(article.date).locale(t('lang')).format("D MMM, YYYY")}</p>
                    {article.loading ? <Loader /> : this.body}
                </div>
            </div>
        )
    }

    get body() {
        const {article} = this.props

        return (
            <section>
                <p className="card-text text-justify my-3">{article.text}</p>
                <CommentList article={article} />
            </section>
        )
    }

    handleDelete = () => {
        this.props.deleteArticle(this.props.article.id)
    }

    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }
}

Article.propTypes = {
    isOpen: PropTypes.bool,
    toggleArticle: PropTypes.func,
    article: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
        comments: PropTypes.array
    })
}

const mapDispatchToProps = dispatch => ({
    deleteArticle: (id) => dispatch(deleteArticle(id)),
    loadArticle: (id) => dispatch(loadArticle(id))
})

const mapStateToProps = (state, ownProps) => ({
    article: articleSelector(state, ownProps)
})

export default connect(mapStateToProps, mapDispatchToProps)(i18n(Article))