import React, { Component } from "react";
import { connect } from "react-redux";
import { increment } from "../../ac";

class Counter extends Component {
    handleIncrement = () => {
        this.props.increment()
    }

    render() {
        return (
            <div>
                <h3>{this.props.count}</h3>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})

/*const mapDispatchToProps = {
    increment
}*/

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);