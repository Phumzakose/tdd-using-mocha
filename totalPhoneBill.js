function totalPhoneBill(str) {
  var total = 0;
  let phoneBill = str.split(",");
  // console.log(phoneBill)
  for (var i = 0; i < phoneBill.length; i++) {
    var bill = phoneBill[i].trim();
    if (bill.startsWith("call")) {
      total += 2.75;
    } else if (bill.startsWith("sms")) {
      total += 0.65;
    } else if (bill.startsWith("data")) {
      total += 45;
    }
  }
  return "R" + total.toFixed(2);
}
