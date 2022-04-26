function allFromTown(regNumberA, regNumberB) {
  let stellies = [];
  let regNum = regNumberA.split(",");
  for (var i = 0; i < regNum.length; i++) {
    let numbers = regNum[i].trim();
    if (numbers.startsWith(regNumberB)) {
      stellies.push(numbers);
    }
  }
  return stellies;
}
