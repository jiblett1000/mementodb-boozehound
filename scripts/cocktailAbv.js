function cocktailAbv(ingredientsVolume) {
  const ingredients = field('Ingredients');
  let sum = 0;

  // for...of loops not working yet.

  for (let i of ingredients) {

    if (ingredients[i].field('ABV')) {
      const unit = ingredients[i].attr('Unit');
      const abv = ingredients[i].field('ABV');
      const amount = ingredients[i].attr('Amount');

      switch (unit) {
        case 'oz':
          sum += amount * abv;
          break;
        case 'Dash':
          sum += (amount * 0.0311) * abv;
          break;
        case 'Barspoon':
          sum += (amount * 0.167) * abv;
          break;
        case 'Piece':
          sum += 0;
          break;
        case 'Drop':
          sum += (amount * 0.0016907) * abv;
          break;
        default:
      }
    } else {
      sum += 0;
    }
  }

  return sum / ingredientsVolume;
}
