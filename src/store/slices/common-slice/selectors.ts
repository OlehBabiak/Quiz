import { RootState } from 'store/store';

export const selectProgress = (state: RootState) =>
  state.commonReducer.progress;
