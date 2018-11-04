function cocktailGlassFilled() {
  const drinkware = field('Drinkware');

  if (drinkware){
    percent = 'Glassware not selected.';
  }

  else {
    const served = field('Served')[0].field('Name');
    const finishedVolume = field('Finished Volume (oz)');
    const drinkwareName = drinkware[0].field('Name');
    const drinkwareCapacity = drinkware[0].field('Capacity (oz)');


    let iceAmount = drinkwareCapacity / iceVolume

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
        var iceVolume = 4;
        break;
      case 'Over Crushed':
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
    percent = ((finishedVolume + (iceAmount * iceVolume)) / drinkwareCapacity).toFixed(2)
  }
  return percent;
}
