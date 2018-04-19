import axios from 'axios';
import { createAction } from 'redux-actions';

const signUpUserEndpoint = 'http://localhost:8080/api/signup';

export const signUpUser = ({ firstName, username, password }, callback) => {
  return (dispatch) => {
    axios
      .post(signUpUserEndpoint, { firstName, username, password })
      .then(({ data }) => {
        dispatch({ type: 'AUTH_USER', payload: data });
        // localStorage.setItem('isAuthenticated', 'true')
        callback();
      })
      .catch((error) => {
        console.log(error);
        // const errorMsg = 'Email has already been used.';
        // dispatch(authError(errorMsg));
      });
  };
};
