function drinkGlassFilled() {
  const e = entry();

  if (drink.drinkware) {
    const served = entry().get(drink.served)[0].field('Name');
    const finVol = entry().field('Final Volume (oz)');
    const drinkwareCapacity = drinkware[0].field('Capacity (oz)');
    const iceVols = {
      'On the Rocks': 0.0811,
      'On Collins Cube': 4,
      'On Crushed': drinkwareCapacity - finVol,
      'On a Big Rock': 4.432899285,
      'Neat': 0,
      'Slushy': 0,
      'Up': 0,
    };
    const iceVol = iceVols[served];
    const iceAmt = Math.floor(drinkwareCapacity / iceVol);
    const percent = ((finVol + (iceAmt * iceVol)) / drinkwareCapacity).toFixed(decPlaceAcc);

    entry().set('% of Glass Filled', percent * 100);
  }

  entry().set('% of Glass Filled', 'Glassware not selected.');
}
