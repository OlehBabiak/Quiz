import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICommonState {
  progress: number;
  user: {
    order1: { title: string; type: string; answer: string };
    order2: { title: string; type: string; answer: string };
    order3: { title: string; type: string; answer: string };
    order4: { title: string; type: string; answer: string };
    order5: { title: string; type: string; answer: string };
    order6: { title: string; type: string; answer: string };
  };
}

const initialState: ICommonState = {
  progress: 0,
  user: {
    order1: { title: '', type: '', answer: '' },
    order2: { title: '', type: '', answer: '' },
    order3: { title: '', type: '', answer: '' },
    order4: { title: '', type: '', answer: '' },
    order5: { title: '', type: '', answer: '' },
    order6: { title: '', type: '', answer: '' },
  },
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
      localStorage.clear();
      localStorage.setItem('data', JSON.stringify(state));
    },
    setFirstOrder: (
      state,
      action: PayloadAction<ICommonState['user']['order1']>
    ) => {
      state.user.order1 = action.payload;
      localStorage.clear();
      localStorage.setItem('data', JSON.stringify(state));
    },
    setSecondOrder: (
      state,
      { payload }: PayloadAction<ICommonState['user']['order2']>
    ) => {
      state.user.order2 = payload;
      localStorage.clear();
      localStorage.setItem('data', JSON.stringify(state));
    },
    setThirdOrder: (
      state,
      { payload }: PayloadAction<ICommonState['user']['order3']>
    ) => {
      state.user.order3 = payload;
      localStorage.clear();
      localStorage.setItem('data', JSON.stringify(state));
    },
    setFourthOrder: (
      state,
      { payload }: PayloadAction<ICommonState['user']['order4']>
    ) => {
      state.user.order4 = payload;
      localStorage.clear();
      localStorage.setItem('data', JSON.stringify(state));
    },
    setFifthOrder: (
      state,
      { payload }: PayloadAction<ICommonState['user']['order5']>
    ) => {
      state.user.order5 = payload;
      localStorage.clear();
      localStorage.setItem('data', JSON.stringify(state));
    },
  },
});

export const {
  setProgress,
  setFirstOrder,
  setSecondOrder,
  setThirdOrder,
  setFourthOrder,
  setFifthOrder,
} = commonSlice.actions;

export default commonSlice.reducer;
