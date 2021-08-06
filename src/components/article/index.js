import React, { PureComponent } from "react";
import CommentList from "../comment-list";

class Article extends PureComponent {
    toggleOpen = () => {
        this.props.toggleArticle(this.props.article.id)
    }

    render() {
        const { article: {title, text, comments}, isOpen } = this.props

        console.log("render Article")

        return (
            <div>
                <h3>
                    {title}
                    <button onClick={this.toggleOpen}>{ isOpen ? "close" : "open" }</button>
                </h3>
                {
                    isOpen ?
                    <section>
                        <p>{text}</p>
                        <CommentList comments={comments} />
                    </section> : null
                }
            </div>
        )
    }
}

export default Article