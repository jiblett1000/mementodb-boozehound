import UserSettings from './modules/UserSettings';
import setFields from './modules/entry/setFields';

// Instantiate user settings;
const userSettings = new UserSettings(setInstance);

// Set app instance;
function setInstance(instance) {
  return instance;
}

export { setInstance };
export { setFields };
