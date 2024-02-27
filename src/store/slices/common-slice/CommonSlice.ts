import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IUserOrder {
  title: string;
  type: string;
  answer: string;
}

export interface IUserOrders {
  [key: string]: IUserOrder;
}

export interface ICommonState {
  progress: number;
  user: IUserOrders;
}

const initialState: ICommonState = {
  progress: 0,
  user: {
    order1: { title: 'No data', type: 'No data', answer: 'No data' },
    order2: { title: 'No data', type: 'No data', answer: 'No data' },
    order3: { title: 'No data', type: 'No data', answer: 'No data' },
    order4: { title: 'No data', type: 'No data', answer: 'No data' },
    order5: { title: 'No data', type: 'No data', answer: 'No data' },
    order6: { title: 'No data', type: 'No data', answer: 'No data' },
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
    setEmail: (
      state,
      { payload }: PayloadAction<ICommonState['user']['order6']>
    ) => {
      state.user.order6 = payload;
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
  setEmail,
} = commonSlice.actions;

export default commonSlice.reducer;
