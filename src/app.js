
import UserSettings from './modules/UserSettings';

// Global shorthand variable;
const e = entry();

// Instantiate user settings;
const userSettings = new UserSettings(setInstance);

// Main app function;
function setInstance(instance) {
  return instance;
}

// Expose modules for use outside bundle;
module.exports = {
  setInstance,
}
