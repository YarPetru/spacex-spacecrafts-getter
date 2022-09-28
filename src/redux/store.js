import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  //   persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { dragonInfoApi } from './dragons/dragonSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, data);

export const store = configureStore({
  reducer: {
    [dragonInfoApi.reducerPath]: dragonInfoApi.reducer,
    // data: persistedReducer,
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

// export const persistor = persistStore(store);
