import React, { Component } from "react";
import { Consumer } from "./context";

export default (Component) =>
    class Translate extends Component {
        createTranslate = (dictionary) => (text) => dictionary[text] || text

        render() {
            return (
                <Consumer>
                    {(dictionary) => (
                        <Component
                            {...this.props}
                            {...this.state}
                            t={this.createTranslate(dictionary)}
                        />
                    )}
                </Consumer>
            )
        }


    }
