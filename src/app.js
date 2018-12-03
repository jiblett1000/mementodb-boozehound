import UserSettings from './modules/UserSettings';
import setFields from './modules/entry/setFields';

function app(instance, desiredFunction) {
  return userSettings.instance;
}

export { UserSettings };
export { app };
