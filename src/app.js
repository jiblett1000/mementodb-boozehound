import UserSettings from './modules/UserSettings';
import setFields from './modules/entry/setFields';

export default function app(instance, desiredFunction) {
  // Instantiate user settings;
  let userSettings = new UserSettings(instance);

  return desiredFunction;
}
