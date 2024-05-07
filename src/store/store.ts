import { Tuple, configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import { rootReducer } from './rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => new Tuple()
});

const persistor = persistStore(store);

export const configureStores = () => {
  return { persistor, store };
};

export type AppDispatch = typeof store.dispatch;
export const { dispatch } = store;

export const useDispatch = () => useAppDispatch<AppDispatch>();

export type AppState = ReturnType<typeof store.getState>;

export type RootState = ReturnType<typeof store.getState>;
