import React, { Component } from "react";
import ArticleList from "./components/article-list";
import UserForm from "./components/user-form";
import Select from "react-select";
import Filters from "./components/filters";
import Counter from "./components/counter";
import {Link, Route, Switch} from "react-router-dom";
import ArticlesPage from "./routes/articles";

class App extends Component {
    render() {
        return (
            <div className="App">
                <UserForm />
                <div>
                    <Link to={"/counter"}>Counter</Link>
                </div>
                <div>
                    <Link to={"/filters"}>Filters</Link>
                </div>
                <div>
                    <Link to={"/articles"}>Articles</Link>
                </div>
                <Switch>
                    <Route path={"/counter"} component={Counter} exact />
                    <Route path={"/filters"} component={Filters} />
                    <Route path={"/articles"} component={ArticlesPage} />
                </Switch>

            </div>
        )
    }
}

export default App;
