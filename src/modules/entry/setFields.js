import init from '../init';
import Drink from '../Drink';

// Set fields for calculated entries;
function setFields(fields) {
  init();

  const drink = new Drink(
    entry().field('Name'),
    entry().field('Ingredients'),
    entry().field('Prep Method(s)'),
    entry().field('Drinkware'),
    entry().field('Served'),
    entry().field('Garnish(es)'),
  );

  fields.keys.map(key => entry().set(key, fields[key]));
}

export default setFields;
