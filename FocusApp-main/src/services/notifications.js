import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export const configureNotifications = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
    }).catch(() => {});
  }
};

export const registerForPushNotificationsAsync = async () => {
  try {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      console.warn('Push notification permission not granted');
      return null;
    }

    const tokenObj = await Notifications.getExpoPushTokenAsync();
    const token = tokenObj?.data ?? null;
    console.log('Expo push token:', token);
    return token;
  } catch (err) {
    console.error('Error getting push token:', err);
    return null;
  }
};

export const scheduleLocalNotification = async ({ title, body, seconds = 1, data = {} } = {}) => {
  return Notifications.scheduleNotificationAsync({
    content: { title: title ?? 'Notification', body: body ?? '', data, sound: true },
    trigger: seconds ? { seconds } : null,
  });
};

export const cancelAllScheduledNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};

export default {
  configureNotifications,
  registerForPushNotificationsAsync,
  scheduleLocalNotification,
  cancelAllScheduledNotifications,
};