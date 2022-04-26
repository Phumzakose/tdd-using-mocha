describe("The isFromBellvile function", function () {
  it("should check if the regNumber is from Bellville", function () {
    assert.equal(isFromBellville("CY 123"), true);
  });
  it("should check if the regNumber is from Bellville", function () {
    assert.equal(isFromBellville("CJ 123"), false);
  });
  it("should check if the regNumberis from Bellville", function () {
    assert.equal(isFromBellville("DR 45 LR GP"), false);
  });
});
