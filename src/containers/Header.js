import React from "react";
import { FaUserCog } from "react-icons/fa";
import { connect } from "react-redux";
import LoginModal from "../components/LoginModal";
import { setAdmin } from "../actions";

class Header extends React.Component {
  state = {
    showModal: false,
    password: "",
    login: "",
    passwordNote: "Enter your password!",
    loginNote: "Enter your login!"
  };

  handleLogin = event => {
    event.preventDefault();
    this.setState({ showModal: true });
  };

  handleLogOut = event => {
    event.preventDefault();
    if (this.props.isAdmin) this.props.setAdmin(false);
    alert("You are Logged Out!");
  };

  handleClose = event => {
    event.preventDefault();
    this.setState({ showModal: false });
  };

  handlePasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleLoginChange = event => {
    this.setState({ login: event.target.value });
  };

  handleSave = event => {
    const { password, login } = this.state;
    event.preventDefault();
    if (login !== "admin") {
      this.setState({
        loginNote: "Login is not valid!",
        passwordNote: "Enter your password!"
      });
      return;
    }
    if (password !== "123") {
      this.setState({
        passwordNote: "Password is not valid!",
        loginNote: "Enter your login!"
      });
      return;
    }
    this.setState({ showModal: false });
    this.props.setAdmin(true);
  };

  render() {
    return (
      <div className="row mb-3">
        <LoginModal
          showModal={this.state.showModal}
          handleClose={this.handleClose}
          handleSave={this.handleSave}
          handleLoginChange={this.handleLoginChange}
          handlePasswordChange={this.handlePasswordChange}
          passwordNote={this.state.passwordNote}
          loginNote={this.state.loginNote}
        />
        <div className="col text-primary ml-3">
          <div style={{ marginLeft: "15px" }}>
            <small>Admin</small>
          </div>
          <FaUserCog style={{ marginLeft: "15px", width: 30, height: 30 }} />
          <div>
            {this.props.isAdmin ? (
              <button
                data-toggle="tooltip"
                data-placement="bottom"
                title="Log Out"
                className="btn btn-primary btn-sm mt-2"
                onClick={event => this.handleLogOut(event)}
              >
                Log Out
              </button>
            ) : (
              <button
                data-toggle="tooltip"
                data-placement="bottom"
                title="Log In"
                className="btn btn-primary btn-sm mt-2"
                onClick={event => this.handleLogin(event)}
              >
                Log In
              </button>
            )}
          </div>
        </div>
        <h3 className="col-7 text-danger m-4">Tasks List</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAdmin: state.isAdmin
});

const mapDispatchToProps = {
  setAdmin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
