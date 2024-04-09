import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, } from '@ionic/react';
import { homeOutline, homeSharp } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';

import { useLocation } from 'react-router-dom';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'menu.dashboard',
    url: '/dashboard',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  }
];

const Menu: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url}
                  routerDirection="none" lines="none" detail={false}
                >
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon}/>
                  <IonLabel>{t(appPage.title)}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
