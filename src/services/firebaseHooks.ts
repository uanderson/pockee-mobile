import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useEffect } from 'react';
import { setAuthState, setLoadingAuthState } from '../features/auth/authSlice';
import { AppUser } from '../features/auth/models';
import { useAppDispatch } from '../redux/hooks';

export const useFirebaseAuthStateChange = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setLoadingAuthState(true));

    const unsubscribe = onAuthStateChanged(getAuth(), user => {
      let appUser: AppUser | null = null

      if (user) {
        appUser = {
          emailVerified: user.emailVerified,
          displayName: user.displayName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
          uid: user.uid,
        };
      }

      dispatch(setAuthState(appUser));
      dispatch(setLoadingAuthState(false));
    });

    return () => unsubscribe();
  }, []);
};
