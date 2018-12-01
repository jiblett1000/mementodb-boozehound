
import UserSettings from '../UserSettings';
import Drink from '../Drink';

const userSettings = new UserSettings(bizName);
const e = entry();
const drink = new Drink(
  e.field('Name'),
  e.field('Ingredients'),
  e.field('Prep Method(s)'),
  e.field('Drinkware'),
  e.field('Served'),
  e.field('Garnish(es)'),
);

// Set fields for calculated entries;
export default function setFields(fields) {
  fields.keys.map(key => set(key, fields[key]));
}
