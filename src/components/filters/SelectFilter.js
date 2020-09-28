import React, {Component} from "react";
import Select from "react-select";
import {connect} from "react-redux";
import {changeSelection} from "../../actions";
import {articlesSelector, filtersSelector} from "../../selectors";
import i18n from "../i18n";

const customStyles = {
    menu: (provided, state) => ({
        ...provided,
        zIndex: 1000
    })
}

class SelectFilter extends Component {
    render() {
        const { t } = this.props

        return (
            <div className="mb-3">
                <Select
                    styles={customStyles}
                    options={this.options}
                    value={this.props.selectedOptions}
                    onChange={this.handleSelectChange}
                    isMulti
                    placeholder={t('select')}
                />
            </div>
        )
    }

    handleSelectChange = (selectedOption) => {
        if (selectedOption === null) {
            selectedOption = [];
        }

        this.props.changeSelection(selectedOption)
    }

    get options() {
        return this.props.articles.map(article => ({
            value: article.id,
            label: article.title
        }))
    }
}

export default connect(
    state => ({
        articles: articlesSelector(state),
        selectedOptions: filtersSelector(state).selected
    }),
    {changeSelection}
)(i18n(SelectFilter))