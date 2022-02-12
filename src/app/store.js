import { configureStore } from '@reduxjs/toolkit';
import randomiserReducer from '../features/randomiser/randomiserSlice.js';

export const store = configureStore({
  reducer: {
    randomiser: randomiserReducer,
  },
});
