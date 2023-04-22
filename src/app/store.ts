import { configureStore } from "@reduxjs/toolkit";
import creditSlice from "../features/creditSlice";
import usersSlice from "../features/usersSlice";



 export const store = configureStore({
  reducer: {
    users: usersSlice,
    credit: creditSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;