describe("The totalPhoneBill Function", function () {
  it("should calculate the total of phone bill", function () {
    assert.equal("R7.45", totalPhoneBill("call, sms, call, sms, sms"));
  });
  it("should calculate the total of phone bill", function () {
    assert.equal("R52.45", totalPhoneBill("call, sms, call, sms, sms, data"));
  });
  it("should calculate the total of phone bill", function () {
    assert.equal("R3.40", totalPhoneBill("call, sms"));
  });
});
