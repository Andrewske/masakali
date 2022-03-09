import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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

const rootReducer = combineReducers({
  alert,
  auth,
  villas,
  user,
  country,
});

export default persistReducer(persistConfig, rootReducer);
