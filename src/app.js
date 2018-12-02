
import UserSettings from './modules/UserSettings';
// import setFields from './modules/entry/setFields';

// Global shorthand variable;
var e = entry();

// Main app function;
function app(instance, functionName) {
  // Instantiate user settings;
  const userSettings = new UserSettings(instance);

  return functionName();
}

// Expose modules for use outside bundle;
export default app;

// MementoDB script should execute here;
