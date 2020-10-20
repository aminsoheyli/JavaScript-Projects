import React, { Component, Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import auth from "./services/authService";
import Movies from "./components/movies";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  handleLogin = () => {
    try {
      const user = auth.getCurrentUser();
      this.setState({ user });
    } catch (ex) {}
  };

  handleLogout = () => {
    this.setState({ user: null });
  };

  render() {
    return (
      <Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route
              path="/register"
              render={(props) => (
                <RegisterForm {...props} onLogin={this.handleLogin} />
              )}
            />
            <Route
              path="/login"
              render={(props) => (
                <LoginForm {...props} onLogin={this.handleLogin} />
              )}
            />
            <Route
              path="/logout"
              render={(props) => (
                <Logout {...props} onLogout={this.handleLogout} />
              )}
            />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </Fragment>
    );
  }
}

export default App;
