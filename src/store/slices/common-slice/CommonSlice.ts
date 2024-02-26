import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICommonState {
  progress: number;
}

const initialState: ICommonState = {
  progress: 1,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
  },
});

export const { setProgress } = commonSlice.actions;

export default commonSlice.reducer;
