import { createSlice } from "@reduxjs/toolkit"

const shapesSlice = createSlice({
    name: 'shapes',
    initialState: {
      selectedShape: null,
      iconsUrls: [],
    },
    reducers: {
      setSelectedShape: (state, action) => {
        // console.log(action)
        state.selectedShape = action.payload;
      },
      setIconsUrls: (state, action) => {
        state.iconsUrls = action.payload;
      }
    }
  })
  export const { setSelectedShape, setIconsUrls } = shapesSlice.actions;
  export default shapesSlice.reducer;