// src/pages/CheckboxPage.tsx
import React from 'react';
import { IonHeader, IonTitle, IonContent, IonPage, IonList, IonItem, IonLabel, IonCheckbox, IonRouterLink, IonToolbar } from '@ionic/react';
import CheckboxItem from '../components/CheckboxItem';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            Calendar Page?
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonCheckbox aria-label="Checkbox Label" />
          </IonItem>
          <IonItem>
            <IonCheckbox aria-label="Checkbox Label" />
          </IonItem>
        </IonList>
        <IonRouterLink routerLink="/about">About Page</IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
