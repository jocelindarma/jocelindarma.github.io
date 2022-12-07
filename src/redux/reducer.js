import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  darkMode: true,
}

export const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode(state, action) {
      state.darkMode = action.payload
    }
  }
})

export const { setMode } = modeSlice.actions

export default modeSlice.reducer