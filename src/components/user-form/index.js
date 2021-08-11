import React, {Component} from "react";

class UserForm extends Component {
    handleChange = (e) => {
        e.preventDefault()
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <div>
                Username:
                <input
                    value={this.props.value}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default UserForm;