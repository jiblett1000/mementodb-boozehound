function posCategory() {
  var businessName = libByName(*Settings)
  var entries = libByName('')

  if (field("White Cap Inventory")[0]) {
    field("White Cap Inventory")[0].field("Category");
  }
  else {
    "Cocktails";
  }
}
