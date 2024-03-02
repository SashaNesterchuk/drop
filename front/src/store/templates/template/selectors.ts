import type { ReduxState } from "@/store";

export const selectTemplate = (state: ReduxState) => state.template.value;
