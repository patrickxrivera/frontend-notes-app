import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { map, curry, reduce } from 'ramda';

import formFields from '../utils/formFieldData';
import { signUpUser } from '../../../actions/auth';
import { getErrorMsgFrom } from '../../../reducers/auth';
import {
  Wrapper,
  FormWrapper,
  Title,
  Form,
  btnStyle,
  formFocusStyle,
  fontStyle,
  errorStyle
} from './SignUpStyles';
import { Btn } from '../../Home/HomeStyles';

class SignUp extends Component {
  handleFormSubmit = (formProps) => {
    this.props.signUpUser(formProps, (userId) => {
      console.log(userId);
      this.props.history.push(`/${userId}`);
    });
  };

  renderTextField = ({
    errorMsg,
    duplicateUsername,
    type,
    input,
    label,
    meta: { touched, error }
  }) => {
    return (
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
  };

  renderField = curry((errorMsg, { label, name, type }) => {
    if (name !== 'username') {
      errorMsg = '';
    }

    return (
      <div key={label}>
        <Field
          label={label}
          name={name}
          type={type}
          errorMsg={errorMsg}
          component={this.renderTextField}
        />
      </div>
    );
  });

  renderFields = (errorMsg) => map(this.renderField(errorMsg), formFields);

  render() {
    const { handleSubmit, errorMsg } = this.props;

    return (
      <Wrapper>
        <FormWrapper onSubmit={handleSubmit(this.handleFormSubmit)}>
          <Title>Get started absolutely free!</Title>
          <Form>
            {this.renderFields(errorMsg)}
            <Btn style={btnStyle} type="submit">
              Sign up
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
  errorMsg: getErrorMsgFrom(state)
});

export default reduxForm({
  validate,
  form: 'signUp',
  fields: ['firstName', 'username', 'password']
})(connect(mapStateToProps, { signUpUser })(SignUp));
