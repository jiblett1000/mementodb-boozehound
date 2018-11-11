function cocktailAbv(ingredientsVolume) {
  const ingredients = field('Ingredients');

  const abvTotal = ingredients.reduce((sum, ingredient) => {

    if (ingredient.field('ABV')) {
      const unit = ingredient.attr('Unit');
      const abv = ingredient.field('ABV');
      const amount = ingredient.attr('Amount');

      switch (unit) {
        case 'oz':
          sum + (amount * abv);
          break;
        case 'Dash':(let i of ingredients)
          sum + ((amount * 0.0311) * abv);
          break;
        case 'Barspoon':
          sum + ((amount * 0.167) * abv);
          break;
        case 'Piece':
          sum + 0;
          break;
        case 'Drop':
          sum + ((amount * 0.0016907) * abv);
          break;
        default:
      }
    } else {
      sum + 0;
    }
  }, 0);

  return sum / ingredientsVolume;
}
