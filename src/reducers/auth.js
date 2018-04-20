import { handleActions } from 'redux-actions';

const initialState = {
  isAuthenticated: false,
  errorMsg: ''
};

export default handleActions(
  {
    AUTH_USER: (state, action) => {
      const { token, userId, firstName } = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        token,
        userId,
        firstName
      };
    },
    AUTH_ERROR: (state, action) => {
      const error = action.payload;
      return {
        ...state,
        errorMsg: error
      };
    }
  },
  initialState
);

export const getAuthStatusFrom = (state) => state.auth.isAuthenticated;
