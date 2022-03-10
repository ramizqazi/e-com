import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist-indexeddb-storage';

import rootReducer from './reducers';

const getMiddleware = () => {
  const middleware = [reduxThunk];
  return applyMiddleware(...middleware);
};

const appReducer = (state, action) => {
  if (action.type === 'AUTH/LOGOUT_SUCCESS') {
    return rootReducer(undefined, action);
  }
  return rootReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage: storage('myDB'),
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export default () => {
  const store = createStore(persistedReducer, getMiddleware());
  const persistor = persistStore(store);
  return { store, persistor };
};
