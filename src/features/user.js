import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  login: "",
  password: "",
  isAuthentificated: false,
};
export const authSlice = createSlice({
  name: "auth",
  initialState: { value: initialStateValue },
  reducers: {
    signin: (state, action) => {
      return (
        state.value.login = action.payload.login,
        state.value.password = action.payload.password,
        state.value.isAuthentificated = action.payload.isAuthentificated
      )
    }
  },
  signout: (state) => { 
    state.value=""
    return state
   
  }})
export const { signin, signout } = authSlice.actions;
export default authSlice.reducer;
