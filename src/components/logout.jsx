import { Component } from "react";
import auth from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    const {onLogout, history} = this.props
    auth.logout();
    onLogout();
    history.replace("/");
  }

  render() {
    return null;
  }
}

export default Logout;
