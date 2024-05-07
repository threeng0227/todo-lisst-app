import { createSlice } from '@reduxjs/toolkit';

interface InterfaceInitState {
  category: null,
}

const initialState: InterfaceInitState = {
  category: null
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {

    setCategory: (state, action) => {
      state.category = action.payload
    },
  },
});

// Actions
export const {
  setCategory,
} = homeSlice.actions;
export default homeSlice.reducer;
