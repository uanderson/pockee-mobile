import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { IonButton, IonContent, IonInput, IonLabel, IonPage } from '@ionic/react';
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
      console.error(error);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen className="ion-padding">
        <form onSubmit={handleLogin}>
          <IonInput
            value={email}
            onIonChange={e => setEmail(e.detail.value!)}
            label="E-mail"
            labelPlacement="floating"
            type="email"
            required
          />
          <IonInput
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            label="Password"
            labelPlacement="floating"
            type="password"
            required
          />
          {errorMessage && <IonLabel color="danger">{errorMessage}</IonLabel>}
          <IonButton expand="full" type="submit">Login</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
