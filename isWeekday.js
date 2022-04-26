function isWeekday(str) {
  var string = str.toLowerCase();
  if (string.startsWith("s")) {
    return false;
  } else {
    return true;
  }
}
