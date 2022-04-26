describe("The fromWhere Function", function () {
  it("should return Bellville if the registration number is from Bellville", function () {
    assert.equal("Bellville", fromWhere("CY 1234"));
  });
  it("should return Cape Town if the registration number is from Cape Town", function () {
    assert.equal("Cape Town", fromWhere("CA 4678"));
  });
  it("sould return Paarl if the registration number is from Paarl", function () {
    assert.equal("Paarl", fromWhere("CJ 786"));
  });
  it("should return 'Some other place' if registration number is from Eastern Cape", function () {
    assert.equal("Some other place!", fromWhere("EC 925"));
  });
});
