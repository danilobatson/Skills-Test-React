import { configureStore } from '@reduxjs/toolkit';
import basicFormReducer from './basicFormSlice';

export const store = configureStore({
  reducer: {
    basicForm: basicFormReducer,
  },
});
