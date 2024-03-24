import { configureStore } from "@reduxjs/toolkit";

import genreSlice from "./features/genres/genreSlice";
import userSlice from "./features/users/userSlice";

const store = configureStore({
  reducer: {
    genre: genreSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
