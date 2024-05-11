import { createSlice, configureStore } from '@reduxjs/toolkit'
import menuReducer from './menu/menuSlice'
import skillsReducer from './skills/skillsSlice';
import tubesReducer from './tubes/tubesSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    skills: skillsReducer,
    tubes: tubesReducer
  }
})

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))


// {value: 1}