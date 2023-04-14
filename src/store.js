import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";

const store = configureStore({
  reducer: {
    anectodes: reducer,
    filter: filterReducer,
  },
});

console.log(store.getState());

export default store;
