function cocktailGlassFilled() {
  var drinkware = field("Drinkware");

  if (drinkware.length === 0){
    percent = "Glassware not selected.";
  }

  else {
    var served = field("Served")[0].field("Name");
    var finishedVolume = field("Finished Volume (oz)");
    var drinkwareName = glassware[0].field("Name");
    var drinkwareCapacity = glassware[0].field("Capacity (oz)");

    switch (served) {
      case "On the Rocks":
        var iceVolume = 0.811;

        switch (drinkware) {
          case "Collins":
            var iceAmount = 5;
            break;
          case "Double Rocks":
            var iceAmount = 9;
            break;
          default:
           var iceAmount = 5;
         break;
        };
        break;
      case "On Collins Cube":
        var iceAmount = 1;
        var iceVolume = 4;
        break;
      case "Over Crushed":
        var iceAmount = 1;
        var iceVolume = drinkwareCapacity - finishedVolume;
        break;
      case "On a Big Rock":
        var iceAmount = 1;
        var iceVolume = 4.432899285;
        break;
      default:
        var iceAmount = 0;
        var iceVolume = 0;
        break;
    }
    percent = ((finishedVolume + (iceAmount*iceVolume))/drinkwareCapacity).toFixed(2)
  }
  return percent;
}
