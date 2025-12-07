import React, { useEffect } from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { configureNotifications, registerForPushNotificationsAsync } from './src/services/notifications';

configureNotifications();

export default function App() {
  useEffect(() => {
    const init = async () => {
      const token = await registerForPushNotificationsAsync();
      if (token) {
        // TODO: send the token to your backend if you have one
        console.log('Registered push token on startup:', token);
      }
    };
    init();
  }, []);

  return <AppNavigator />;
}