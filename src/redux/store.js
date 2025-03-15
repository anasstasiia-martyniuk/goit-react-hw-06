import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "contacts",
  version: 1,
  storage,
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contactReducer),
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);