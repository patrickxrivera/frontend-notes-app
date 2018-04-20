const errorMsgBase = 'Please provide a ';

const formFields = [
  {
    label: 'First Name',
    name: 'firstName',
    type: '',
    errorMsg: `${errorMsgBase} first name.`
  },
  {
    label: 'Username',
    name: 'username',
    type: '',
    errorMsg: `${errorMsgBase} username.`
  },
  {
    label: 'Password',
    name: 'password',
    type: 'password',
    errorMsg: `${errorMsgBase} password.`
  }
];

export default formFields;
