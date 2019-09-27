import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { register } from "../actions";
import RegisterWrapper from '../styled-components/RegisterWrapper';


class Register extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleRegister = e => {
    e.preventDefault();
    // attempt to register (handled inside register method)
    // success -> goto /login
    // failure -> stay here
    this.props.register(this.state.credentials, this.props.history);
  };

  render() {
    return (
      <RegisterWrapper>
  
        {this.props.registerError && <p className='error'>{this.props.registerError}</p>}
        {this.props.infoMessage && <p>{this.props.infoMessage}</p>}

        <p>Please enter a User Name and Password:</p>

        <form onSubmit={this.handleRegister}>

          <div>
            <label name='username'>Name:</label>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
              autoFocus={true}
            />
          </div>

          <div>
            <label name='password'>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </div>

          <button>
            {this.props.isRegistering ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Register"
            )}
          </button>
        </form>

      </RegisterWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    isRegistering: state.isRegistering,
    registerError: state.registerError
  };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
