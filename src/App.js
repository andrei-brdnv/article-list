import React, {Component} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/counter";
import Menu from "./components/menu";
import MenuItem from "./components/menu-item";
import UserForm from "./components/user-form";
import LangProvider from "./components/i18n/lang-provider";
import Footer from "./components/footer";
import {Route, Switch, Redirect} from "react-router-dom";
import ArticlesPage from "./routes/ArticlesPage";
import CommentsPage from "./routes/CommentsPage";
import ErrorPage from "./routes/error";
import {Provider as AuthProvider} from "./contexts/auth";

class App extends Component {
    state = {
        userName: '',
        language: 'en'
    }

    handleUsernameChange = (userName) => {
        this.setState({userName})
    }

    handleLanguageChange = (language) => () => {
        this.setState({language})
    }

    render() {
        return (
            <LangProvider language={this.state.language}>
                <AuthProvider value={{contextUserName: this.state.userName}}>
                    <div className="content">
                        <header>
                            <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
                                <Menu>
                                    <MenuItem to={"/counter"}>Counter</MenuItem>
                                    <MenuItem to={"/articles"}>Articles</MenuItem>
                                    <MenuItem to={"/comments/1"}>Comments</MenuItem>
                                </Menu>
                                <div className="d-flex mx-auto">
                                    <button
                                        className="btn btn-primary mx-1"
                                        onClick={this.handleLanguageChange('en')}
                                    >
                                        Eng
                                    </button>
                                    <button
                                        className="btn btn-primary mx-1"
                                        onClick={this.handleLanguageChange('ru')}
                                    >
                                        Rus
                                    </button>
                                </div>
                            </nav>
                        </header>
                        <div className="container">
                            <UserForm
                                value={this.state.userName}
                                onChange={this.handleUsernameChange}
                            />
                            <Switch>
                                <Route path={"/counter"} component={Counter} exact/>
                                <Route path={"/articles"} component={ArticlesPage}/>
                                <Route path={"/comments"} component={CommentsPage}/>
                                <Route path={"/error"} component={ErrorPage}/>
                                <Redirect from={'/'} to={'/articles'}/>
                            </Switch>
                        </div>
                    </div>
                    <Footer />
                </AuthProvider>
            </LangProvider>
        )
    }
}

export default App
