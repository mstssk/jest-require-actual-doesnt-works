const { runChartJs } = require("./runChartJs");

/*
 * `jest.mock("chart.js")` does mock also "chart.js/helpers" module.
 * There are no way to use actual "chart.js/helpers" module if mock "chart.js" module.
 * `jest.unmock("chart.js/helpers")` does not work.
 */
jest.mock("chart.js").mock("chart.js/helpers", () => {
  // 😕 'requireActual' returns mocked module, not actual.
  const orig = jest.requireActual("chart.js/helpers");
  return {
    __esModule: true,
    ...orig,
  };
});

test("test", () => {
  runChartJs();
});
