function cocktailGlassFilled() {
  const drinkware = field('Drinkware');

  if (!drinkware) {
    return 'Glassware not selected.';
  }

  const served = field('Served')[0].field('Name');
  const finishedVolume = field('Finished Volume (oz)');
  const drinkwareCapacity = drinkware[0].field('Capacity (oz)');
  const iceVolume = {
    'On the Rocks': 0.0811,
    'On Collins Cube': 4,
    'On Crushed': drinkwareCapacity - finishedVolume,
    'On a Big Rock': 4.432899285,
  };

  const iceAmount = Math.floor(drinkwareCapacity / iceVolume[served]);

  return ((finishedVolume + (iceAmount * iceVolume)) / drinkwareCapacity).toFixed(2);
}
