import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import commonReducer from './slices/common-slice/CommonSlice';

export const store = configureStore({
  reducer: { commonReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
