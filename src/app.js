
import UserSettings from './modules/UserSettings';

// Global shorthand variable;
const e = entry();

// Main app function;
function setInstance(instance) {
  return instance;
}

// Instantiate user settings;
const userSettings = new UserSettings(setInstance);

// Expose modules for use outside bundle;
module.exports = {
  setInstance,
}
