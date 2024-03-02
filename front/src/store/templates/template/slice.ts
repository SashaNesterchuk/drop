import { createSlice } from "@reduxjs/toolkit";

import { incrementAsync } from "./thunks";

const initialState: State = {
  value: 0,
  status: "idle",
};

export const slice = createSlice({
  name: "template",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export interface State {
  value: number;
  status: "idle" | "loading" | "failed";
}
