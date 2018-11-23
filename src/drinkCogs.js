function drinkCogs() {
  const unitRatio = {
    oz: 30,
    Dash: 0.92,
    Drop: 0.092,
    Barspoon: 4.93,
    Piece: 1,
  };

  // Calculate cost of ingredients

  const ingredientTotal = get(drink.ingredients).reduce((sum, ingredient) => {
    const unit = ingredient.attr('Unit');
    const amount = ingredient.attr('Amount');
    const cost = ingredient.field('Cost');

    return sum + ((amount * unitRatio[unit]) * cost);
  }, 0);

  // Calculate cost of garnish(es)

  const garnishTotal = get(drink.garnishes).reduce((sum, garnish) => {
    const garnishCost = garnish.field('Cost');

    return sum + garnishCost;
  }, 0);

  // Add ingredient and Garnish costs together

  return (ingredientTotal + garnishTotal).toFixed(userSettings.decPlaceAcc);
}
