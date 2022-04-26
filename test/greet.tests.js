describe("the greet function", function () {
  it("should greet phumza with 'Hello, phumza'", function () {
    assert.equal("Hello, phumza", greet("phumza"));
  });

  it("should greet kamva with 'Hello, kamva'", function () {
    assert.equal("Hello, kamva", greet("kamva"));
  });
  it("should greet Themba with 'Hello, Themba'", function () {
    assert.equal("Hello, Themba", greet("Themba"));
  });
});
