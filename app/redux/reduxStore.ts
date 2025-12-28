import { configureStore } from "@reduxjs/toolkit";
import userReducer from"./user/userSlice";
import movementReducer from"./movement/movementSlice";
import contactReducer from "./contact/contactSlice";

export const store =  configureStore ({
  reducer: {
    user: userReducer,
    movement: movementReducer,
    contact: contactReducer,
  },
});

export type rootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;