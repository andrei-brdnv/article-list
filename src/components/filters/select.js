import React, { Component } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import { changeSelection } from "../../ac";

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

export default connect(
    state => ({
        articles: state.articles,
        selected: state.filters.selected,
    }),
    {changeSelection}
)(SelectFilter);