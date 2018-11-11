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

  const iceAmount = Math.floor(drinkwareCapacity / iceVolume['served']);
  /*
    switch (served) {
      case 'On the Rocks':
        let iceVolume = 0.811;

        switch (drinkware) {
          case 'Collins':
            var iceAmount = 5;
            break;
          case 'Double Rocks':
            var iceAmount = 9;
            break;
          default:
           var iceAmount = 5;
         break;
        };
        break;
      case 'On Collins Cube':
        var iceAmount = 1;
        let iceVolume = 4;
        break;
      case 'On Crushed':
        var iceAmount = 1;
        var iceVolume = drinkwareCapacity - finishedVolume;
        break;
      case 'On a Big Rock':
        var iceAmount = 1;
        var iceVolume = 4.432899285;
        break;
      default:
        var iceAmount = 0;
        var iceVolume = 0;
        break;
    }
    */
  return ((finishedVolume + (iceAmount * iceVolume)) / drinkwareCapacity).toFixed(2);
}
