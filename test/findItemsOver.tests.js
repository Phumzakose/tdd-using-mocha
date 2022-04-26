describe("The findItemsOver", function () {
  it("should return items higher than the threshold", function () {
    var results = [
      { name: "apples", qty: 40 },
      { name: "bananas", qty: 23 },
      { name: "apples", qty: 37 },
    ];
    var threshold = 20;
    assert.deepEqual(
      [
        { name: "apples", qty: 40 },
        { name: "bananas", qty: 23 },
        { name: "apples", qty: 37 },
      ],
      findItemsOver(results, threshold)
    );
  });
  it("should return items higher than the threshold", function () {
    var threshold = 10;
    var results = [
      { name: "apples", qty: 40 },
      { name: "bananas", qty: 23 },
      { name: "apples", qty: 7 },
    ];
    var expected = [
      { name: "apples", qty: 40 },
      { name: "bananas", qty: 23 },
    ];

    assert.deepEqual(expected, findItemsOver(results, threshold));
  });
  it("should return an empty array if there is no item higher than threshold ", function () {
    var threshold = 20;
    var expected = [];
    var results = [
      { name: "apples", qty: 4 },
      { name: "bananas", qty: 8 },
      { name: "apples", qty: 7 },
    ];
    assert.deepEqual(expected, findItemsOver(results, threshold));
  });
});
