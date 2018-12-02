
import UserSettings from './modules/UserSettings';
// import setFields from './modules/entry/setFields';

// Instantiate user settings;
const userSettings = new UserSettings(instance);

// Global shorthand variable;
var e = entry();

// Main app function;
function app(instance, functionName) {
  return functionName();
}

// Expose modules for use outside bundle;
module.exports = {
  app,
}
