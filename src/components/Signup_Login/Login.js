import React from "react";
import { login } from "../../redux/actions/authActions";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Email</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleOnChange}
            type="text"
          />
          <br />
          <label>Password</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange}
            type="password"
          />
          <br />
          <button type="submit">Log in!</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { login })(Login);