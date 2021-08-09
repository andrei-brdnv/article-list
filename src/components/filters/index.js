import React, { Component } from "react";
import Select from "./select";
import DateRange from "./dateRange";

class Filters extends Component {
    render() {
        return (
            <div>
                <Select />
                <DateRange />
            </div>
        );
    }
}

export default Filters;