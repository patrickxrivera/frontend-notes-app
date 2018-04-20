import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { map, curry, reduce } from 'ramda';

import formFields from '../utils/formFieldData';
import { signInUser } from '../../../actions/auth';
import { getAuthErrorFrom } from '../../../reducers/errors';
import {
  Wrapper,
  FormWrapper,
  Title,
  Form,
  btnStyle,
  formFocusStyle,
  fontStyle,
  errorStyle
} from '../utils/AuthFormStyles';
import { Btn } from '../../Home/HomeStyles';

class SignIn extends Component {
  handleFormSubmit = (formProps) => {
    const { signInUser, history } = this.props;

    signInUser(formProps, (userId) => {
      history.push(`/${userId}`);
    });
  };

  renderTextField = ({ errorMsg, type, input, label, meta: { touched, error } }) => (
    <TextField
      style={fontStyle}
      floatingLabelFocusStyle={formFocusStyle}
      underlineFocusStyle={formFocusStyle}
      hintText={label}
      floatingLabelText={label}
      fullWidth={true}
      type={type}
      errorStyle={errorStyle}
      errorText={touched && (errorMsg || error)}
      {...input}
    />
  );

  renderField = curry((errorMsg, { label, name, type }) => (
    <div key={label}>
      <Field
        errorMsg={errorMsg}
        label={label}
        name={name}
        type={type}
        component={this.renderTextField}
      />
    </div>
  ));

  renderFields = (signInFields, errorMsg) => map(this.renderField(errorMsg), signInFields);

  render() {
    const { handleSubmit, errorMsg, location: { pathname } } = this.props;
    const [firstName, ...signInFields] = formFields; // don't render firstName on sign in form

    return (
      <Wrapper>
        <FormWrapper onSubmit={handleSubmit(this.handleFormSubmit)} pathname={pathname}>
          <Title>Welcome Back!</Title>
          <Form>
            {this.renderFields(signInFields, errorMsg)}
            <Btn style={btnStyle} type="submit">
              Sign in
            </Btn>
          </Form>
        </FormWrapper>
      </Wrapper>
    );
  }
}

const handleValidation = curry((formValues, acc, { name }) => {
  if (!formValues[name]) {
    acc[name] = 'You must provide a value';
  }
  return acc;
});

const validate = (formValues) => reduce(handleValidation(formValues), {}, formFields);

const mapStateToProps = (state) => ({
  errorMsg: getAuthErrorFrom(state)
});

export default reduxForm({
  validate,
  form: 'signUp',
  fields: ['username', 'password']
})(connect(mapStateToProps, { signInUser })(SignIn));
