function cocktailGlassFilled() {
  const e = entry();
  const drinkware = e.field('Drinkware')[0];

  if (!drinkware) {
    return 'Glassware not selected.';
  }
  const servedArr = e.field('Served')[0];
  const served = servedArr.field('Name');
  const finalVolume = e.field('Final Volume (oz)');
  const drinkwareCapacity = drinkware.field('Capacity (oz)');
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
  const percent = ((finalVolume + (iceAmount * iceVolume)) / drinkwareCapacity).toFixed(2);

  e.set('% of Glass Filled', percent);
}
