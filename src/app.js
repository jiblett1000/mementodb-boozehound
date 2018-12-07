import getInstance from './modules/getInstance';
import UserSettings from './modules/UserSettings';
import setFields from './modules/entry/setFields';

const instance = getInstance();
const userSettings = new UserSettings(instance);

// MementoDB script called here;
export { instance };
export { userSettings };
export { setFields };
