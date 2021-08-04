import React, { Component } from "react";

class Article extends Component {
    state = {
        isOpen: false
    }

    render() {
        const { title, text } = this.props.article
        const { isOpen } = this.state

        const toggleOpen = () => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }

        return (
            <div>
                <h3>
                    {title}
                    <button onClick={toggleOpen}>{ isOpen ? "close" : "open" }</button>
                </h3>
                {isOpen ? <p>{text}</p> : null}
            </div>
        )
    }
}

export default Article