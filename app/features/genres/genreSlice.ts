import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GenreState {
  genre: "TV" | "MOVIE" | "LATEST" | "ALL";
}

const initialState: GenreState = {
  genre: "ALL",
};

const genreSlice = createSlice({
  name: "chillflix_genre",
  initialState,
  reducers: {
    setGenre: (
      state,
      action: PayloadAction<"TV" | "MOVIE" | "LATEST" | "ALL">,
    ) => {
      state.genre = action.payload;
    },
  },
});

export const { setGenre } = genreSlice.actions;
export default genreSlice.reducer;
