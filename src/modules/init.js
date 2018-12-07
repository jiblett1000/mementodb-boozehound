import getInstance from './getInstance';
import UserSettings from './UserSettings';

function init() {
  const userSettings = new UserSettings(getInstance);

  return userSettings;
}

export default init;
