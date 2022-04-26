function mostProfitableDepartment(salesData) {
  const salesMap = {};
  for (var i = 0; i < salesData.length; i++) {
    const sales = salesData[i];
    salesMap[sales.department] = 0;
  }
  for (var i = 0; i < salesData.length; i++) {
    const sales = salesData[i];
    let currentSales = salesMap[sales.department];
    currentSales += sales.sales;
    salesMap[sales.department] = currentSales;
  }

  let currentMaxSales = 0;
  let currentDepartment = "";
  for (var salesDepartment in salesMap) {
    let currentSaleDepartment = salesMap[salesDepartment];
    if (currentSaleDepartment > currentMaxSales) {
      currentMaxSales = currentSaleDepartment;
      currentDepartment = salesDepartment;
    }
  }
  return currentDepartment;
}
