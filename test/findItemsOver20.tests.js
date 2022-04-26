describe("The findItemsOver20 Function", function () {
  it("should find items in the list that are over 20", function () {
    assert.deepEqual(
      [
        { name: "pears", qty: 37 },
        { name: "bananas", qty: 27 },
      ],
      findItemsOver20([
        { name: "apples", qty: 10 },
        { name: "pears", qty: 37 },
        { name: "bananas", qty: 27 },
        { name: "apples", qty: 3 },
      ])
    );
  });
  it("should find items in the list that are over 20", function () {
    assert.deepEqual(
      [
        { name: "peach", qty: 37 },
        { name: "strawberries", qty: 40 },
      ],
      findItemsOver20([
        { name: "apples", qty: 10 },
        { name: "peach", qty: 37 },
        { name: "strawberries", qty: 40 },
        { name: "apples", qty: 3 },
      ])
    );
  });
  it("should return empty array if there are no items over 20", function () {
    let items = [
      { name: "apples", qty: 10 },
      { name: "pears", qty: 17 },
      { name: "bananas", qty: 7 },
      { name: "apples", qty: 3 },
    ];
    assert.deepEqual([], findItemsOver20(items));
  });
});
