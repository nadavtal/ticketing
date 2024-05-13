import { createSlice } from "@reduxjs/toolkit"

const modelsSlice = createSlice({
    name: 'models',
    initialState: {
      modelUrls: [],
    },
    reducers: {
      setModelsUrls: (state, action) => {
        console.log(action)
        state.modelUrls = action.payload;
      },
    }
  })
  export const { setModelsUrls } = modelsSlice.actions;
  export default modelsSlice.reducer;