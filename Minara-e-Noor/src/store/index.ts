// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slice";
import arabicFontFamilyReducer from "./slice/fontsSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    arabicFontFamily: arabicFontFamilyReducer,
  },
});

export { setTheme } from "./slice";
export { setArabicFont } from "./slice/fontsSlice";
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
