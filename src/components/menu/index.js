import React, { Component } from "react";

class MainMenu extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default MainMenu;