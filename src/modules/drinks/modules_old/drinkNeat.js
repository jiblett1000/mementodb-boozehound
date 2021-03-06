function drinkNeat() {
  const e = entry();
  const ingredients = entry().field('Ingredients');
  const unitPlurals = {
    oz: 'oz',
    Barspoon: 'Barspoons',
    Drop: 'Drops',
    Piece: 'Pieces',
    Dash: 'Dashes',
  };

  // Add each ingredient to the specs list
  const specs = ingredients.reduce((text, ingredient, index) => {
    const amt = ingredient.attr('Amount');
    const name = ingredient.field('Name');
    const unitRaw = ingredient.attr('Unit');

    // Check if singular or plural
    const unit = (amt <= 1) ? unitRaw : unitPlurals[unitRaw];

    // Check if last ingredient
    const line = `${text} ${amt} ${unit} ${name}`;

    return (index < ingredients.length - 1) ? `${line} \n` : line;
  }, '');

  entry().set('Ingredients Neat', specs);
}
