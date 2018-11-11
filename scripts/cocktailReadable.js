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
  const specs = ingredients.reduce((text, ingredient, index) => {
    const amount = ingredient.attr('Amount');
    const name = ingredient.field('Name');
    const unitRaw = ingredient.attr('Unit');

    // Check if singular or plural
    const unit = (amount <= 1) ? unitRaw : unitPlurals[unitRaw];

    // Check if last ingredient
    const line = text + (amount + ' ' + unit + '  ' + name);

    return (index <= ingredients.length - 1) ? line : line + '\n';
  }, '');

  e.set('Ingredients_Readable', specs);
}
