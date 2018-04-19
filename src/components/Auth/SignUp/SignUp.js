import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { grey500 } from 'material-ui/styles/colors';

import { Wrapper, FormWrapper, Title, Form, btnStyle } from './SignUpStyles';
import { Btn } from '../../Home/HomeStyles';

class SignUp extends Component {
  renderTextField = ({ input, label, meta: { touched, error } }) => (
    <TextField
      style={{ fontFamily: 'inherit' }}
      floatingLabelFocusStyle={{ color: '#2dacf1ff' }}
      underlineFocusStyle={{ color: '#2dacf1ff' }}
      hintText={label}
      floatingLabelText={label}
      fullWidth={true}
      errorText={touched && error}
      {...input}
    />
  );

  render() {
    return (
      <Wrapper>
        <FormWrapper>
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

export default reduxForm({
  form: 'signUp'
})(SignUp);
