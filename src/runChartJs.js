const {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} = require("chart.js");
const { color } = require("chart.js/helpers");

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

function runChartJs() {
  const canvas = document.createElement("canvas");
  document.body.append(canvas);

  const mainColor = "tomato";
  const hoverColor = color("tomato").alpha(0.5).rgbString();
  console.log(mainColor, hoverColor);
  const chart = new Chart(canvas, {
    type: "bar",
    data: {
      labels: ["test"],
      datasets: [{ data: [123] }],
    },
    options: {
      elements: {
        bar: {
          backgroundColor: mainColor,
          hoverBackgroundColor: hoverColor,
        },
      },
    },
  });
}

exports.runChartJs = runChartJs;
