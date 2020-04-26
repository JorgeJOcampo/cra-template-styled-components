import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
