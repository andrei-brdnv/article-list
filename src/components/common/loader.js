import React from "react";
import Loader from "react-loader-spinner";

export default () => {
    return (
        <div className="d-flex">
            <Loader
                className="m-3 mx-auto"
                type="ThreeDots"
                color="#007bff"
                height={50}
                width={50}
            />
        </div>
    )
}