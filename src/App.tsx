import { initializeApp } from '@firebase/app';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Login from './pages/Login';
import Page from './pages/Page';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { selectIsAuthenticated, setAuthState } from './redux/slices/authSlice';
import { firebaseConfig } from './services/firebase';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();
initializeApp(firebaseConfig);

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), user => dispatch(setAuthState(user)));

    return () => unsubscribe();
  }, []);

  return (
    <IonApp>
      {isAuthenticated ? (
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu/>
            <IonRouterOutlet id="main">
              <Route path="/" exact={true}>
                <Redirect to="/folder/Inbox"/>
              </Route>
              <Route path="/folder/:name" exact={true}>
                <Page/>
              </Route>
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      ) : (
        <Login/>
      )}
    </IonApp>
  );
};

export default App
