function cocktail_glass_filled(){

  var glassware = field("Glassware");
  var percent = "";

  if (glassware.length === 0){

    percent = "Glassware not selected.";

  }

  else {

    var served = field("Served")[0].field("Name");
    var finished_volume = +field("Finished Volume (oz)");
    var glassware_name = glassware[0].field("Name");
    var glassware_capacity = glassware[0].field("Capacity (oz)");

    switch (served) {
      case "On the Rocks":
        var ice_volume = 0.811;
        switch (glassware) {
          case "Collins":
            var ice_amount = 5;
            break;
          case "Double Rocks":
            var ice_amount = 9;
            break;
          default:
           var ice_amount = 5;
         break;
        };
        break;

      case "On Collins Cube":
        var ice_amount = 1;
        var ice_volume = 4;
        break;

      case "Over Crushed":
        var ice_amount = 1;
        var ice_volume = glassware_capacity - finished_volume;
        break;

      case "On a Big Rock":
        var ice_amount = 1;
        var ice_volume = 4.432899285;
        break;
      default:
        var ice_amount = 0;
        var ice_volume = 0;
        break;
    }

    percent = ((finished_volume + (ice_amount*ice_volume))/glassware_capacity).toFixed(2)
  }

  return percent;
}
