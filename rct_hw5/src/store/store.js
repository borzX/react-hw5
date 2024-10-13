import { configureStore } from '@reduxjs/toolkit'
import { toggleThemeReducer } from './toggleThemeReducer'


export const store = configureStore({
  reducer: {
    switcher: toggleThemeReducer,
  }
})