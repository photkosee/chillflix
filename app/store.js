import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  genres: [],
  genresLoaded: false,
};

export const getGenres = createAsyncThunk("chillflix/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${TMDB_API_KEY}`,
  );
  return genres;
});

const getRawData = (api, genres, paging) => {};

export const fetchMovies = createAsyncThunk(
  "chillflix/movies",
  async ({ type }, thunkApi) => {
    const {
      chillflix: { genres },
    } = await thunkApi.getState();
    return getRawData(
      `${TMDB_BASE_URL}/discover/${type}?api_key=${TMDB_API_KEY}&with_genres=${genres}&sort_by=popularity.desc&page=1`,
    );
  },
);

const ChillflixSlice = createSlice({
  name: "Chillflix",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload.genres;
      state.genresLoaded = true;
    });
  },
});

export const store = configureStore({
  reducer: {
    netflix: ChillflixSlice.reducer,
  },
});
