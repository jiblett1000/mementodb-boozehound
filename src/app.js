import Settings from './usrPref';

let settings = new Settings();

module.exports = {
  settings,
  main(bizName) {
    return message(bizName);
  },
}
