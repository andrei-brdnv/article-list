import React from "react";
import { NavLink } from "react-router-dom";

function MenuItem({ to, children, ...rest }) {
    return (
        <div>
            <NavLink {...rest} to={to} activeStyle={{color: 'red'}}>{children}</NavLink>
        </div>
    )
}

export default MenuItem;