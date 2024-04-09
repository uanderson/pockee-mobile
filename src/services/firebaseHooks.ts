import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useEffect } from 'react';
import { setAuthState, setLoadingAuthState } from '../features/auth/authSlice';
import { useAppDispatch } from '../redux/hooks';

export const useFirebaseAuthStateChange = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoadingAuthState(true));

    const unsubscribe = onAuthStateChanged(getAuth(), user => {
      dispatch(setAuthState(user));
      dispatch(setLoadingAuthState(false));
    });

    return () => unsubscribe();
  }, []);
};
