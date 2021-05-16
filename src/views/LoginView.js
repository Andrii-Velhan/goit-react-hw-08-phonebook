import React, { Component } from 'react';
import { connect } from 'react-redux'; //add
import { authOperations } from '../redux/auth'; //add
class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Enter your data</h1>

        <form onSubmit={this.handleSubmit} className="Form" autoComplete="off">
          <label className="Label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="Form__input"
            value={email}
            onChange={this.handleChange}
          />

          <label className="Label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="Form__input"
            value={password}
            onChange={this.handleChange}
          />

          <button type="submit" className="Form__button">
            Log in
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
