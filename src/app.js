
import UserSettings from './modules/UserSettings';
// import setFields from './modules/entry/setFields';


// Global shorthand variable;
const e = entry();

// Main app function;
function app(instance, functionName) {
  return functionName();
}

// Expose modules for use outside bundle;
module.exports = {
  app,
  UserSettings,
}
