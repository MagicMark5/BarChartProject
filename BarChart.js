$(function () {

  const data = [1, 2, 3, 4, 5];
  const $chart = $("#chart");

  let options = {
    width: $chart.width("30vw"),
    height: $chart.height("30vw")
  };

  // create HTML Elements for options to customize (buttons, tick boxes, inputs) and link to options

  const drawBarChart = (data, options, element) => {
    for (let i = 0; i < data.length; i++) {
      let bar = document.createElement('div');
      bar.setAttribute("class", "bar");
      bar.innerHTML = data[i];
      //bar.style.height = data[i]*10 + "px"; // Cannot change height of inline elements!
      element.append(bar);
    }
    let $bars = $(".bar"); // this is an array of all bar divs
    $bars.each(function(i) {
      this.style.display = "inline";
      this.style.background = "blue";
      this.style.padding = "0 10px";
      this.style.margin = "0 5px"; // TopandBottom LeftandRight
      //this.style.height = data[i]*10 + "%";
      this.style.paddingTop = data[i]*10 + "%";
     });
    // height of each bar is dependent on data values
    // add transitions for height
    // add/change css properties dynamically based on options/event listeners
  }

// The data parameter will be the data the chart should work from
// Start with just an Array of numbers e.g. [1, 2, 3, 4, 5]

// The options parameter should be an object which has options for the chart.
// e.g. width and height of the bar chart

// The element parameter should be a DOM element or jQuery element that the chart will get rendered into.

  drawBarChart(data, options, $chart); // "chart" is the div element with class "axes" and id "chart"

});
