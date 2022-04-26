describe("countAll Paarl Function", function () {
  it("should count the total of all paarl registration numbers", function () {
    assert.equal(
      3,
      countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123")
    );
  });
  it("should count the total of all paarl registration numbers", function () {
    assert.equal(1, countAllPaarl("CJ 345 123, CL 123-546, CK 345,"));
  });
  it("should count the total of all paarl registration numbers", function () {
    assert.equal(0, countAllPaarl("CL 123-546, CK 345, EC 145, CA 472-456"));
  });
});
