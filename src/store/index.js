import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import { loadState, saveState } from './localStorage.js';
import reducers from '../reducers';

const key = 'state';
const persistedState = loadState(key);
const store = createStore(
  reducers,
  persistedState,
  applyMiddleware(reduxThunk)
);

store.subscribe(() => {
  const currentState = store.getState();
  saveState(currentState, key);
});

export default store;
