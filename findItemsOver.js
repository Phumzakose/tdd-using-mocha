function findItemsOver(itemList, threshold) {
  var items = [];
  for (var i = 0; i < itemList.length; i++) {
    itemList[i].qty > threshold ? items.push(itemList[i]) : [];
  }
  return items;
}
