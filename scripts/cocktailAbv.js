function cocktailAbv(ingredientsVolume) {
  const e = entry();
  const ingredients = e.field('Ingredients');
  const unitRatio = {
    oz: 1,
    Dash: 0.0311,
    Barspoon: 0.167,
    Drop: 0.0016907,
    Piece: 0,
  };
  const abvTotal = ingredients.reduce((sum, ingredient) => {
    if (ingredient.field('ABV')) {
      const unit = ingredient.attr('Unit');
      const abv = ingredient.field('ABV');
      const amount = ingredient.attr('Amount');

      return sum + ((amount * unitRatio[unit]) * abv);
    }
    return sum + 0;
  }, 0);

  e.set(field('Initial ABV'), (abvTotal / ingredientsVolume).toFixed(2));
}
