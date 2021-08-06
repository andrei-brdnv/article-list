import React, { Component } from "react";
import Select from "./select";
import DateRange from "./dateRange";

class Filters extends Component {
    render() {
        const { articles } = this.props

        return (
            <div>
                <Select articles={articles} />
                <DateRange />
            </div>
        );
    }
}

export default Filters;