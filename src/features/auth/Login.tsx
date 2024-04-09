import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import { IonButton, IonContent, IonInput, IonLabel, IonPage } from '@ionic/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
    } catch (error) {
      setErrorMessage(t('auth.invalid'));
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
            label={t('email')}
            labelPlacement="floating"
            type="email"
            required
          />
          <IonInput
            value={password}
            onIonChange={e => setPassword(e.detail.value!)}
            label={t('password')}
            labelPlacement="floating"
            type="password"
            required
          />
          {errorMessage && <IonLabel color="danger">{errorMessage}</IonLabel>}
          <IonButton expand="full" type="submit">{t('sign-in')}</IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Login;
