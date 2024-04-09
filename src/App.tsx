
import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import { selectIsAuthenticated, selectLoadingAuthState } from './features/auth/authSlice';
import Login from './features/auth/Login';
import Dashboard from './features/dashboard/Dashboard';
import { useAppSelector } from './redux/hooks';
import { setupFirebase } from './services/firebase';
import { useFirebaseAuthStateChange } from './services/firebaseHooks';

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
setupFirebase();

const App: React.FC = () => {
  useFirebaseAuthStateChange();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const isLoadingAuthState = useAppSelector(selectLoadingAuthState);

  if (isLoadingAuthState) {
    return null;
  }

  return (
    <IonApp>
      {isAuthenticated ? (
        <IonReactRouter>
          <IonSplitPane contentId="main">
            <Menu/>
            <IonRouterOutlet id="main">
              <Route path="/" exact={true}>
                <Redirect to="/dashboard"/>
              </Route>
              <Route path="/dashboard" exact={true}>
                <Dashboard/>
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
