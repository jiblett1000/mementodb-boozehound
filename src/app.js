
import UserSettings from './modules/UserSettings';
import setFields from './modules/entry/setFields';

// Global shorthand variable;
var e = entry();

// Main app function;
export default function app(instance, functionName) {
  // Instantiate user settings;
  const userSettings = new UserSettings(instance);

  return functionName();
}

// MementoDB script should execute here;
