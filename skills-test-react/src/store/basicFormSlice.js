import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataRows: [],
  input: '',
};

export const basicFormSlice = createSlice({
  name: 'basicForm',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.dataRows.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.dataRows.splice(action.payload, 1);
    },
    changeInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { changeInput, addTodo, deleteTodo } = basicFormSlice.actions;

export default basicFormSlice.reducer;
