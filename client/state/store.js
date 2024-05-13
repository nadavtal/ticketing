import { createSlice, configureStore } from '@reduxjs/toolkit'
import modelsReducer from './models/modelsSlice'
import shapesReducer from './shapes/shapesSlice'


export const store = configureStore({
  reducer: {
    models: modelsReducer,
    shapes: shapesReducer
  }
})

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))


// {value: 1}