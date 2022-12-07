import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './reducer';

export default configureStore({
  reducer: {
    darkMode: modeReducer,
  }
})