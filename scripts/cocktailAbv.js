function cocktailAbv(ingredientsVolume) {
  const ingredients = field('Ingredients');
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

      /*
      switch (unit) {
        case 'oz':
          sum + (amount * abv);
          break;
        case 'Dash':
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
    */
    }
    return sum + 0;
  }, 0);

  return abvTotal / ingredientsVolume;
}
