import Drink from '../Drink';

const drink = new Drink(
  entry().field('Name'),
  entry().field('Ingredients'),
  entry().field('Prep Method(s)'),
  entry().field('Drinkware'),
  entry().field('Served'),
  entry().field('Garnish(es)'),
);

// Set fields for calculated entries;
export default function setFields(fields) {
  fields.keys.map(key => entry().set(key, fields[key]));
}
