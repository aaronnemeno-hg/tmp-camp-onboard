import { combineReducers, } from "@reduxjs/toolkit";

import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import AuthenticationReducer from './slices/authentication';

import { AuthenticationAPI } from "../services/authentication";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const rootReducer = combineReducers({
  authentication: AuthenticationReducer,
  [AuthenticationAPI.reducerPath]: AuthenticationAPI.reducer,
})

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['authentication',],
}

//https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/
const persistedReducer = persistReducer(persistConfig, rootReducer)

// https://redux-toolkit.js.org/api/configureStore
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    // serializableCheck: {
    //   ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    // },
  }).concat([
    AuthenticationAPI.middleware
  ])
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);