import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@firebase/auth';

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthState: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    }
  },
  selectors: {
    selectIsAuthenticated: counter => !!counter.user,
  },
});

export const { setAuthState } = authSlice.actions;

export const { selectIsAuthenticated } = authSlice.selectors
