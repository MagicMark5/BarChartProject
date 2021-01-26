$(function () {

  //const data = [10, 5, 35, 42, 21, 50, 10, 8, 66];
  const data = [25, 100, 66, 79, 42, 30, 25]; // RIGHT NOW THE MAX Number of values it can handle is 7 before the $chart width (40vw) is too narrow...
  const $chart = $("#chart");

  let options = {
    width: $chart.width("40vw"), // change this to a "getter" method from input?
    height: $chart.height("40vw") // change this to a "getter" method from input?
  };

  // create HTML Elements for options to customize (buttons, tick boxes, inputs) and link to options

  const drawBarChart = (data, options, element) => {
    let gridTemplateCols = "";
    let highestValue = Math.max(...data);
    let gridTemplateRows = "repeat(" + highestValue + ", 1fr)";

    /*const setBarHeight = (i) => { // Returns integer for row number to start at from top (if top is row 1)
      let rowStart = 1 + highestValue - data[i];
      console.log(rowStart);
      return rowStart;
    }*/

    for (let i = 0; i < data.length; i++) {
      let bar = document.createElement('div');
      bar.setAttribute("class", "bar");
      bar.innerHTML = data[i];
      bar.style["grid-column-start"] = i + 1;
      bar.style["grid-row-start"] = 1 + highestValue - data[i];
      bar.style["grid-row-end"] = -1;
      element.append(bar);
      gridTemplateCols += "1fr ";
    }

    console.log(gridTemplateRows);

    $chart.css("grid-template-columns", gridTemplateCols);
    $chart.css("grid-template-rows", gridTemplateRows);

    let $bars = $(".bar"); // this is an array of all bar divs

    $bars.each(function(i) {
      // this.style.display = "inline";
      // this.style.background = "blue";
      // this.style.padding = "0 10px";
      //this.style.margin = "0 5px"; // TopandBottom LeftandRight
      //this.style.height = data[i]*10 + "%";
      //this.style.paddingTop = data[i]*10 + "%";
     });

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
