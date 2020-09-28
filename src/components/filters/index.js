import React, {Component} from "react";
import SelectFilter from "./SelectFilter";
import DateRangeFilter from "./DateRangeFilter";

class Filters extends Component {
    render() {
        return (
            <div className="mb-3">
                <DateRangeFilter />
                <SelectFilter />
            </div>
        )
    }
}

export default Filters