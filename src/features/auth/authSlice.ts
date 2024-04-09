import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@firebase/auth';

interface UserState {
  user: User | null;
  loading: boolean;
}

const initialState: UserState = {
  user: null,
  loading: true
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },

    setLoadingAuthState: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
  selectors: {
    selectIsAuthenticated: state => !!state.user,
    selectLoadingAuthState: state => state.loading,
  },
});

export const { setAuthState, setLoadingAuthState } = authSlice.actions;

export const { selectIsAuthenticated, selectLoadingAuthState } = authSlice.selectors
