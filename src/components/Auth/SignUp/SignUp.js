import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { grey500 } from 'material-ui/styles/colors';

import { signUpUser } from '../../../actions/auth';
import { getAuthStatusFrom } from '../../../reducers/auth';
import { Wrapper, FormWrapper, Title, Form, btnStyle } from './SignUpStyles';
import { Btn } from '../../Home/HomeStyles';

class SignUp extends Component {
  handleFormSubmit = (formProps) => {
    this.props.signUpUser(formProps, () => {
      this.props.history.push('/workspace');
    });
  };

  renderTextField = ({ input, type, label, meta: { touched, error } }) => (
    <TextField
      style={{ fontFamily: 'inherit' }}
      floatingLabelFocusStyle={{ color: '#2dacf1ff' }}
      underlineFocusStyle={{ color: '#2dacf1ff' }}
      hintText={label}
      floatingLabelText={label}
      fullWidth={true}
      type={type}
      errorText={touched && error}
      {...input}
    />
  );

  render() {
    const {
      handleSubmit,
      fields: { firstName, username, password }
    } = this.props;

    return (
      <Wrapper>
        <FormWrapper onSubmit={handleSubmit(this.handleFormSubmit)}>
          <Title>Get started absolutely free!</Title>
          <Form>
            <div>
              <Field
                name="firstName"
                component={this.renderTextField}
                label="First Name"
              />
            </div>
            <div>
              <Field
                name="username"
                component={this.renderTextField}
                label="Username"
              />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                component={this.renderTextField}
                label="Password"
              />
            </div>
            <Btn style={btnStyle} type="submit">
              Sign up
            </Btn>
          </Form>
        </FormWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthStatusFrom(state)
});

export default reduxForm({
  form: 'signUp',
  fields: ['firstName', 'username', 'password']
})(connect(mapStateToProps, { signUpUser })(SignUp));
