
import UserSettings from './modules/UserSettings';

// Global shorthand variable;
const e = entry();

// Main app function;
export default function setInstance(instance) {
  let userSettings = new UserSettings(instance);

  return userSettings;
}
