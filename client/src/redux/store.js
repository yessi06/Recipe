import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer.js';

const store = configureStore({
  reducer,
  middleware: [thunkMiddleware],
  devTools: window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
});

export default store;