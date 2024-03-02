import { createSlice } from "@reduxjs/toolkit";
import { fetchTypesByYearAndMonthAsync, fetchTypesAsync } from "./thunks";
import { Type } from "@/types/module";

const initialState: State = {
  allTypes: undefined,
  typeByMonthAndYear: undefined,
  status: "idle",
};

export const slice = createSlice({
  name: "types",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTypesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.allTypes = action.payload;
      })
      .addCase(fetchTypesByYearAndMonthAsync.fulfilled, (state, action) => {
        state.typeByMonthAndYear = action.payload;
      });
  },
});

export interface State {
  allTypes?: Array<Type>;
  typeByMonthAndYear?: Array<Type>;
  status: "idle" | "loading" | "failed";
}
