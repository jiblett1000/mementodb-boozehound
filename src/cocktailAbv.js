function cocktailAbv(ingredientsVolume) {
  const ingredients = entry().field('Ingredients');
  const unitRatio = {
    oz: 1,
    Dash: 0.0311,
    Barspoon: 0.167,
    Drop: 0.0016907,
    Piece: 0,
  };
  const ingredientsAbv = ingredients.reduce((sum, ingredient) => {
    if (ingredient.field('ABV')) {
      const unit = ingredient.attr('Unit');
      const abv = ingredient.field('ABV');
      const amount = ingredient.attr('Amount');

      return sum + ((amount * unitRatio[unit]) * abv);
    }
    return sum + 0;
  }, 0);

  return (ingredientsAbv / ingredientsVolume).toFixed(2);
}

function cocktailInitialAbv(initialVolume) {
  entry().set('Initial ABV', cocktailAbv(initialVolume));
}

function cocktailFinalAbv(finalVolume) {
  entry().set('Final ABV', cocktailAbv(finalVolume));
}
