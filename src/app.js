
import UserSettings from './modules/UserSettings';

// Global shorthand variable;
const e = entry();

// Main app function;
function setInstance(instance) {
  let userSettings = new UserSettings(instance);

  return userSettings;
}

// Expose modules for use outside bundle;
export default { setInstance };
