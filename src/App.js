import React, { Component } from "react";
import ArticleList from "./components/article-list";
import UserForm from "./components/user-form";

class App extends Component {
    render() {
        return (
            <div className="App">
                <UserForm />
                <ArticleList articles={this.props.articles} />
            </div>
        )
    }
}

export default App;
