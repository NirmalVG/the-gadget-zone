import { createSlice } from '@reduxjs/toolkit';

const expandSlice = createSlice({
  name: 'expand',
  initialState: false,
  reducers: {
    toggleExpand: state => !state,
  },
});

export const { toggleExpand } = expandSlice.actions;
export default expandSlice.reducer;