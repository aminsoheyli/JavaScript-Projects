import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="nav-item navbar-nav">
          <NavLink className="nav-link" to="/movies">
            Movies <span className="sr-only">(current)</span>
          </NavLink>
          <NavLink className="nav-link" to="/customers">
            Customers
          </NavLink>
          {!user && (
            <Fragment>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </Fragment>
          )}
          {user && (
            <Fragment>
              <NavLink className="nav-link" to="/profile">
                {user.name}
              </NavLink>
              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            </Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
