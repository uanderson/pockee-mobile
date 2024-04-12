import type { Action, ThunkAction } from '@reduxjs/toolkit'
import { combineSlices, configureStore } from '@reduxjs/toolkit'
import { authSlice } from '../features/auth/authSlice';
import { accountApi } from '../services/accountApi';
import { bankApi } from '../services/bankApi';

const rootReducer = combineSlices(
  authSlice,
  {
    [accountApi.reducerPath]: accountApi.reducer,
    [bankApi.reducerPath]: bankApi.reducer
  },
);

export type RootState = ReturnType<typeof rootReducer>

export const makeStore = (preloadedState?: Partial<RootState>) => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      accountApi.middleware,
      bankApi.middleware
    ),
  preloadedState,
});

export const store = makeStore();

export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
