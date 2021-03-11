import { configureStore, combineReducers } from '@reduxjs/toolkit';
import appReducer from './slice';

const reducer = combineReducers({
  app: appReducer,
});

// preloadedState will be passed in by the `gatsby-plugin-react-redux` plugin
const createStore = preloadedState => {
  return configureStore({
    devTools: true,
    reducer,
    preloadedState,
  });
};

export default createStore;
