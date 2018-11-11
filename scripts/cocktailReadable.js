function cocktailReadable() {
  const ingredients = entry().field('Ingredients');
  const unitPlurals = {
    oz: 'oz',
    Barspoon: 'Barspoons',
    Drop: 'Drops',
    Piece: 'Pieces',
    Dash: 'Dashes',
  };
  let text = '';

  for (i = 0; i < ingredients.length; i++) {
    const amount = ingredients[i].attr('Amount');
    const name = ingredients[i].field('Name');

    // Check if singular or plural

    if (amount > 1) {
      const unit = unitPlurals[ingredients[i].attr('Unit')];
    }
      const unit = ingredients[i].attr('Unit');
    }

    // Check if last ingredient

    if (i === ingredients.length - 1) {
      text += amount + ' ' + unit + '  ' + name;
    }
      text += amount + ' ' + unit + '  ' + name + '\n';
  entry().set('Ingredients_Readable', text);
}
