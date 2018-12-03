import UserSettings from './modules/UserSettings';
import setFields from './modules/entry/setFields';

// Instantiate user settings;
// const userSettings = new UserSettings(instance);

function app(instance, desiredFunction) {
  return userSettings.instance;
}

export { UserSettings };
export { app };
