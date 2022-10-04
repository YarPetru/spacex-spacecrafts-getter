import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { dragonInfoApi } from './dragons/dragonSlice';

export const store = configureStore({
  reducer: {
    [dragonInfoApi.reducerPath]: dragonInfoApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    dragonInfoApi.middleware,
  ],
});

setupListeners(store.dispatch);
