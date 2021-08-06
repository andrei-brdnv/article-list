import React, { Component } from "react";
import ArticleList from "./components/article-list";
import UserForm from "./components/user-form";
import Select from "react-select";
import Filters from "./components/filters";

class App extends Component {
    render() {
        return (
            <div className="App">
                <UserForm />
                <Filters articles={this.props.articles} />
                <ArticleList articles={this.props.articles} />
            </div>
        )
    }
}

export default App;
