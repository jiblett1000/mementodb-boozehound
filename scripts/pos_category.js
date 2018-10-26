function pos_category(){

  if (field("White Cap Inventory")[0] !== undefined) {

    field("White Cap Inventory")[0].field("Category");

  }

  else {

    "Cocktails";

  }

}
