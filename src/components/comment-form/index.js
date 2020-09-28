import React, {Component} from "react";
import "./style.css";
import i18n from "../i18n";
import {connect} from "react-redux";
import {addComment} from "../../actions";

class CommentForm extends Component {
    state = {
        user: '',
        text: ''
    }

    render() {
        const { t } = this.props

        return (
            <form className="my-3" onSubmit={this.handleSubmit}>
                <input
                    value={this.state.user}
                    onChange={this.handleChange('user')}
                    className={this.getClassName('user')}
                    placeholder={t('user')}
                />
                <input
                    value={this.state.text}
                    onChange={this.handleChange('text')}
                    className={this.getClassName('text')}
                    placeholder={t('comment')}
                />
                <input
                    className="btn btn-primary"
                    type="submit"
                    value={t('submit')}
                    disabled={!this.isValidForm()}
                />
            </form>
        )
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.addComment(this.state)
        this.setState({
            user: '',
            text: ''
        })
    }

    isValidForm = () => ['user', 'text'].every(this.isValidField)

    isValidField = (type) => this.state[type].length >= limits[type].min

    getClassName = (type) => (this.isValidField(type) ? "input" : "input__error")

    handleChange = (type) => (ev) => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    user: {
        min: 5,
        max: 50
    },
    text: {
        min: 5,
        max: 100
    }
}

export default connect(
    null,
    (dispatch, ownProps) => ({
        addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
    })
)(i18n(CommentForm))