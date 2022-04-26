describe("The transportFee Function", function () {
  it("should return the right price of the shift", function () {
    assert.equal("R20", transportFee("morning"));
  });
  it("should return the right price of the shift", function () {
    assert.equal("R10", transportFee("afternoon"));
  });
  it("should return the right price of the shift", function () {
    assert.equal("free", transportFee("nightshift"));
  });
});
