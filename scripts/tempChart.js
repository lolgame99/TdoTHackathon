$(function () {
  //Better to construct options first and then pass it as a parameter
  var options = {
    title: {
      text: "Cumulative App downloads on iTunes And Play Store"
    },
    animationEnabled: true,
    axisY: {
      includeZero: false,
      maximum: 110000,
      valueFormatString: "#0,.",
      suffix: " k"
    },
    axisX: {
      title: "Months After Launch"
    },
    toolTip: {
      shared: true,
      content: "<span style='\"'color: {color};'\"'><strong>{name}</strong></span> {y}"
    },

    data: [
    {
      type: "splineArea",
      showInLegend: true,
      name: "iOS",
      dataPoints: [
      { x: 1, y: 3000 },
      { x: 2, y: 7000 },
      { x: 3, y: 10000 },
      { x: 4, y: 14000 },
      { x: 5, y: 23000 },
      { x: 6, y: 31000 },
      { x: 7, y: 42000 },
      { x: 8, y: 56000 },
      { x: 9, y: 64000 },
      { x: 10, y: 81000 },
      { x: 11, y: 105000 }
      ]
    },
    {
      type: "splineArea",
      name: "Android",
      showInLegend: true,
      dataPoints: [
      { x: 4, y: 4000 },
      { x: 5, y: 6000 },
      { x: 6, y: 9000 },
      { x: 7, y: 14000 },
      { x: 8, y: 21000 },
      { x: 9, y: 31000 },
      { x: 10, y: 46000 },
      { x: 11, y: 61000 }

      ]
    }
    ]
  };
  $(".chartContainer").CanvasJSChart(options);
});
