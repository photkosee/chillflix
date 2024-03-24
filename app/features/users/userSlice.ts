import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  token: string | null;
  user: number;
}

const initialState: initialStateProps = {
  token: null,
  user: 0,
};

export const userSlice = createSlice({
  name: "chillflix_user",
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.token = "token";
    },
    logout: (state) => {
      state.token = null;
    },
    setUser: (state, action: PayloadAction<0 | 1 | 2 | 3>) => {
      state.user = action.payload;
    },
  },
});

export const { login, logout, setUser } = userSlice.actions;
export default userSlice.reducer;
