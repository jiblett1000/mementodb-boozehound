function cocktailGlassFilled() {
  const drinkware = entry().field('Drinkware');

  if (drinkware) {
    const served = entry().field('Served')[0].field('Name');
    const finalVolume = entry().field('Final Volume (oz)');
    const drinkwareCapacity = drinkware[0].field('Capacity (oz)');
    const iceVolumes = {
      'On the Rocks': 0.0811,
      'On Collins Cube': 4,
      'On Crushed': drinkwareCapacity - finalVolume,
      'On a Big Rock': 4.432899285,
      'Neat': 0,
      'Slushy': 0,
      'Up': 0,
    };
    const iceVolume = iceVolumes[served];
    const iceAmount = Math.floor(drinkwareCapacity / iceVolume);
    const percent = ((finalVolume + (iceAmount * iceVolume)) / drinkwareCapacity).toFixed(decimalPlaceAccuracy);

    entry().set('% of Glass Filled', percent * 100);
  }

  entry().set('% of Glass Filled', 'Glassware not selected.');
}
