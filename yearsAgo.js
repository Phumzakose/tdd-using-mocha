function yearsAgo(year) {
  var currentYear = new Date().getFullYear();
  var howLongAgo = currentYear - year;
  return howLongAgo;
}
