import React, { Component } from "react";
import ArticleList from "./components/article-list";
import UserForm from "./components/user-form";
import Select from "react-select";
import Filters from "./components/filters";
import Counter from "./components/counter";
import { Link, Redirect, Route, Switch } from "react-router-dom";
import ArticlesPage from "./routes/articles";
import CommentsPage from "./routes/comments";
import ErrorPage from "./routes/error";
import Menu from "./components/menu";
import MenuItem from "./components/menu-item";
import { Provider as AuthProvider } from "./context/auth";
import LangProvider from "./components/i18n/lang-provider";

class App extends Component {
    state = {
        userName: '',
        language: 'en'
    }

    handleUserNameChange = (userName) => {
        this.setState({ userName })
    }

    handleLanguageChange = (language) => () => {
        this.setState({language})
    }

    render() {
        return (
            <LangProvider language={this.state.language}>
                <AuthProvider value={{contextUserName: this.state.userName}}>
                    <div className="App">
                        <header>
                            <button onClick={this.handleLanguageChange('en')}>Eng</button>
                            <button onClick={this.handleLanguageChange('ru')}>Rus</button>
                        </header>
                        <UserForm value={this.state.userName} onChange={this.handleUserNameChange} />
                        <Menu>
                            <MenuItem to={"/counter"}>Counter</MenuItem>
                            <MenuItem to={"/filters"}>Filters</MenuItem>
                            <MenuItem to={"/articles"}>Articles</MenuItem>
                            <MenuItem to={"/comments/1"}>Comments</MenuItem>
                        </Menu>
                        <Switch>
                            <Route path={"/counter"} component={Counter} exact />
                            <Route path={"/filters"} component={Filters} />
                            <Route path={"/articles"} component={ArticlesPage} />
                            <Route path={"/comments"} component={CommentsPage} />
                            <Route path={"/error"} component={ErrorPage} />
                            <Redirect from={"/"} to={"/articles"} />
                        </Switch>
                    </div>
                </AuthProvider>
            </LangProvider>
        )
    }
}

export default App;
