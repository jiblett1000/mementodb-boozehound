import Settings from './usrPref';

module.exports = {
  settings: new Settings(),
  main(bizName) {
    return message(bizName);
  },
}
