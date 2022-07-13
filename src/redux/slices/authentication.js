import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: {
    access: '',
    user: {}
  }
}

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log("AUTHENTICATION SLICE SET TOKEN ACTION PAYLOAD");
      console.log(action.payload);
      if (action.payload.hasOwnProperty('success') && action.payload.success === true){
        state.token.access = action.payload.access;
        state.token.user = action.payload.user;
      }
    },
  }
});

export const { setToken } = authenticationSlice.actions;
export default authenticationSlice.reducer;