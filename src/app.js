
import UserSettings from './modules/UserSettings';

// Global shorthand variable;
const e = entry();

// Main app function;
function setInstance(instance) {
  return instance;
}

function getSettings(instance) {
  // Instantiate user settings;
  let userSettings = new UserSettings(instance);
}

// Expose modules for use outside bundle;
module.exports = {
  setInstance,
  getSettings,
}
