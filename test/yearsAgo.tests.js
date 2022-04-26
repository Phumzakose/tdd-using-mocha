describe("The yearsAgo function", function () {
  it("should calculate how many years ago that year is from the current year", function () {
    assert.equal(46, yearsAgo(1976));
  });
  it("should calculate how many years ago that year is from current year", function () {
    assert.equal(22, yearsAgo(2000));
  });
  it("should calculate how many years ago that year is from current year", function () {
    assert.equal(5, yearsAgo(2017));
  });
});
