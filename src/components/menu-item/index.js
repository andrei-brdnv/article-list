import React, {Component} from "react";
import i18n from "../i18n";
import {NavLink} from "react-router-dom";

class MenuItem extends Component {
    render() {
        const {to, children, t, ...rest} = this.props
        return (
            <li className="nav-item">
                <NavLink {...rest} to={to} className="nav-link">{t(children)}</NavLink>
            </li>
        )
    }
}

export default i18n(MenuItem)