import Drink from '../Drink';

const drink = new Drink();
// Set fields for calculated entries;
export default function setFields(fields) {
  fields.keys.map(key => set(key, fields[key]));
}
