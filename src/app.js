
import UserSettings from './modules/UserSettings';
import setFields from './modules/entry/setFields';

// Global shorthand variable;
var e = entry();

// Main app function;
export default function app(bizName, functionName) {
  // Instantiate user settings;
  const userSettings = new UserSettings(bizName);

  return functionName();
}

// MementoDB script should execute here;
