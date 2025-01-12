import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
type TStateAuth = {
  user: null | object;
  token: null | string;
};
const initialState: TStateAuth = {
  user: null,
  token: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;
export const userToken = (state: RootState) => state.auth.token;
export const authUser = (state: RootState) => state.auth.user;
