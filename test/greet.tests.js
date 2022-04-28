describe("The greet function", function () {
  it("should greet phumza with 'Hello, phumza'", function () {
    assert.equal("Hello, Phumza", greet("Phumza"));
  });

  it("should greet kamva with 'Hello, kamva'", function () {
    assert.equal(greet(""), "Invalid input");
  });
  it("should greet Themba with 'Hello, Themba'", function () {
    assert.equal(greet(123), "error");
  });
});
