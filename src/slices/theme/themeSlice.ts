import { createAppSlice } from "@/lib/createAppSlice";
import { PayloadAction, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
import { useAppSelector } from "@/lib/hooks";

export interface ThemeSliceState {
  mode: string;
}

const initialState: ThemeSliceState = {
  mode: "light",
};

export const themeSlice = createAppSlice({
  name: "theme",
  initialState,
  reducers: (create) => ({
    initializeDefaultTheme : create.reducer((state) => {
      state.mode = "dark";
    }),
    toggleTheme: create.reducer((state) => {
        state.mode === "light" ? "dark" : "light"
    }),
}),
  selectors: {
    selectCurrentTheme: (theme) => theme.mode,
  }
});

export const { initializeDefaultTheme, toggleTheme } = themeSlice.actions;

export const { selectCurrentTheme } = themeSlice.selectors;