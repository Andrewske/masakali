import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { LOGOUT } from '../actions/types';

import admin from './admin';
import alert from './alert';
import auth from './auth';
import villas from './villas';
import user from './user';
import country from './country';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'user', 'country'],
};

const appReducer = combineReducers({
  admin,
  alert,
  auth,
  villas,
  user,
  country,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    storage.removeItem('persist:root');
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
