function countAllPaarl(regNumbers) {
  var count = 0;
  var numbers = regNumbers.split(",");
  for (var i = 0; i < numbers.length; i++) {
    var paarl = numbers[i].trim();
    if (paarl.startsWith("CJ")) {
      count++;
    }
  }
  return count;
}
