function cocktailReadable() {
  const e = entry();
  const ingredients = e.field('Ingredients');
  const unitPlurals = {
    oz: 'oz',
    Barspoon: 'Barspoons',
    Drop: 'Drops',
    Piece: 'Pieces',
    Dash: 'Dashes',
  };
  // Add each ingredient to the specs list

  const specs = ingredients.reduce((text, ingredient) => {
    const amount = ingredient.attr('Amount');
    const name = ingredient.field('Name');

    // Check if singular or plural

    if (amount > 1) {
      let unit = unitPlurals[ingredient.attr('Unit')];
    }
    let unit = ingredient.attr('Unit');

    // Check if last ingredient

    if (ingredient === ingredients.length - 1) {
      return `${text}${amount} ${unit} ${name}`;
    }
    return `${text}${amount} ${unit} ${name} '\n'`;
  }, 0);
  e.set('Ingredients_Readable', specs);
}
