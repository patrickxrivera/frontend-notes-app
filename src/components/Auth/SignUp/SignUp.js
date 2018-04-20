import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import map from 'ramda/src/map';
import curry from 'ramda/src/curry';
import reduce from 'ramda/src/reduce';

import formFields from '../utils/formFieldData';
import { signUpUser } from '../../../actions/auth';
import { getAuthStatusFrom } from '../../../reducers/auth';
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
    this.props.signUpUser(formProps, () => {
      this.props.history.push('/workspace');
    });
  };

  renderTextField = ({ input, type, label, meta: { touched, error } }) => (
    <TextField
      style={fontStyle}
      floatingLabelFocusStyle={formFocusStyle}
      underlineFocusStyle={formFocusStyle}
      hintText={label}
      floatingLabelText={label}
      fullWidth={true}
      type={type}
      errorStyle={errorStyle}
      errorText={touched && error}
      {...input}
    />
  );

  renderField = ({ label, name, type }) => (
    <div key={label}>
      <Field
        label={label}
        name={name}
        type={type}
        component={this.renderTextField}
      />
    </div>
  );

  renderFields = () => map(this.renderField, formFields);

  render() {
    const { handleSubmit } = this.props;

    return (
      <Wrapper>
        <FormWrapper onSubmit={handleSubmit(this.handleFormSubmit)}>
          <Title>Get started absolutely free!</Title>
          <Form>
            {this.renderFields()}
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

const validate = (formValues) =>
  reduce(handleValidation(formValues), {}, formFields);

const mapStateToProps = (state) => ({
  isAuthenticated: getAuthStatusFrom(state)
});

export default reduxForm({
  validate,
  form: 'signUp',
  fields: ['firstName', 'username', 'password']
})(connect(mapStateToProps, { signUpUser })(SignUp));
