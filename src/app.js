import { instanceLibs } from './modules/libraries';
import getInstance from './modules/getInstance';
import UserSettings from './modules/UserSettings';
import setFields from './modules/entry/setFields';

const instance = getInstance(instanceLibs);
const userSettings = new UserSettings(instance);

function app(instance, desiredFunction) {
  return userSettings.instance;
}

// MementoDB script called here;
export { userSettings };
export { setFields };
export { app };
