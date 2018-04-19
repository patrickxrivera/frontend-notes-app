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
      const errorMsg = action.payload;
      console.log(errorMsg);
      return {
        ...state,
        errorMsg
      };
    }
  },
  initialState
);

export const getAuthStatusFrom = (state) => state.auth.isAuthenticated;
