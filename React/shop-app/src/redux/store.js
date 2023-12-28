import { configureStore } from "@reduxjs/toolkit";
import CounterSlice, { CounterSlices } from "./slices/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlices,
  },
});
