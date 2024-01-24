// import { configure } from "@testing-library/react";
import CounterSlice from "./slices/CounterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    Counter: CounterSlice,
  },
});
