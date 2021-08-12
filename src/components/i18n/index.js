import React, { Component } from "react";
import { Consumer } from "./context";

export default (Component) =>
    class Translate extends Component {
        render() {
            return (
                <Consumer>
                    {(dictionary) => (
                        <Component {...this.props} t={this.createTranslate(dictionary)} />
                    )}
                </Consumer>
            )
        }

        createTranslate = (dictionary) => (text) => dictionary[text] || text
    }
