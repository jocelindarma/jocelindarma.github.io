import { createSlice } from '@reduxjs/toolkit'

export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    darkMode: true
  },
  reducers: {
    setMode: (state, action) => {
      state.darkMode = action.payload;
    },
  }
})

export const { setMode } = modeSlice.actions

export default modeSlice.reducer