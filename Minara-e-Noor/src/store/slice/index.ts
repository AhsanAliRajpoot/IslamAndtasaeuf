import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { themes, Theme } from "@theme";

type ThemeState = {
  theme: Theme;
  themeName: keyof typeof themes;
};

const initialState: ThemeState = {
  theme: themes.light,
  themeName: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<keyof typeof themes>) => {
      state.themeName = action.payload;
      state.theme = themes[action.payload];
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
