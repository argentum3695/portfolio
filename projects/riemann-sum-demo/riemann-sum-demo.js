var increment;
var sliderScale = 0.005;
var min = 0;
var max = 25;


var slider = document.getElementById("myRange");
increment = parseFloat(slider.value)*sliderScale;

var sliderOutput = document.getElementById("sliderOutput");
sliderOutput.innerHTML = `Box width = ${increment}`;

 document.getElementById("changeMinMax").addEventListener("click", updateMinMax); 

function updateMinMax() {
    console.log("updating...");
    var min_input = document.getElementById("minValInput");
    var max_input = document.getElementById("maxValInput");

    min = parseFloat(min_input.value);
    max = parseFloat(max_input.value);
    console.log("done");

    showArea();
}

function showArea() {

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";

    var height = c.height;

    ctx.clearRect(0,0,c.width, c.height);

    ctx.lineWidth = 5;

    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0,c.height);
    ctx.lineTo(c.width, c.height);
    ctx.stroke();

    ctx.beginPath();

    ctx.moveTo(0,c.height);
    ctx.lineTo(0, 0);
    ctx.stroke();

    ctx.lineWidth = 1;

    

    var i = min;

    var total_area_lower = 0;
    var total_area_upper = 0;

    while (i < max) {

        var y_1 = Math.pow(i, 2);
        var y_2 = Math.pow(i + increment, 2);

        var area_1 = y_1 * increment;
        var area_2 = y_2 * increment;

        i += increment;
        total_area_lower += area_1;
        total_area_upper += area_2;
        var scale = 15;
        ctx.strokeStyle = "black";
        ctx.moveTo(i * scale, (height - y_1));
        ctx.strokeRect(i * scale, (height - y_1), increment * scale, y_1);

        ctx.stroke();
        ctx.strokeStyle = "red";

        ctx.moveTo(i * scale, (height - y_2));
        ctx.strokeRect(i * scale, (height - y_2), increment * scale, y_2);

        ctx.stroke();

    }

    var minmax = document.getElementById("minmax");
    minmax.innerText = `Min x value = ${min}, max x value = ${max}`;

    var lowerArea = document.getElementById("lowerArea");
    var upperArea = document.getElementById("upperArea");

    lowerArea.innerText = `Calculated lower area = ${total_area_lower.toFixed(5)}`;
    upperArea.innerText = `Calculated upper area = ${total_area_upper.toFixed(5)}`;

    var theoreticalArea = document.getElementById("theoreticalArea");

    var total_theoretical_area;

    total_theoretical_area = (Math.pow(max, 3)/3) - (Math.pow(min, 3)/3);
    theoreticalArea.innerText = `Theoretical area = ${total_theoretical_area.toFixed(5)}`;

}

showArea();


var slider = document.getElementById("myRange");

slider.oninput = function() {
  increment = parseFloat(this.value) * sliderScale;
//   console.log(increment);
  var sliderOutput = document.getElementById("sliderOutput");
  sliderOutput.innerHTML = `Box width = ${increment}`;
  showArea();
} 