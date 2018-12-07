import { instanceLibs } from './libraries';
import getInstance from './getInstance';
import UserSettings from './UserSettings';

function init() {
  const instance = getInstance(instanceLibs);
  const userSettings = new UserSettings(instance);

  return userSettings;
}

export default init;
