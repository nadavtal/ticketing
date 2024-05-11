import { createSlice } from "@reduxjs/toolkit"

const shapesSlice = createSlice({
    name: 'shapes',
    initialState: {
      selectedShape: null,
    },
    reducers: {
      setSelectedShape: (state, action) => {
        // console.log(action)
        state.selectedShape = action.payload;
      },
    }
  })
  export const { setSelectedShape } = shapesSlice.actions;
  export default shapesSlice.reducer;