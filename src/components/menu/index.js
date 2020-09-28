import React, {Component} from "react";

class MainMenu extends Component {
    render() {
        return (
            <div className="navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

export default MainMenu