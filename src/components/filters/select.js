import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { changeSelection } from "../../ac";
import { articlesSelector, filtersSelector } from "../../selectors";

class SelectFilter extends Component {
    get optionsForSelect() {
        return this.props.articles.map((item) => ({
            value: item.id,
            label: item.title
        }))
    }

    handleSelectChange = (selected) => {
        this.props.changeSelection(selected)
    }

    render() {
        return (
            <Select
                options={this.optionsForSelect}
                value={this.props.selected}
                onChange={this.handleSelectChange}
                isMulti
            />
        );
    }
}

const mapDispatchToPropsFunc = (dispatch) => {
    return {
        changeSelection: (selected) => {
            dispatch(changeSelection(selected))
        }
    }
}

export default connect(
    state => ({
        articles: articlesSelector(state),
        selectedOptions: filtersSelector(state).selected
    }),
    mapDispatchToPropsFunc
)(SelectFilter);