import React, {Component} from "react";
import {Consumer} from "./context";

export default (OriginalComponent) =>
    class Translate extends Component {
        render() {
            return (
                <Consumer>
                    {(dictionary) => (
                        <OriginalComponent {...this.props} t={this.createTranslate(dictionary)} />
                    )}
                </Consumer>
            )
        }

        createTranslate = (dictionary) => (text) => dictionary[text] || text
    }