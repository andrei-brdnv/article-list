import React, {Component} from "react";
import {connect} from "react-redux";
import {increment, decrement, counterReset} from "../../actions";
import i18n from "../i18n";
import {Consumer as AuthConsumer} from "../../contexts/auth";

class Counter extends Component {
    render() {
        const { t } = this.props

        return (
            <div className="">
                <div className="h5 m-2">{this.props.count}</div>
                <div className="d-flex flex-column flex-sm-row align-items-sm-center align-items-start">
                    <button
                        className="btn btn-success m-2"
                        onClick={this.handleIncrement}
                    >
                        {t('increment')}
                    </button>
                    <button
                        className="btn btn-danger m-2"
                        onClick={this.handleDecrement}
                    >
                        {t('decrement')}
                    </button>
                    <button
                        className="btn btn-primary m-2"
                        onClick={this.handleReset}
                    >
                        {t('Reset')}
                    </button>
                </div>
                <div className="m-2">
                    <AuthConsumer>
                        {(contextValue) => <h5>{contextValue.contextUserName}</h5>}
                    </AuthConsumer>
                </div>
            </div>
        )
    }

    handleIncrement = () => {
        this.props.dispatchIncrement()
    }

    handleDecrement = () => {
        this.props.dispatchDecrement()
    }

    handleReset = () => {
        this.props.dispatchReset()
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})

const mapDispatchToProps = {
    dispatchIncrement: increment,
    dispatchDecrement: decrement,
    dispatchReset: counterReset
}

export default connect(mapStateToProps, mapDispatchToProps)(i18n(Counter))