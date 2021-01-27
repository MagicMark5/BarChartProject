$(function () {

  //const data = [10, 5, 35, 42, 21, 50, 10, 8, 66];
  //const data = [25, 100, 66, 79, 42, 30, 25]; // RIGHT NOW THE MAX Number of values it can handle is 7 before the $chart width (40vw) is too narrow...
  const data = [1, 2, 3, 4, 10];
  const $chart = $("#chart");
  const $form = $("#options-form");
  const $section = $(".value-position");
  const $optionInputs = $(".option-input");
  const optionInputs = Array.from($optionInputs);
  const $options = $(".options");


  let options = {
    width: $chart.width("40vw"), // change this to a "getter" method from input?
    height: $chart.height("40vw") // change this to a "getter" method from input?
  };

  const drawBarChart = (data, options, element) => {
    let gridTemplateCols = "";
    let highestValue = Math.max(...data);
    let gridTemplateRows = "repeat(" + highestValue + ", 1fr)";

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

    $options.on("change", function(e) {
      if (document.getElementById('top').checked) {
        $bars.each(function(i) {
          this.style["align-items"] = "flex-start";
        });
      } else if (document.getElementById('middle').checked) {
        $bars.each(function(i) {
          this.style["align-items"] = "center";
        });
      } else if (document.getElementById('bottom').checked) {
        $bars.each(function(i) {
          this.style["align-items"] = "flex-end";
        });
      }
    });
    // add transitions for height
    // add/change css properties dynamically based on options/event listeners
  }





  drawBarChart(data, options, $chart); // "$chart" is the div element with class "axes" and id "chart"

});
