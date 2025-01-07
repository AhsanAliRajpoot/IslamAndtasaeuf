import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArabicFontKey, customFontSizeKeys } from "@theme"; // Assuming you have defined this type in your theme file.

type ArabicFontFamilyState = {
  arabicFont: ArabicFontKey; // The key representing the Arabic font family.
};

interface FontState {
  arabicFontSize: customFontSizeKeys;
}

const initialState: ArabicFontFamilyState = {
  arabicFont: "PDMS_Saleem", // Default Arabic font.
};

const arabicFontFamilySlice = createSlice({
  name: "arabicFontFamily",
  initialState,
  reducers: {
    setArabicFont: (state, action: PayloadAction<ArabicFontKey>) => {
      state.arabicFont = action.payload;
    },
  },
});

export const { setArabicFont } = arabicFontFamilySlice.actions;
export default arabicFontFamilySlice.reducer;
