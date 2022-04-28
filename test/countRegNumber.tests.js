describe("The countRegNumber Function", function () {
  it("should count the number of registration numbers in a string", function () {
    assert.equal(3, countRegNumber("CA 182736,CY 523519,CJ 812328"));
  });
  it("should count the number of registration numbers in a string", function () {
    assert.equal(1, countRegNumber("CA 182736"));
  });
  it("should count the number of registration numbers in a string", function () {
    assert.equal(2, countRegNumber("CY 329734,EC 145734"));
  });
});
