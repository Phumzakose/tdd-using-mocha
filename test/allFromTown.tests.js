describe("The countAllFromTown Function", function () {
  it("should return all the registration numbers from Stellies", function () {
    assert.deepEqual(
      ["CL 124", "CL 345", "CL 341"],
      allFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341", "CL")
    );
  });
  it("should return all the registration numbers from CapeTown", function () {
    assert.deepEqual(
      ["CA 724", "CA 9245"],
      allFromTown("CL 124,CY 567,CA 724, CJ 456,CA 9245", "CA")
    );
  });
  it("should return all the registration numbers from Bellville", function () {
    assert.deepEqual(
      ["CY 124", "CY 567"],
      allFromTown("CY 124,CY 567,CL 345, CJ 456,CL 341", "CY")
    );
  });
});
