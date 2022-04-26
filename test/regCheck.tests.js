describe("regCheck function", function () {
  it("should check if the registrationNumber is from Gauteng Province", function () {
    assert.equal(true, regCheck("DC 55 YU GP", "GP"));
    assert.equal(false, regCheck("DC 55 YU GP", "EC"));
  });
  it("should check if the registrationNumber is from Eastern Cape", function () {
    assert.equal(true, regCheck("ERT 123 EC", "EC"));
    assert.equal(false, regCheck("ERT 123 EC", "GP"));
  });
  it("should check if the registrationNumber is from Limpopo Province", function () {
    assert.equal(true, regCheck("5566 L", "L"));
    assert.equal(false, regCheck("ERT 123 L", "EC"));
  });
});
