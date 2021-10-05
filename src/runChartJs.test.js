const { runChartJs } = require("./runChartJs");

jest.mock("chart.js").mock("chart.js/helpers", () => {
  return jest.requireActual("chart.js/helpers");
});

test("test", () => {
  runChartJs();
});
