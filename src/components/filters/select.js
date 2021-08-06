import React, { Component } from "react";
import Select from "react-select";

class SelectFilter extends Component {
    state = {
        selectedOption: null
    }

    get optionsForSelect() {
        return this.props.articles.map((item) => ({
            value: item.id,
            label: item.title
        }))
    }

    handleSelectChange = (selectedOption) => {
        this.setState({ selectedOption })
    }

    render() {
        return (
            <Select
                options={this.optionsForSelect}
                value={this.state.selectedOption}
                onChange={this.handleSelectChange}
                isMulti
            />
        );
    }
}

export default SelectFilter;