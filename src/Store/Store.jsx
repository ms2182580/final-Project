import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
const store = configureStore({
  reducer: Slice,
});

export default store;
