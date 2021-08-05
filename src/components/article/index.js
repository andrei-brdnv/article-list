import React, { PureComponent } from "react";

class Article extends PureComponent {
    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    render() {
        const { article: {title, text}, isOpen } = this.props
        console.log("render Article")
        return (
            <div>
                <h3>
                    {title}
                    <button onClick={this.toggleOpen}>{ isOpen ? "close" : "open" }</button>
                </h3>
                {isOpen ? <p>{text}</p> : null}
            </div>
        )
    }
}

export default Article