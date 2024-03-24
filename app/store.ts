import { configureStore } from "@reduxjs/toolkit";

import genreSlice from "./features/genres/genreSlice";

const store = configureStore({
  reducer: {
    genre: genreSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
