describe("The greet function", function () {
  it("should greet phumza with 'Hello, phumza'", function () {
    assert.equal("Hello, Phumza", greet("Phumza"));
  });

  it("should return invalid when an empty string is passed", function () {
    assert.equal(greet(""), "Invalid input");
  });
  it("should return an error when a number is passed", function () {
    assert.equal(greet(123), "error");
  });
});
