import Drink from '../Drink';

// Set fields for calculated entries;
function setFields() {
  const drink = new Drink(
    entry().field('Name'),
    entry().field('Ingredients'),
    entry().field('Prep Method(s)'),
    entry().field('Drinkware'),
    entry().field('Served'),
    entry().field('Garnish(es)'),
  );

  drink.fields.keys.map(key => entry().set(key, drink[key]));
}

export default setFields;
