
import UserSettings from './modules/UserSettings';
// import setFields from './modules/entry/setFields';

// Global shorthand variable;
const e = entry();

// Main app function;
function getInstance(instance) {
  return instance;
}

// Instantiate user settings;
const userSettings = new UserSettings(getInstance);

// Expose modules for use outside bundle;
module.exports = {
  getInstance,
}
