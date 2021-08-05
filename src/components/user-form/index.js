import React, {Component} from "react";

class UserForm extends Component {
    state = {
        user: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            user: e.target.value
        })
    }

    render() {
        return (
            <div>
                Username:
                <input
                    value={this.state.user}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

export default UserForm;