import { configureStore } from '@reduxjs/toolkit'
import SliceData from './SliceData/SliceData'

export const store = configureStore({
  reducer: {
    SliceData: SliceData
  },
})