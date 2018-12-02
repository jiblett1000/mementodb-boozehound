import UserSettings from './modules/UserSettings';
import setFields from './modules/entry/setFields';

// Global shorthand variable;
const e = entry();
const userSettings = new UserSettings(setInstance);

// Main app function;
function setInstance(instance) {
  return userSettings;
}

export { setInstance };
export { setFields };
