function pos_category() {

  var business_name = libByName(*Settings)
  var entries = libByName('')
  if (field("White Cap Inventory")[0]) {

    field("White Cap Inventory")[0].field("Category");

  }

  else {

    "Cocktails";

  }

}
