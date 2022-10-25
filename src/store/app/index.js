import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  done: {},
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    doneNote: (state, action) => {
      console.log("object :>> ", action.payload, state.test);
      state.done[action.payload.id] = action.payload.checked;
    },
  },
});

export const { doneNote } = appSlice.actions;
export default appSlice.reducer;
