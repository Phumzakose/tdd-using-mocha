describe("The isWeekday Function", function () {
  it("should return true if the day passed is  a weekday", function () {
    assert.equal(true, isWeekday("Monday"));
  });
  it("should return true if the day passed is a weekday", function () {
    assert.equal(true, isWeekday("Tuesday"));
    assert.equal(true, isWeekday("Wednesday"));
  });

  it("should return false if the day passed is a weekend", function () {
    assert.equal(false, isWeekday("saturday"));
    assert.equal(false, isWeekday("Sunday"));
  });
});
